import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import MenuInfo from "./components/MenuInfo";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./components/redusertoolkit/appStore";
import Cart from "./components/Cart";

const App = () => {

    const [userName,setUseName]=useState("Shekar")

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{name:userName,setUseName}}>
     <div className="app">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
                errorElement:<Error/>
            },
            {
                path:"/contact",
                element:<Contact/>,
                errorElement:<Error/>
            },
            {
                path:"/restaurant/:restaurantId",
                element:<MenuInfo/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }

        ],
        errorElement:<Error/>
    },
    
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);