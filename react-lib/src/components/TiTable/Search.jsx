import React from "react";
import { Form, Row, Col } from "antd";
import { DEFAULTCOLLAYOUT } from "../../map/index.jsx";

const renderComponet = (children, rowData) => {
  if (typeof children === "function") {
    return <div>{children(rowData)};</div>;
  }
  return <div>{children}</div>;
};

const setSearch = ({ search = [], rowData }) => {
  return (
    <Form>
      <Row gutter={[24, 24]} align="middle">
        {search.map((item) => {
          const { name, span } = item;
          return (
            <Col key={name} {...span} {...DEFAULTCOLLAYOUT}>
              {item.children
                ? renderComponet(item.children, rowData, item.margin)
                : null}
            </Col>
          );
        })}
      </Row>
    </Form>
  );
};

export default setSearch;
