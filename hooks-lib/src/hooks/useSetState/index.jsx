/**
 * @name userSetState
 * @description 相当于类组件下的this.setState({}) ,用于解决相关联的useState只能存储单个值。
 * @warning 只可改变已有属性的值，不能删除/添加新的属性
 */
import { useCallback, useState } from "react";

const useSetState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setMergeState = useCallback((patch) => {
    setState((prevState) => ({
      ...prevState,
      ...(typeof patch === "function" ? patch(prevState) : patch),
    }));
  }, []);

  return [state, setMergeState];
};

export default useSetState;
