import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import "./VinList.css";
const VipList = (props)=> {
    const [valVin,setValVin] = useState([]);
    const {Value,V} = props;
    console.log(Value);
    const listVip = [
       'WV1ZZZ2DZXH026198',
       'XLRTEH4300G019824',
       'JTJJM7FX7A5006594',
       'WVWZZZ3CZDE061060',
       'WDB65552315500172'];
    return (
        <div className='VipList'>
            <h3 className='VipList__title'> last vin decoder</h3>
            <ul>
                {
                    listVip.map((val,ind)=>{
                        return <li key={ind}>
                            <NavLink to={{
                                pathname:`/vin/${listVip[ind]}`,
                                state:{vin:listVip[ind]}
                                }}>
                                {val}
                            </NavLink>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default VipList;