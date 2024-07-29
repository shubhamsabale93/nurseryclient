
import React from "react"
import "./PlantCard.css"

function PlantCard({_id,name,category,image,price,description}){
    return(
    <div className="Container">
        <h1>{name}</h1>
        <p>{category}</p>
        <p>{price}</p>
        
    </div>
    )

}
export default PlantCard