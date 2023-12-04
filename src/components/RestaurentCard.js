import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines,avgRating,deliveryTime }= resData?.info;
  
    return (
        <div className="p-4 m-4 bg-[#f0f0f0] w-[250px] rounded-lg hover:bg-gray-300">
          <img className="rounded-lg" src= {CDN_URL+cloudinaryImageId} />
          <div><h2 className="font-bold">{name}</h2></div>
          <div><h4 className="font-bold">Avg-Rating:{avgRating}</h4></div>
          <div><h4>{cuisines.slice(0,3).join(',')}</h4></div>
        </div>
    );
  };

  export const withPromotedLabel = (RestaurentCard) => {
    return (props) => {
      return (
        <div>
          <label>Promoted</label>
          <RestaurentCard {...props}/>
        </div>
      );
    };
  };

  export default RestaurentCard;