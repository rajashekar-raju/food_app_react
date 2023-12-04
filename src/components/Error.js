import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops Something went wrong!!!</h1>
            <p>Please try again</p>
            <h2>{err.status}</h2>
            <h2>{err.statusText}</h2>
        </div>
    )
}
export default Error;