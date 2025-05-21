import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventInfo from './components/EventInfo/EventInfo'
import SignUp from './components/SignUp/SignUp'
import NewEvent from './components/NewEvent/NewEvent'
import SuccessPage from './components/SuccessPage/SuccessPage'

function App() {


  return (
    <>
      <div id="mainWindow">
          <Header />

              <Router>

                <Routes>
                
                  <Route path="/eventinfo" element={<EventInfo />}/>
                
                  <Route path="/signup" element={<SignUp />}/>

                  <Route path="/newevent" element={<NewEvent />}/>

                  <Route path="/success" element={<SuccessPage />}/>
              
                </Routes>
            
              </Router>
          
          <Footer />
      </div>
    </>
  );
};

export default App
