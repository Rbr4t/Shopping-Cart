import { useRouteError } from "react-router-dom";

const Error = ({ message=null }) => {
    let error;
    message ? null : error = useRouteError()
    
    return (
        <div>
            <h2>Oops, {message ? message : error}!</h2>
        </div>
    )
}

export default Error;
