import React,{useEffect} from 'react'
import Header from './components/Header'
import Page1 from './pages/ManageCampaignPage'
import JsonDummy from './dummy.json'
function App() {
  //storing in it localStorage
  useEffect(() =>{
   
    if( !localStorage.getItem('blueStackData')){
        localStorage.setItem('blueStackData',JSON.stringify(JsonDummy))
    }
  },[])
  return (
    <div>
       {/* for head component */}
     <Header/> 
       {/* for page 1 */}
     
     <Page1/>
    </div>
  );
}

export default App;
