import React from "react";
import { Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import styles from "./index.less";

const DIV = styled.div`
  position: relative;
`;
const AddButton = (props) => {
  const {
    title = "添加",
    visible = false,
    addHandle = () => {},
    children,
    btStyles,
  } = props;
  return (
    <DIV>
      <div
        className={styles["addBtn-addBtn"]}
        style={btStyles}
        onClick={addHandle}
      >
        <PlusOutlined />
        <span>&nbsp;{title}</span>
      </div>
      {visible && (
        <Drawer
          className={styles["addBtn-drawer"]}
          visible
          placement="top"
          closable={false}
          mask={false}
          destroyOnClose
          getContainer={false}
        >
          {children}
        </Drawer>
      )}
    </DIV>
  );
};

export default AddButton;
