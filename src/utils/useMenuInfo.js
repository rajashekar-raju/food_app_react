import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const useMenuInfo = (restaurantId) => {
    const [info,setInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+restaurantId+"&catalog_qa=undefined&submitAction=ENTER")
        const menuinfo= await data.json();
        // console.log(menuinfo);
        setInfo(menuinfo.data);
    };
    return info;
}
export default useMenuInfo;