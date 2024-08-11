import React from 'react'
import "./AddPlant.css"
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'

function AddPlant() {
    const[name,setName]=useState('')
    const[category,setcategory]=useState('')
    const[image,setimage]=useState('')
    const[price,setprice]=useState(0)
    const[description,setdescription]=useState('')

    const addPlant=async()=>{
        if(!name || !category || !image || !price || !description){
            toast.error("Please enter all details");
            return
           
        }
        const response= await axios.post(`${process.env.REACT_APP_URL}/plant`,{
          name:name,
          category:category,
          image:image,
          price:price,
          description:description
        })
        

        setName('')
        setcategory('')
        setimage('')
        setprice('')
        setdescription('')

        toast.success(response.data.message)

          
        
    }

  return (
    <div>
       
        <h1 className='add-heading'>Add Plants</h1>
        <div  className='container-form'>
        
        <from className='form-head'>
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

        </from>
        </div>

        <button type='Button' onClick={addPlant} className='btn-addplant'>Add</button>


    <Toaster/>
    <Link to="/" className='link-tag'><p>Show All Your Plants</p></Link>
    </div>
  )
}

export default AddPlant