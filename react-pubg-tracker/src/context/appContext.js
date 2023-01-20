import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import StatsPlayer from '../routes/statsPlayer';
import { PlayerProvider } from './playerContext';
import Weapon_mastery from '../routes/weapon_mastery';

export const AppContext = createContext(null)

export function AppProvider() {
  
  const router = createBrowserRouter([
    {
        path: `/user/weapon_mastery/:playerName`,
        element: <Weapon_mastery />
    },
    {
      path: '/user/:playerName',
      element: <StatsPlayer />
    },
    {
      path: '/',
      element: <App />
    }
  ])

  return (
    <AppContext.Provider value={""}>
        <PlayerProvider >
            <RouterProvider router={router} />
        </PlayerProvider >
    </AppContext.Provider>
  );
}