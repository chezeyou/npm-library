import { useState } from "react";

const useEleVisible = (className, top = 120) => {
  const [visible, setVisible] = useState(false);
  const run = () => {
    const ele = document.querySelector(`.${className}`);
    if (!ele?.getBoundingClientRect) return;
    const rect = ele.getBoundingClientRect();
    if (rect.top <= top && visible) {
      setVisible(false);
    }
  };
  return [visible, setVisible, run];
};
export default useEleVisible;
