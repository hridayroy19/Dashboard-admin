
// import { useState } from 'react'
import { useState } from 'react'
import './app.css'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import Home from './Home'

import Header from "./component/Header"
import Home from "./component/Home"
import Sidebar from "./component/Sidebar"

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App
