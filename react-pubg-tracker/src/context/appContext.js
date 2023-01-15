import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';

export const AppContext = createContext(null)

export function AppProvider() {
  
  const router = createBrowserRouter([
    // {
    //   path: '/user/' + playerName,
    //   element: //composant stat joueur
    // },
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
    <AppContext.Provider value={}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}