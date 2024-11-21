import './App.css'
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const menu = [
    { label: 'Home', path: '/' },
    { label: 'FarAway', path: '/far-away' }
  ]

  return (
    <>
      <Header title='My application' menu={menu}/>
      <Outlet/>
    </>
  )
}

export default App
