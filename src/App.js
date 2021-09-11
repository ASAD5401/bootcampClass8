import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [repos,setRepos]=useState([{}])


  useEffect(()=>{
    async function getRepos(){
      const response=await fetch("https://api.github.com/users/ASAD5401/repos")
      const data=await response.json()
      console.log(data)

      setRepos(data)
    }
    getRepos();
  },[])


  return (
    <div>
       <ul>
      {repos.map((repObj,index)=>{
        return(<li key={index}>{repObj.name}</li>)
      })}
      </ul> 

      
    </div>
  );
}

export default App;
