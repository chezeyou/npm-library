import React, { useState, useEffect, useMemo } from "react";
import { Input, Select } from "antd";

const SelectInput = (props) => {
  const { options = [], onSearch, onChange, value } = props;
  const [key, setKey] = useState(options[0]?.value);
  const [currentVal] = useMemo(
    () => options.filter((item) => item.value === key),
    [key]
  );
  const [val, setVal] = useState(undefined);

  useEffect(() => {
    if (!value) return;
    setVal(value);
  }, [value]);

  const keyChangeHandle = (k) => {
    setKey(k);
    if (!val) return;
    setVal(undefined);
    onSearch(key, undefined);
  };

  const changeHandle = (e) => {
    const changeValue = e.target.value;
    setVal(changeValue);
    if (onChange) {
      onChange(key, changeValue);
    }
  };

  const AddonBefore = () => {
    return (
      <Select options={options} defaultValue={key} onChange={keyChangeHandle} />
    );
  };

  return (
    <Input.Search
      value={val}
      onChange={changeHandle}
      style={{ width: "100%" }}
      addonBefore={<AddonBefore />}
      placeholder={currentVal?.placeholder}
      onSearch={(v) => onSearch(key, v)}
    />
  );
};

export default SelectInput;
