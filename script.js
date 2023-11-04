


// <div className="parent">
//     <div className="child">
//         <h1>hello world from react</h1>
//     </div>
// </div>

const reactHeading = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"header"},"hello world from react")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactHeading);






// const heading = document.getElementById("root");
// heading.innerHTML="<h1>hello world</h1>";

