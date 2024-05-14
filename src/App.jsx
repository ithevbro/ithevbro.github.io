import Layout from "./components/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage'
import About from "./pages/About/About";
import Delivery from "./pages/Delivery/Delivery";
import Actions from "./pages/Actions/Actions";
import Vacancies from "./pages/Vacancies/Vacancies";
import Pizza from "./components/Categories/Pizza/Pizza";
import Sushi from "./components/Categories/Sushi/Shushi";
import Sets from "./components/Categories/Sets/Sets";
import Sneks from "./components/Categories/Sneks/Sneks";
import Salats from "./components/Categories/Salats/Salats";
import Drinks from "./components/Categories/Drinks/Drinks";
import Order from "./pages/Order/Order";
import PizzaCarousel from "./components/CarouselProds/PizzaCarousel";
import BasicCarousel from "./components/CarouselProds/BasicCarousel";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <MainPage />,
          children: [
            {
              element: <Sushi />,
              index: true
            },
            {
              element: <Pizza />,
              path: '/pizza'
            },
            {
              element: <Sneks />,
              path: '/snek'
            },
            {
              element: <Salats />,
              path: '/salat'
            },
            {
              element: <Drinks />,
              path: '/drinks'
            },
            {
              element: <Sushi />,
              path: '/sushi'
            },
            {
              element: <Sets />,
              path: '/sets'
            },
          ]
        },
        {
          element: <Delivery />,
          path: '/delivery',
        },
        {
          element: <Actions />,
          path: '/actions'
        },
        {
          element: <Vacancies />,
          path: '/vacancies'
        },
        {
          element: <About />,
          path: '/about'
        },
        {
          element: <Order />,
          path: '/order'
        },
        {
          element: <PizzaCarousel />,
          path: '/pizza/:id'
        },
        {
          element: <BasicCarousel />,
          path: '/sushi/:id'
        },
        {
          element: <BasicCarousel />,
          path: '/sets/:id'
        },
        {
          element: <BasicCarousel />,
          path: '/snek/:id'
        },
        {
          element: <BasicCarousel />,
          path: '/salat/:id'
        },
        {
          element: <BasicCarousel />,
          path: '/drinks/:id'
        },
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
