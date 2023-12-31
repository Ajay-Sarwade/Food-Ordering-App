import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h2>
        {err?.status} {err?.statusText}
      </h2>
      <h3>{err?.data}</h3>
      <h2></h2>
    </div>
  );
};

export default Error;
