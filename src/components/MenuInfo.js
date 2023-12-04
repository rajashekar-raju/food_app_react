import ShimmerUI from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useMenuInfo from "../utils/useMenuInfo";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const MenuInfo = () => {

    const [showIndex,setShowIndex]=useState(null)
      
    const {restaurantId} = useParams();

    const info=useMenuInfo(restaurantId);
    
    if(info===null) return <ShimmerUI/>;

    const {name,avgRating,cuisines,areaName,totalRatingsString}=info?.cards[0]?.card?.card?.info;

    const {itemCards} = info?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(info?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    // console.log(itemCards);

    const categories = info?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories);

    // console.log(info?.cards[0]?.card?.card?.info);

    // const setIndexFunction = () => {
    //     setShowIndex(index);
    // }

    return (
        
        <div>
            <div className="flex max-w-[800px] mx-auto justify-between my-8">
            <div>
               <h1 className="font-bold text-xl">{name}</h1>
               <p className="text-sm">{cuisines.join(",")}</p>
               <p className="text-sm">{areaName}</p>
            </div>
            <div>
                 <p className="text-lg text-green-900 font-bold">{avgRating}</p>
                 <p>{totalRatingsString}</p>
            </div>
            </div>

            {categories.map((category,index) => (
                <RestaurantCategories 
                key={category?.card?.card?.title} 
                data={category?.card?.card} 
                showItems={(index)==showIndex?true:false}
                setShowIndex={()=>setShowIndex(index)}
                /> 
            ))}
 
        </div>
    )
}
export default MenuInfo;

// doubt: 
// how setShowIndex is getting index value from child
// every time need not give id we can give name also as a key