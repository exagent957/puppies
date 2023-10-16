import customFetch from '../utils/customFetch';
import { Outlet, useLoaderData, useNavigation, redirect } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '../components';
import { toast } from 'react-toastify';

const singleClientCommunicationsQuery = (clientId) => {
  // const { sort } = params;
  // const clientId = 'clientId';
  return {
    // queryKey: ['communications', id, sort ?? 'newest'],
    queryKey: ['clients, id'],
    queryFn: async () => {
      const { data } = await customFetch.get(`/clients/${clientId}/communications`);
      return data;
    }
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleClientCommunicationsQuery(params.id));
      console.log(`clientId from loader params.id = ${params.id}`);
      return params.id;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return redirect('/dashboard/clients');
    }
  };

const CommunicationsContext = createContext();
const CommunicationsLayout = () => {
  const clientId = useLoaderData();
  const { data } = useQuery(singleClientCommunicationsQuery(clientId)).data; //provides a well-formed communications object for the specific client
  const communicationsObj = data.docs;
  console.log(`data resulting from singleClientCommunicationsQuery ${JSON.stringify(data.docs)}`);
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <CommunicationsContext.Provider value={{ communicationsObj }}>
      <div className="communications-page">{isPageLoading ? <Loading /> : <Outlet />}</div>
    </CommunicationsContext.Provider>
  );
};

//custom context hook
export const useCommunicationsContext = () => useContext(CommunicationsContext);

export default CommunicationsLayout;