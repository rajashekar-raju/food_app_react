import { useState } from "react";
import RestaurantCategoryList from "./RestaurantCategoryList";


const RestaurantCategories = ({data,showItems,setShowIndex}) => {
    // console.log(data);

    const setFunction = () => {
        setShowIndex();
    }
    
    return (
        <div className="max-w-[800px] mx-auto bg-gray-200">
            <div className=" px-4 py-3 shadow-lg bg-white  my-4">
              <div className="flex justify-between cursor-pointer" onClick={setFunction}>
                <span className="font-black">{data.title} ({data.itemCards.length})</span>
                <span>{"🔽"}</span>
              </div>
              {showItems && <RestaurantCategoryList lists={data.itemCards}/>}
            </div>
        </div>
    )
}
export default RestaurantCategories;