
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Component/MainLayout/MainLayout'
import Home from '../Component/Home/Home'
import AllAdventures from '../Component/AllAdventures/AllAdventures'
import Login from '../Component/Login/Login'
import Register from '../Component/Register/Register';
import AdventureDetails from '../Component/AdventureDetails/AdventureDetails'
import Guides from './../Component/Guides/Guides';
import GuideInfo from '../Component/GuideInfo/GuideInfo'


let router = createBrowserRouter([
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
            },
            {
                path: "/all-adventure",
                element: <AllAdventures></AllAdventures>,
                loader: async () => {
                    const adventuresData = await fetch("/adventure.json");
                    const adventures = await adventuresData.json()
                    return { adventures }
                }
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/adventure-details/:id",
                element: <AdventureDetails></AdventureDetails>,
                loader: async ({ params }) => {
                    const adventuresData = await fetch("/adventure.json");
                    const adventures = await adventuresData.json();
                    const singleData = adventures.find(d => d.id == params.id);

                    return singleData;
                }
            },
            {
                path: "/guides-details/:id",
                element: <GuideInfo></GuideInfo>,
                loader: async ({ params }) => {
                    const adventuresData = await fetch("/guides.json");
                    const adventures = await adventuresData.json();
                    const singleData = adventures.find(d => d.id == params.id);

                    return singleData;
                }
            }
        ]
    }
]);
export default function Routers() {
    return <RouterProvider router={router}></RouterProvider>
}
