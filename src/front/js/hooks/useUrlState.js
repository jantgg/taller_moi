import { useState } from "react";

const useUrl = () => {
  const [url, setUrl] = useState(
    "https://3001-4geeksacade-reactflaskh-s41igp2nysj.ws-eu102.gitpod.io/api/"
  );

  return [url, setUrl];
};

export default useUrl;
