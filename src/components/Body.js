import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUi";
import RestaurentCard, {withPromotedLabel} from "./RestaurentCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Body = () => {
    // state Variables
    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants]= useState([])
    const [searchText, setSearchText] = useState("");
    const {name,setUseName}=useContext(UserContext);

    const RestaurantPromoted = withPromotedLabel(RestaurentCard);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2127918&lng=74.9330899&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
  
      const apiData = await data.json();
      // console.log(apiData);
      // console.log(apiData.data.cards[5].card.card);
      //optional chaining
  
      setListOfRestraunts(
        apiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(apiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants)
    };

    // console.log(listOfRestraunts);
    
    const status = useOnlineStatus();
    
    if(status===false) return (<h1>Looks like you are offline</h1>);

    return (listOfRestraunts.length === 0) ? (
      <ShimmerUI />
    ) : (
      <div className="mt-10 max-w-[1200px] mx-auto">
        <div className="filter">
          <div className="my-6">
            <input
              type="text"
              className="p-3 border-collapse mx-3 bg-gray-100 rounded-xl"
              value={searchText}
              placeholder="Search"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button className="py-3 px-4 bg-green-800 mx-3 rounded-xl text-white"
              onClick={() => {
                const newList = listOfRestraunts.filter(
                  (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                  setFilteredRestaurants(newList)
              }}
            >
              Search
            </button>

          <button
            className="py-3 px-4 bg-blue-800 mx-3 rounded-xl text-white"
            onClick={() => {
              filteredList = listOfRestraunts.filter((res) => {
                return res.info.avgRating > 4;
              });
              // console.log(filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
            Today's Top Restraunts
          </button>

          {/* <input type="text" value={name} onChange={(e)=>setUseName(e.target.value)} /> */}
          
          </div>
        </div>


        <div className="flex flex-wrap ml-4">
          {filteredRestaurants.map((restraunt) => (
            <Link key={restraunt.info.id} to={"/restaurant/"+restraunt.info.id}>
              {restraunt.info.promoted ? <RestaurantPromoted resData={restraunt}/> : <RestaurentCard  resData={restraunt}/>}
            </Link>
          ))}
        </div>


      </div>
    );
  };
  export default Body;