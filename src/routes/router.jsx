import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/RootLayout1';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: async () => {
                    const skillsLoader = fetch('/skills.json').then(res => res.json());
                    const projectsLoader = fetch('/projects.json').then(res => res.json());

                    const [skillsData, projectsData] = await Promise.all([skillsLoader, projectsLoader])

                    return { skillsData, projectsData };
                },
                Component: Home
            }
        ]
    },
]);