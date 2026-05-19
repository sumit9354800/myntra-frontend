import { Outlet } from 'react-router'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import FetchItem from './component/fetchItem'

function App() {

  return (
    <>
      <Header />
      <FetchItem />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
