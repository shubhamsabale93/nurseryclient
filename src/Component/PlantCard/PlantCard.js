
import React from "react"
import "./PlantCard.css"
import axios from "axios"
import toast ,{Toaster} from "react-hot-toast"
import { Link } from "react-router-dom"



function PlantCard({_id,name,category,image,price,description,loadPlants}){

    const deletePlant=async(plantid)=>{
        const response=await axios.delete(`http://localhost:8000/plant/${plantid}`)
        toast.success(response.data.message)
        loadPlants()


    }
      
    
    return(
        
    <div className="Container">
        <div className="sub-container">
       
       
        <p className="card-element">Name OF Plant: {name}</p>
        <p  className="card-element">Category :{category}</p>
        <p className="card-element">Price :{price}</p>
        <img src={image} alt="cant load" className="IMG"/>
 
        <p className="card-element">Description:{description}</p>

        <br/><br/>

        <Link to={`/update/${_id}`}  className="action-button">Edit</Link>


        <button type="button" 
        className="action-button"
        onClick={()=>{
        deletePlant(_id)}}>Delete</button>
        </div>


        
        
    <Toaster/>  

    </div>
  
)

}
export default PlantCard