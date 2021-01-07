import React from 'react'
import Login from './Login'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import './App.css';

function App() {
  const user = null;
  return (
    // Bem naming convention
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
