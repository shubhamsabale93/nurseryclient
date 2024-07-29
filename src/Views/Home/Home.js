import React, { useEffect, useState } from 'react'
import PlantCard from '../../Component/PlantCard/PlantCard'
import axios from 'axios'
import toast ,{Toaster} from 'react-hot-toast'

function Home() {
   
  
    

    const[plants,setPlants]=useState([])

    const loadPlants=async()=>{
        toast.loading("Loading plants")
        const response= await axios.get(`http://localhost:8000/plants`)
        toast.dismiss()
        toast.success("Plants Fetched Successfully")
       setPlants(response.data.Data)
    }

    useEffect(()=>{
        loadPlants()
    },[])
  return (
   <div>
    <h1>Plants</h1>
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
                key={_id}
                 _id={_id} 
                 name={name}
                 category={category}
                 image={image}
                 price={price}
                 description={description}/>)
        })
    }
    

    
    
    
   


    

   

    
    <Toaster  />
   </div>
 
  
   
  )
    
}

export default Home