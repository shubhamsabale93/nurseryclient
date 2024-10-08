import React, { useEffect, useState } from 'react'
import PlantCard from '../../Component/PlantCard/PlantCard'
import axios from 'axios'
import toast ,{Toaster} from 'react-hot-toast'
import addbtn from './add.png'
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {
   
  
    

    const[plants,setPlants]=useState([])

    const loadPlants=async()=>{
        toast.loading("Loading plants")
        const response= await axios.get(`${process.env.REACT_APP_URL}/plants`)
        toast.dismiss()
        toast.success("Plants Fetched Successfully")
       setPlants(response.data.Data)
    }

    useEffect(()=>{
        loadPlants()
    },[])
  return (
   <div>
    <h1 className='heading'>Nursery Web App</h1>
    {
        plants.map((plant,i)=>{
            const{_id,
                name,
                category
                ,image
                ,price,
                description}
                =plant
            return (<PlantCard 
                key={i}
                 _id={_id} 
                 name={name}
                 category={category}
                 image={image}
                 price={price}
                 description={description}
                 loadPlants={loadPlants} />)
        })
    }

    <Link to="/add">

    <img src={addbtn} alt="Button" className='add-btn'/>
    </Link>


    
    

    
    
    
   


    

   

    
    <Toaster  />
   </div>
 
  
   
  )
    
}

export default Home