import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () =>{
    const [restaurantList, setRestaurantList] = useState(resList);
    return (
        <div className="body">
        <div className="button" >
            <button onClick={()=>{
                const tempRestList = restaurantList.filter((res)=>{
                   return res?.info?.avgRating > 4; 
                })
                setRestaurantList(tempRestList);
    
            }}>Top Rated Restaurant
            </button>
            <button style={{marginLeft: '10px'}} onClick={()=>{
                setRestaurantList(resList);
            }}>See All Restaurant</button>
        </div>
        <div className="res-container">
            {
            restaurantList.map((restaurant)=>{
                return <ResCard key={restaurant?.info?.id} resData={restaurant}/>
            })
            }
        </div>
        </div>
    )
}
export default Body;