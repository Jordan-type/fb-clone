import React from 'react'
import './App.css';
import Login from './Login'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    // bem naming convention // data layer || ==> redux / reactContext API
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            {/*  Header */}
            <Header />
            {/*  app body */}
            <div className='app__body'>
               {/* // sidebar */}
               <Sidebar />
               {/* // feed */}
               <Feed />
              {/*  widgets */}
              <Widgets />

            </div>
        </>
      )}

    </div>
  );
}

export default App;
