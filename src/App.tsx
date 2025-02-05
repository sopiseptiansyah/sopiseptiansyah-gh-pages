import { FC, useState } from 'react'
import TopBar from './components/TopBar'
import { Outlet } from 'react-router-dom'
import ColorContext from '@/libs/colorContext'

const App: FC = () => {
  const [color, setColor] = useState("primary");
  const value = { color, setColor };

  return (
      <main>
        <ColorContext.Provider value={value} >
          <TopBar />
          <Outlet />
        </ColorContext.Provider>
      </main>
  )
}

export default App
