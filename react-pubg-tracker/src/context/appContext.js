import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import StatsPlayer from '../routes/statsPlayer';
import { PlayerProvider } from './playerContext';

export const AppContext = createContext(null)

export function AppProvider() {
  
  const router = createBrowserRouter([
    {
      path: '/user/:playerName',
      element: <StatsPlayer />
    },
    {
      path: '/',
      element: <App />
    },
    // {
    //   path: '/user/' + playerName + '/weapon_mastery',
    //   element: //composant weapon_mastery
    // }
  ])

  return (
    <AppContext.Provider value={""}>
        <PlayerProvider >
            <RouterProvider router={router} />
        </PlayerProvider >
    </AppContext.Provider>
  );
}