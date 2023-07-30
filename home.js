import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import './Home.css'
import Gc from "./Gc"

let Home=()=>{
    let [data,setData]=useState([])
    let gobj=useContext(Gc)
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then(
            (res)=>{
                console.log(res.data.products)
                setData(res.data.products)
            }
        )
        
    },[])
    return(
        <div className="prodcon">
            {
                data.map((item,index)=>{
                    return(
                        <div className="item">
                            <div className="imgcon">{
                                item.images.map((url)=>{
                                    return <img src={url}/>

                                })}</div>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                            <div>{item.price}</div>
                            <div>{item.rating}</div>
                            <div>{item.category}</div>
                            <button onClick={()=>gobj.addcart(item)}>Addcart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Home
