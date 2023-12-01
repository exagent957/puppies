import customFetch from '../utils/customFetch';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '../components';

const allLittersQuery = (params) => {
  const { search, sort, page } = params;
  return {
    queryKey: ['litters', search ?? '', sort ?? 'newest', page ?? 1],
    queryFn: async () => {
      const { data } = await customFetch.get('/litters', {
        params
      });
      return data;
    }
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    await queryClient.ensureQueryData(allLittersQuery(params));
    return { searchValues: { ...params } };
  };

const LittersContext = createContext();

const LittersLayout = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allLittersQuery(searchValues));
  const litters = data.data.docs; //nicely formed array of objects for litters
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <LittersContext.Provider value={{ data, searchValues, litters }}>
      <div className="landing-page">{isPageLoading ? <Loading /> : <Outlet />}</div>
    </LittersContext.Provider>
  );
};

//custom context hook
export const useLittersContext = () => useContext(LittersContext);

export default LittersLayout;
