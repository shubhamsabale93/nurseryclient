import axios from 'axios';
import React,{useState,useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom'
import "./UpdatePlant.css"


function UpdatePlant() {
  const {id}=useParams();

  const[name,setName]=useState('')
  const[category,setcategory]=useState('')
  const[image,setimage]=useState('')
  const[price,setprice]=useState(0)
  const[description,setdescription]=useState('')

  const updatePlant=async()=>{
    const response=await axios.put(`${process.env.REACT_APP_URL}/plant/${id}`,{
      name: name,
    price: price,
    category:category,
    image:image,
    description:description
    })
    

    toast.success(response.data.message)
    


  }
  const loadPlants=async()=>{
    if(!id){
      return
    }
    const response=await axios.get(`${process.env.REACT_APP_URL}/plant/${id}`)
    const plantData=response.data.data
    const{name,category,image,price,description}=plantData

    setName(name)
    setcategory(category)
    setimage(image)
    setprice(price)
    setdescription(description)



  }

  useEffect(()=>{
    loadPlants(id)
    
  },[id])


  return (
    <div>
        <h1 className='add-heading'>Update Plant</h1>
        <from className="form-head">
        <input type='text' placeholder='Enter Name of Plants' className='btn-input'
        value={name}
         onChange={(e)=>setName(e.target.value)}
        />

        <input type='text' placeholder='Enter Name of Category' className='btn-input'
          value={category} onChange={(e)=>setcategory(e.target.value)}/>

          <img src={image} className='image-demo'/>

        <input type='text' placeholder='Enter Name of image' className='btn-input'
         value={image} onChange={(e)=>setimage(e.target.value)} />

        <input type='number' placeholder='Enter Name of Price' className='btn-input'
          value={price} onChange={(e)=>setprice(e.target.value)}/>

        <input type='text' placeholder='Enter Name of description' className='btn-input'
          value={description} onChange={(e)=>setdescription(e.target.value)}/>


          <button type='button' onClick={updatePlant} className='btn-addplant'>Update Plant</button>
        </from>

        <Link to="/" className='link-tag'><p>Show All Your Plants</p></Link>

        <Toaster/>
        
    </div>
  )
}

export default UpdatePlant