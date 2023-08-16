import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom"; 

function App() {
  const [mode, setmode] = useState(`light`);
  const toggleMode = () => {
    if (mode === `light`) {
      setmode(`dark`);
      document.body.style.backgroundColor = `grey`
      document.title = 'React App - DarkMode'
      } else {
        setmode(`light`);
        document.body.style.backgroundColor = `White`
        document.title = 'React App - LightMode'
        }
      } 

      const toggle = () => {
      if (mode === `light`) {
        setmode(`dark`);
        document.body.style.backgroundColor = `#040266`
        document.title = 'React App - SuccessMode'

        } else {
          setmode(`light`);
          document.body.style.backgroundColor = `White`
          document.title = 'React App - LightMode'
          }
        } 
  return (
     <>
      {/* <Router> */}
<Navbar title="Textutils" mode={mode} toggleMode = {toggleMode}  toggle = {toggle}/>
<div className="container my-3">
{/* <Routes>
          <Route path='/About' element={<About/>}></Route>
          <Route path="/TextForm" element={<TextForm heading="Write Anything 🎯📋" label= "Your Text Box is Given Below....👇"/>}>
          </Route>
        </Routes> */}

    <Alert Alert="This is Your Text Form "/>
    <TextForm heading="Write Anything 🎯📋" label= "Your Text Box is Given Below....👇"/>
    <About/>
      </div>
     {/* </Router> */}
     </>
  );
}

export default App;