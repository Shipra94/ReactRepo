import { CDN_URL } from "../utils/constants";
const ResCard = (prop) =>{
    const {name , cloudinaryImageId, cuisines , costForTwo , avgRating} = prop?.resData?.info;
    return (
        <div className="card"> 
        <img className="image"alt="Restaurant - logo" src={CDN_URL+ cloudinaryImageId}/>
        <h4>{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        </div>
    )
}

export default ResCard;