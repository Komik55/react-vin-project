import React from 'react'
import "./VinData.css"
import loader from "./loader.gif";
 const VinData = (props)=> {
     const {dates,load,desc} = props;
 
    return (
    <>
    {load ? <img src={loader} alt={"Spinner"} className={"VinData__spinner"} /> : null}
    {dates.length > 0 && 
      <div className='VinData'>        
        <table className='VinData__table'>
            {
                dates.filter(val =>{
                    return (val.Variable === '' && val.Variable === null)
                     || (val.Value !== '' && val.Value !== null)
                })
                .map((val)=>{
                  return(
                   
       <tr className='VinData__table__tr' key={val.id}>
           <>
               {desc.
           filter(valzero =>{
                        return (valzero.ID === val.VariableId) 
                        || (valzero.GroupName !== valzero.GroupName)
                    })
                    .map((el,ind)=>{
                     return  <h1 key={ind} className={'VinData__GroupName'}>{el.GroupName}</h1>
                         })}
          </>
                <td>
                {desc.
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
        </div>
        }
        </>
    );
}
export default VinData;
