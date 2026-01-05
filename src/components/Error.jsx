import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return <p className="text-center">{error.message}</p>;
}

export default Error;
