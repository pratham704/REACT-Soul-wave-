import './App.css';
import {Route,Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './Home';
import Navbars from './Navbars';
import Ourwork from './Ourwork';
import About from './About';
import Donation from './Donation';
import Join from './Join'
import FixedBottomNavigation from './FixedBottomNavigation';
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Ourwork2 from './Ourwork2';
import Ourwork3 from './Ourwork3';
import Ourwork4 from './Ourwork4';
import Ourwork5 from './Ourwork5';
import PropagateLoader from "react-spinners/PropagateLoader";


function App() {


  const [loading, setLoading] = useState(true);
  useEffect(() => {
  
setLoading(true);
setTimeout(() => {
  setLoading(false)
}, 3501);



  }, [])
  
  return (
    <>
    
    {


loading?<>

<div className='Propa'>

  <PropagateLoader    color="#49e2fe"   speedMultiplier={0.7} loading={loading}   size={30} />
  
  
  </div>
</>


:
<>

<Navbars/>



    <Routes>

 
<Route exact  path="/"   element={<Home/>}/> 
<Route  exact path="/work"   element={<Ourwork/>}/> 
<Route  exact path="/work2"   element={<Ourwork2/>}/> 
<Route  exact path="/work3"   element={<Ourwork3/>}/> 
<Route  exact path="/work4"   element={<Ourwork4/>}/> 
<Route  exact path="/work5"   element={<Ourwork5/>}/> 
<Route   path="/aboutus"   element={<About/>}/> 
<Route   path="/donation"   element={<Donation/>}/> 
<Route   path="/join"   element={<Join/>}/> 



</Routes>
<Footer />


<br />
<div className='bottoms'>
    <FixedBottomNavigation/>

    </div>
    





</>

    
 }


    </>
  );
}

export default App;
