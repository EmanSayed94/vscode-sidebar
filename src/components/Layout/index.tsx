import React from 'react';
import { Files } from '../../constants/data';
import Sidebar from './Sidebar';
interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Sidebar structure={Files} />
      <main className='main'>
        {children}
      </main>
    </div>
  )
}

export default Layout