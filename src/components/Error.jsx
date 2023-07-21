import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div>
            <h2>Oops, something went wrong!</h2>
        </div>
    )
}

export default Error;
