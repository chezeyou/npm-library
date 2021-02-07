import React from "react";
import { Radio } from "antd";
import { typeName } from "../../map/map.jsx";
import styles from "./index.less";

const eleGenerator = (items) => {
  const findKey = (value, compare = (a, b) => a === b) => {
    return Object.keys(typeName).find((k) => compare(typeName[k], value));
  };

  const eles = [];
  for (const item of Object.keys(items)) {
    const itemKey = findKey(item);
    eles.push(
      <Radio.Button value={itemKey} key={itemKey}>
        {item}
      </Radio.Button>
    );
  }
  return eles;
};

const RadioDateBtns = (props) => {
  const { rangesItem, selectDate, rangePickerValue, flag } = props;

  return (
    <div className={styles.radioDate}>
      <Radio.Group
        size="small"
        value={flag}
        onChange={(e) => selectDate(e.target.value)}
      >
        {eleGenerator(rangesItem, selectDate, rangePickerValue)}
      </Radio.Group>
    </div>
  );
};

export default RadioDateBtns;
