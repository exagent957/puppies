import { Outlet, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar, Loading } from '../components';
import { createContext, useContext, useState } from 'react';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';
import { useHomeContext } from './HomeLayout';

const userQuery = {
  queryKey: ['user'], //query key uniquely describes the data being fetched
  queryFn: async () => {
    const { data } = await customFetch.get('/users/me');
    return data;
  }
};

// "loader" provides data to the route element before it renders
export const loader = (queryClient) => async () => {
  try {
    const data = await queryClient.ensureQueryData(userQuery);
    const user = data.data.data;
    return user;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const [allLitters, setAllLitters] = useState('test');
  const [showSidebar, setShowSidebar] = useState(false);
  const { setIsLoggedIn, setCurrentUser } = useHomeContext();
  const navigation = useNavigation();
  const { data } = useQuery(userQuery);
  const user = data.data.data;
  const isPageLoading = navigation.state === 'loading';
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  if (user) {
    setIsLoggedIn(true);
    setCurrentUser(user);
  }
  console.clear();
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        allLitters,
        setAllLitters
      }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
//custom hook
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
