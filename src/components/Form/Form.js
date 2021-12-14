import React,{useState} from 'react';
import "./Form.css";
import VinData from "./VinData/VinData";
import {NavLink} from "react-router-dom";
/*
 const Form = props =>{
     const [value,setValue] = useState('');
     const list = [1,2,3];
     const [fetch,setFetch] = useState([]);
     const [error,setError] = useState(false);
     const [textError,setTexterror] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(e.target.value === ''){
            setError(true);
            setTexterror('Поле пусто');
        } 
        else setError(false);
        if(e.target.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)) setError(false);
        else{
            setError(true);
            setTexterror('Uncorrect characters');
        }  
         if(e.target.value.length < 17){

         } 

        if(error){
            axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${value}?format=json`)
            .then((response) => setFetch(response.data.Results))
            .catch(err =>{
                console.log(err);
            })
        }
        setPutVin(value);
        setValue('');
    }

    const filtered = (fetch)=>{
        return console.log(fetch.map((el)=> el))
    }
    */
   const Form = (props) =>{
       const {error,textError} = props;
    return(
     <div className="Form">
        <form onSubmit={props.onSubmit}>
            <h1 style={{textAlign:'center'}}>VIN DECODER</h1>
            <div className='Form__title'>Enter <b>Vin number</b></div>
            <input type="text"
            name='text'
            className={`Form__input ${error ? 'error__Input' : null}`}
            maxLength={17}
            />
            <button className="Form__btn" >
                Decode VIN
            </button>
            <div className='error__text'>
                {
                    error ? textError : null
                }
            </div>
        </form>
        </div>
    );
}
export default Form;