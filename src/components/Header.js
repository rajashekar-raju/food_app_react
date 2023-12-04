import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import cart_logo from "./images/cart_logo.svg"

const Header = () => {
  let [log,setLog]=useState("Login");
  const status = useOnlineStatus();
  const {name} = useContext(UserContext);


  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);


  useEffect(()=>{
    // console.log("useEffect called");
  },[log])



  return (
    <div className="flex justify-between bg-gray-50 shadow-lg px-8 sticky top-0 z-[1000]">
      <div className="flex align-middle">
        <img src={LOGO_URL} alt="logo" className="w-36" />
      </div>
      <div className="nav-items ">
        <ul className="flex items-center">
         <li className="p-4 m-2">{status?"🟢":"🛑"}</li>
          <li className="p-4 m-2 font-bold text-lg"><Link to={"/"}>Home</Link></li>
          <li className="p-4 m-2 font-bold text-lg"><Link to={"/about"}>About</Link></li>
          <li className="p-4 m-2 font-bold text-lg"><Link to={"/contact"}>Contact</Link></li>
         <li className="p-4 m-2 font-bold text-lg"> <Link to={"/cart"}><div><img className="h-10 w-[100%]" src={cart_logo}/><div><h4 className="absolute top-6 right-43">{cartItems.length}</h4></div></div></Link></li>
         {/* <li className="p-4 m-2 font-bold text-lg"> <Link>{name}</Link></li> */}
          <button className="font-bold text-lg" onClick={()=>{
            if(log==="Login"){setLog("LogOut")}else{setLog("Login")}
          }}>{log}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;