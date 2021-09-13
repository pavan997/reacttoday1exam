import { useState } from "react"
import {v4 as uuid} from 'uuid'
import { Itemdisplay } from "./itemDisplay";
export function TopSection(){

    const[text,setText] = useState('');
    const[wishlist,setwishlist] = useState([]);
    const[finallist,setfinallist] = useState([]);
    const checkChange =(e) =>{
        setText(e.target.value);
        console.log(e.target.value)
    }
    const wishlistf = () =>{
        const payload = {status:true,title:text,id:uuid()};
        setwishlist([...wishlist,payload]);
        console.log(wishlist)
    }
    const finallistf = () =>{
        const payload = {status:true,title:text,id:uuid()};
        setfinallist([...finallist,payload]);
        console.log(finallist)
    }

    return (
        <div>
            <h1>Add groceries below</h1>
            <input type='text'placeholder='enter your groceries' onChange={checkChange}></input>

            <button onClick={finallistf}>finallist groceries</button>
            {finallist.map((eve)=>(
                <Itemdisplay key={eve.id} props={eve}></Itemdisplay>
            ))}
           <button onClick={wishlistf}>wishlist groceries</button>

        </div>
    )
}

