import React,{useState,useEffect} from 'react'
import "../Form/VinData/VinData.css";
import axios from "axios";
import loader from "../Form/VinData/loader.gif"
import VinData from '../Form/VinData/VinData';
import { NavLink } from 'react-router-dom';

 const Vin = (props) => {
     const {dates,desc} = props;
    const [active,setActive] = useState([]);
    const [activeList,setActiveList] = useState([]);    
    useEffect(()=>{
        const title  = props.location.state.vin;
        console.log(title);
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${title}?format=json`)
        .then(res => setActive(res.data.Results) )
        .catch((err) => {
            console.log(err)
        });

        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
        .then(desc => setActiveList(desc.data.Results))
        .catch(err => err);

    },[active,activeList])
    console.log(dates);
    return (
        <div className='Vin'>
            <div id='Vin__wrap'>
                <NavLink to="/" className={'Vin__link'}>Back</NavLink>
                {active.length <= 0 && <img src={loader} alt={"Spinner"} style={{marginLeft:'500px',marginTop:'20px'}} />
}
                {active.length > 0 &&
            <table className='VinData__table'>
            {
                active.filter(val => {
                    return (val.Variable === '' && val.Variable === null)
                     || (val.Value !== '' && val.Value !== null)
                })
                .map((val)=>{
                  return(
                   
       <tr className='VinData__table__tr' key={val.id}>
           <>
               {activeList.
           filter(valzero =>{
                        return (valzero.ID === val.VariableId) 
                        || (valzero.GroupName !== valzero.GroupName)
                    })
                    .map((el,ind)=>{
                     return  <h1 key={ind} className={'VinData__GroupName'}>{el.GroupName}</h1>
                         })}
          </>
                <td>
                {activeList.
                      filter(valzero =>{
                               return valzero.ID === val.VariableId
                           })
                           .map((el,ind)=>{
                            return  <td key={ind} dangerouslySetInnerHTML={{__html:el.Description.substring(0,200) +  '...'}}></td>
                            })}</td>
                          <td>{val.Variable}</td>
                          <td><strong>{val.Value}</strong></td>           
                      </tr>
                  )  
                })
            }
        </table>  
        }
            </div>
        </div>
    )
}
export default Vin;

