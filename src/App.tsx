import { FC, useState } from 'react'

import TopBar from './components/TopBar'
import { Outlet } from 'react-router-dom'
import PageTransition from './components/PageTransition'
import ColorContext from '@/libs/colorContext'

const App: FC = () => {
  const [color, setColor] = useState("primary");
  const value = { color, setColor };

  return (
      <main>
        <ColorContext.Provider value={value} >
          <PageTransition />
          <TopBar />
          <Outlet />
        </ColorContext.Provider>
      </main>
  )
}

export default App
