import React, { memo } from "react";
import { Input, Switch, Select, Tooltip } from "antd";

const TooltipInput = ({ tooltip, type = "input", ...props }) => {
  const SubInput = () => {
    switch (type) {
      case "select":
        return <Select {...props} />;
      case "switch":
        return (
          <Switch {...props} checkedChildren="开启" unCheckedChildren="关闭" />
        );
      case "textArea":
        return <Input.TextArea {...props} />;
      default:
        return <Input {...props} type={type} />;
    }
  };
  return <Tooltip title={tooltip}>{SubInput()}</Tooltip>;
};

export default memo(TooltipInput);
