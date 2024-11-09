import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="text-2xl font-semibold my-5">Sorry, unexpected error has occured</p>
            <p className="text-xl">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;