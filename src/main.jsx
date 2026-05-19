import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './flowbite.js'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Bag from './routes/Bag.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

const router = createBrowserRouter([{
  path: '/', element: <App />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/Bag", element: <Bag /> },
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
