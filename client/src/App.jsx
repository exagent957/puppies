import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  About,
  Clients,
  ClientAdd,
  ClientEdit,
  DashboardLayout,
  Error,
  Gallery,
  HomeLayout,
  Landing,
  LittersLayout,
  Litters,
  LitterAdd,
  LitterEdit,
  Login,
  Profile,
  PuppiesLayout,
  Puppies,
  PuppyAdd,
  PuppyEdit,
  PuppyHealthEvents,
  Register,
  Reserve,
  Stats,
  Test
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allClientsLoader } from './pages/Clients';
import { action as addClientAction } from './pages/ClientAdd';
import { loader as editClientLoader } from './pages/ClientEdit';
import { action as editClientAction } from './pages/ClientEdit';
import { action as deleteClientAction } from './pages/ClientDelete';
import { loader as singlePuppyHealthEventsLoader } from './pages/PuppyHealthEvents';
import { loader as allLittersLoader } from './pages/LittersLayout';
import { action as addLitterAction } from './pages/LitterAdd';
import { loader as editLitterLoader } from './pages/LitterEdit';
import { action as editLitterAction } from './pages/LitterEdit';
import { action as deleteLitterAction } from './pages/LitterDelete';
import { loader as allPuppiesLoader } from './pages/PuppiesLayout';
import { action as addPuppyAction } from './pages/PuppyAdd';
import { action as addPuppyToLitterAction } from './pages/PuppyAddToLitter';
import { loader as editPuppyLoader } from './pages/PuppyEdit';
import { action as editPuppyAction } from './pages/PuppyEdit';
import { action as deletePuppyAction } from './pages/PuppyDelete';
// import { loader as allPuppyHealthEventsLoader } from './pages/PuppyHealthEvents';
import { action as profileAction } from './pages/Profile';
import ErrorElement from './components/ErrorElement';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
});

// Pages within App layed out here
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout queryClient={queryClient} />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction(queryClient)
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction
      },
      {
        path: 'reserve',
        element: <Reserve />
      },
      {
        path: 'dashboard',
        element: <DashboardLayout queryClient={queryClient} />,
        loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <Profile />,
            action: profileAction(queryClient)
          },
          {
            path: 'stats',
            element: <Stats />
          },
          {
            path: 'litters',
            loader: allLittersLoader(queryClient),
            element: <LittersLayout />,
            children: [
              {
                index: true,
                element: <Litters />
              },
              {
                path: 'litter-add',
                element: <LitterAdd />,
                action: addLitterAction(queryClient)
              },
              {
                path: 'litter-edit/:id',
                element: <LitterEdit />,
                loader: editLitterLoader(queryClient),
                action: editLitterAction(queryClient)
              },
              {
                path: 'litter-delete/:id',
                action: deleteLitterAction(queryClient)
              },
              {
                path: 'puppies',
                loader: allPuppiesLoader(queryClient),
                element: <PuppiesLayout />,
                children: [
                  {
                    index: true,
                    element: <Puppies />
                  },
                  {
                    path: 'puppy-add',
                    element: <PuppyAdd />,
                    action: addPuppyAction(queryClient)
                  },
                  {
                    path: 'puppy-edit/:id',
                    element: <PuppyEdit />,
                    loader: editPuppyLoader(queryClient),
                    action: editPuppyAction(queryClient)
                  },
                  {
                    path: 'puppy-delete/:id',
                    action: deletePuppyAction(queryClient)
                  },
                  {
                    path: 'test',
                    element: <Test />
                  },
                  {
                    path: 'puppy-health-events',
                    element: <PuppyHealthEvents />
                    // loader: allPuppyHealthEventsLoader(queryClient)
                  },
                  {
                    path: ':id/puppy-health-events',
                    element: <PuppyHealthEvents />,
                    loader: singlePuppyHealthEventsLoader(queryClient)
                  }
                ]
              }
            ]
          },
          {
            path: 'clients',
            element: <Clients />,
            loader: allClientsLoader(queryClient),
            errorElement: <ErrorElement />
          },
          {
            path: 'client-add',
            element: <ClientAdd />,
            action: addClientAction(queryClient)
          },
          {
            path: 'client-edit/:id',
            element: <ClientEdit />,
            loader: editClientLoader(queryClient),
            action: editClientAction(queryClient)
          },
          {
            path: 'client-delete/:id',
            action: deleteClientAction(queryClient)
          }
        ]
      }
    ]
  }
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
