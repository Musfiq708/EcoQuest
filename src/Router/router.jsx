import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Component/MainLayout/MainLayout'
import Home from '../Component/Home/Home'



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    const adventuresData = await fetch("/adventure.json");
                    const adventures = await adventuresData.json()
                    const guidesData = await fetch("/guides.json");
                    const guides = await guidesData.json()
                    const reviewData = await fetch("/review.json");
                    const reviews = await reviewData.json()
                    return { adventures, guides, reviews }
                }
            }
        ]
    }
])
