import React from 'react'
import {FaTrash} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'


const Cartitem = ({imgsrc,name,price,qty=1,decrement,increment,deletehandler,id})=>{
 
  return (
    
    <div className="cartitem">
        <img src={imgsrc} alt={name} />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
        <div>
            <button onClick={()=>decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}>+</button>
        </div>
        <div id='icn'>
         <button onClick={()=>deletehandler(id)}>
         <TestIcon/>
        </button>
        </div>

    </div>
    )}
    const TestIcon = () => {
      return (
        <div id='icn'>
          <FaTrash style={{ color: 'red' }} />
        </div>
      );
    };
const Cart = () => {
   const {cartitems,subtotal,taxes,Total,shipping}=useSelector((state)=>state.cart);
   const dispatch =useDispatch()
   const Increment = (id)=>{
     dispatch({
         type:"addtocart",
         payload:{id}
     })   
     dispatch({
      type:"calculator",
  }) 
   }
   const decrement=(id)=>{
    dispatch({
      type:"delete",
      payload:id  
  }) 
  dispatch({
    type:"calculator",
}) 
   }
   const deletefromCart=(id)=>{
    dispatch({
      type:"deletefromcart",
      payload:id,  
  }) 
  dispatch({
    type:"calculator",
}) 
   }
  return (
    <div className='cart'>
      <main> 
      {
        (cartitems && cartitems.length > 0) ? (
         cartitems.map(item=>(
          <Cartitem 
          key={item.id} 
          imgsrc={item.imgsrc}
          name={item.name}
          price={item.price}
          qty={item.q}
          id={item.id}
          increment={Increment}
          decrement={decrement}
          deletehandler={deletefromCart}
          />
         ))
  ):(
    <h2> NO Item Present</h2>
  )
}
     </main>
      <aside>
        <h2>Subtotal:${subtotal}</h2>
        <h2>Shipping:${shipping}</h2>
        <h2>Tax:${taxes}</h2>
        <h2>Total:${Total}</h2>
      </aside>
    </div>
 
    )
}

export default Cart
