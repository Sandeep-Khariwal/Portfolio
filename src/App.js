import React, {useState , useEffect} from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
// import {BeatLoader , } from "react-spinners"
import {BeatLoader  } from "react-spinners"

//All routes are importes
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import About from './Components/About';
import MySkills from './Components/MySkills';
import Projects from './Components/Projects';
import Error from './Components/Error';

// All CSS files are imported
import "./style/item.scss"
import "./style/home.scss"
import "./style/footer.scss"
import "./style/homeComponent.scss"
import "./style/mySkills.scss"
import "./style/Projects.scss"
import "./style/about.scss"
import "./style/error.scss"
import "./style/App.scss"


function App() {

  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    setLoading(false)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  } , [])

  return (
    <>
    {
      loading?<div className='loader'>
        <h1>PORTFOLIO</h1>
        <BeatLoader color='#fff'  size={50} />
        <h1> Loading....</h1>
      </div>
      :
      <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} >
        <Route exact path='/About' element={<About/>} />
        <Route exact path='/Skills' element={<MySkills/>}/>
        <Route exact path='/Projects' element={<Projects/>}/>
        <Route path='*' element={<Error/> } ></Route>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    }
    </>
  );
}

export default App;
