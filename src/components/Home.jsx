import React from 'react'
import '../styles/Home.scss'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
const productlist=[{
  name:'Mac-Book air Bag',
  id:'hahah',
  price:'12',
  imgsrc:'http://5.imimg.com/data5/SELLER/Default/2022/1/WZ/DB/XY/20579664/dell-premier-slim-laptop-backpack-15-pe1520ps-with-water-resistant-exterior-and-eva-foam-cushioning.jpg',
  q:1,

},{
  name:'Mac-Book air ',
  id:'ha7ah',
  price:'12000',
  imgsrc:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966368/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256713_xqa1ds.png?tr=w-640',
  q:1,
}]


const Home = () => {
  const dispatch=useDispatch()
  const addtocart = (options)=>{
    console.log(options)
    dispatch({type:"addtocart",payload:options})
    dispatch({
      type:"calculator",
  }) 
    toast.success("Added to cart")
  };
  return (
  <div className='home'>
    { 
    
      productlist.map(i=>(
        <Productcard imgsrc={i.imgsrc} key={i.id} name={i.name} price={i.price} id={i.id} q={i.q}handler={addtocart}/>
      ))
    }
  </div>
  )
}
const Productcard=({name,id,price,handler,imgsrc,q})=>(
  <div className='Productcard'>
    <img src={imgsrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name,id,price,handler,imgsrc,q})}>Add to cart</button>
  </div>
)
export default Home
