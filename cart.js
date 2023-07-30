import { useContext } from "react"
import Gc from "./Gc"

let Cart=()=>{
    let gobj=useContext(Gc)
    return(
        <div className="prodcon">
            {
                gobj.cart.map((item,index)=>{
                    return(
                        <div className="item">
                            <div className="imgcon">{
                                item.images.map((url)=>{
                                    return <img src={url}/>

                                })}</div>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                            <div>{item.price}</div>
                            <div><button onClick={()=>gobj.dec(index)}>-</button> {item.qty} <button onClick={()=>gobj.inc(index)}>+</button></div>
                            <div>{item.total}</div>
                            <button onClick={()=>gobj.del(index)}>delete</button>
                            
                        </div>
                    )
                })
            }

      { gobj.cart.length>0&&<div>Cart:total:{gobj.gt}</div>}
        </div>
    )
    
        
}
export default Cart
