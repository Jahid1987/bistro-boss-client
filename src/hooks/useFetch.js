import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    // const allMenus
    fetch(`http://localhost:5000/${url}`)
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, [url]);
  return menus;
};

export default useFetch;
