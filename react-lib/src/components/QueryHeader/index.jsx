import React, { memo } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { DEFAULTCOLLAYOUT, DEFAULTGULTER } from "../../map/index.jsx";
import { generateId } from "../../utils/utils.js";

const DIV = styled.div`
  display: inline-block;
  width: ${({ titleWidth, title }) =>
    title ? `calc(100% - ${titleWidth}px)` : "100%"};
    vertical-align: middle;
`;

const SPAN = styled.span`
  display: inline-block;
  width: ${({ titleWidth }) => `${titleWidth}px`};
  height: 30px;
  line-height: 30px;
  text-align: right;
  vertical-align: middle;
`;

const QueryHeader = (props) => {
  const { Items = [], gutter = DEFAULTGULTER } = props;
  return (
    <Row gutter={gutter} style={{marginBottom: 24}}>
      {Items.map((item) => {
        const {
          name = generateId("queryNoName"),
          title = null,
          span = DEFAULTCOLLAYOUT,
          children,
          titleWidth = 120,
        } = item;
        return (
          <Col key={name} {...span}>
            {title && <SPAN titleWidth={titleWidth}>{title}：</SPAN>}
            <DIV titleWidth={titleWidth} title={title}>
              {children}
            </DIV>
          </Col>
        );
      })}
    </Row>
  );
};

export default memo(QueryHeader);
