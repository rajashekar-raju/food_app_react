import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "./redusertoolkit/cartSlice";

const RestaurantCategoryList = ({lists}) => {
    
    const dispatch = useDispatch();

    const handleAddItems = (list) => {
            dispatch(addItem(list));
    };


    return (
        <div>
            {lists.map((list)=>(
                <div key={list?.card?.info?.id} className="my-8 border-b-2">
                  <div className="flex justify-between">
                  <div className="max-w-[80%]">
                        <div>
                            <h3 className="font-medium">{list?.card?.info?.name}</h3>
                            <h4 className="font-normal">₹{list?.card?.info?.price/100 || list?.card?.info?.defaultPrice/100}</h4>
                        </div>
                        <div>
                            <p className="font-thin">{list?.card?.info?.description}</p>
                        </div>
                   </div>
                   <div>
                      <div className="relative z-10">
                        <img src={(list?.card?.info?.imageId)?(CDN_URL+list?.card?.info?.imageId):("")} className="w-32 h-28" />
                        <button 
                         className="px-6 py-2 bg-white text-green-800 font-bold border-2 absolute top-[78px] left-6"
                         onClick={()=>handleAddItems(list)}
                         >
                            Add
                        </button>
                      </div>
                   </div>
                  </div>
                    
                </div>
            ))}
        </div>
    )
}
export default RestaurantCategoryList;