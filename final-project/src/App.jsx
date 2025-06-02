import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EventView from './components/EventView/EventView'
import CreateEvent from './components/CreateEvent/CreateEvent'
import SuccessPage from './components/SuccessPage/SuccessPage'
import AboutPage from './components/AboutPage/AboutPage'
import Waiver from './components/Waiver/Waiver'
import SignUpPage from './components/SignUp/SignUp'
import HomePage from './components/HomePage/HomePage'

function App() {


  return (
    <>
      <div className="main-window">
          <Header />

                <Routes>
                
                  <Route path="/" element={<HomePage />}/>

                  <Route path="/eventinfo" element={<EventView />}/>
                
                  <Route path="/signup/:eventName" element={<SignUpPage />}/>

                  <Route path="/newevent" element={<CreateEvent />}/>

                  <Route path="/success" element={<SuccessPage />}/>

                  <Route path="/about" element={<AboutPage />}/>

                  <Route path="/waiver" element={<Waiver />}/>
              
                </Routes>
          
          <Footer />
      </div>
    </>
  );
};

export default App

//i cant leave a comment in the css file so its going here. I dont like css as of right now. 
// I FORGOT COMMITS - garrett @ 1:30 am doing final checks
