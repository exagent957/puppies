import customFetch from '../utils/customFetch';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '../components';

const allGalleryItemsQuery = (params) => {
  const { search, sort, page } = params;
  return {
    queryKey: ['gallery-items', search ?? '', sort ?? 'newest', page ?? 1],
    queryFn: async () => {
      const { data } = await customFetch.get('/galleryItems', {
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
    console.log(`params = ${JSON.stringify(params)}`);
    await queryClient.ensureQueryData(allGalleryItemsQuery(params));
    return { searchValues: { ...params } };
  };

const GalleryAdminContext = createContext();

const GalleryAdminLayout = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allGalleryItemsQuery(searchValues));
  const galleryItems = data.data.docs;
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <GalleryAdminContext.Provider value={{ data, searchValues, galleryItems }}>
      <div className="gallery-admin-page">{isPageLoading ? <Loading /> : <Outlet />}</div>
    </GalleryAdminContext.Provider>
  );
};

//custom context hook
export const useGalleryAdminContext = () => useContext(GalleryAdminContext);

export default GalleryAdminLayout;
