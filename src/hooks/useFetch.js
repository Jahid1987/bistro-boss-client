import { useEffect, useState } from "react";

const useFetch = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    // const allMenus
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  return menus;
};

export default useFetch;
