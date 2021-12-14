import React,{useState} from 'react';
import './App.css';
import axios from "axios";
import Form from "./components/Form/Form";
import VinList from './components/VinList/VinList';
import VinData from './components/Form/VinData/VinData';
const  App = (props)=> {

const [fetch,setFetch] = useState([]);
const [fetchList,setFetchList] = useState([]);
const [error,setError] = useState(false);
const [textError,setTextError] = useState('');
const [load,setLoad] = useState(false);
  const handleSubmit = (e)=>{
    const getValue = e.target.text.value;
    e.preventDefault();
    if(getValue.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)){
      setError(false);
    }  else{
      setError(true);
    setTextError(textError !== 'Field is empty' ? 'Uncorrect symbol' : '');
    }
     if(getValue.length < 17) setTextError('Put 17 character'); 
      if(!error){
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${getValue}?format=json`)
        .then(res =>{
         setFetch(res.data.Results)  
        setLoad(true)})   
        .catch((err) => {
          setTextError(fetch.results);
        });

        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
        .then(desc => setFetchList(desc.data.Results))
        .catch(err => err);
        setLoad(false);
      }

      e.target.text.value = '';
      console.log(fetch)
    }

  return (
   <div className="App">
        <Form onSubmit={handleSubmit} error={error} textError={textError}/>
        <VinList dates={fetch} desc={fetchList} />
        <VinData dates={fetch} load={load} desc={fetchList} />
    </div>
  );
}

export default App;
