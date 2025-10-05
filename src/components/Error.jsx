import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>OOPS!</h1>
        <h2>Something went wrong</h2>
        <p>{error.status} : {error.statusText}</p>
        {console.log(error)}
    </div>
  )
}

export default Error