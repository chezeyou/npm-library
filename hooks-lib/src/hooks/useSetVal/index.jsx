import { useRef } from "react";

function searchData(obj = {}, name, value) {
  const newObj = obj;
  if (value || value === false) {
    newObj[name] = value;
  } else {
    delete newObj[name];
  }
  const m = Object.keys(obj).map((item) => `${item}${obj[item]}`);
  return m;
}
function useSetVal(initialValue = {}, refresh) {
  const searchValue = useRef(initialValue);
  const { current } = searchValue;
  const setSearchValue = (name, value) => {
    searchData(current, name, value);
    refresh("search");
  };
  const changeSearchValue = (name, value) => {
    searchData(current, name, value);
  };
  return [current, setSearchValue, changeSearchValue];
}

export default useSetVal;
