/**
 * @title Sectable
 * @update 控制刷新参数refresh语义化, 初始状态false, 查询'search', 添加'add', 编辑'edit', 删除{type: 'del', delNum: <Number>}(delNum决定单选多选)
 * @param getList Func required 列表数据请求
 * @param refresh Number | Object required 控制数据请求
 * @param extraProps Object 数据请求额外参数
 * @param queryItem Array table和表单组合查询
 * @param ...tableProps 混合table props
 */
import React, { memo, useEffect, useReducer } from "react";
import { Table } from "antd";
import QueryHeader from "../QueryHeader/index.jsx";
import { generateId } from "../../utils/utils.js";
import styles from "./index.less";

const initstate = { page: 1, size: 10, secId: null };
const calcPage = (payload) => {
  const { page, size, delNum, total = 0 } = payload;
  let pageNo = page;
  const restNum = total - size * (page - 1);
  let pageNoDiff = Math.floor((delNum - restNum) / size) + 1;
  if (pageNoDiff < 0) {
    pageNoDiff = 0;
  }
  pageNo -= pageNoDiff;
  if (pageNo < 1) {
    pageNo = 1;
  }
  return pageNo;
};
const reducer = (state, action) => {
  const { payload = {} } = action;
  switch (action.type) {
    case "add":
      return { ...state, page: 1, secId: generateId("add") };
    case "edit":
      return { ...state, secId: generateId("edit") };
    case "del":
      const { delNum = 1, total } = payload;
      return {
        ...state,
        page: calcPage({ ...state, delNum, total }),
        secId: generateId("del"),
      };
    case "search":
      return { ...state, page: 1, secId: generateId("search") };
    case "pageChange":
      const { page, size } = payload;
      return { page, size, secId: generateId("pageChange") };
    default:
      return state;
  }
};
const Sectabel = (props) => {
  const {
    getList,
    refresh,
    total,
    queryItem,
    extraProps,
    pagination = {},
    relyOn = [],
    children,
    ...rest
  } = props;
  const [state, dispatch] = useReducer(reducer, initstate);
  const { page, size, secId } = state;

  useEffect(() => {
    if (!refresh) return;
    const type = typeof refresh === "string" ? refresh : "del";
    if (type === "del") {
      const { delNum = 1 } = refresh;
      dispatch({ type: "del", payload: { delNum, total } });
    } else {
      dispatch({ type });
    }
  }, [refresh]);

  useEffect(() => {
    getList({ page: page - 1, size, ...extraProps });
  }, [secId, ...relyOn]);

  const changeHandle = (pageCurrent, pageSize) => {
    dispatch({
      type: "pageChange",
      payload: { page: pageCurrent, size: pageSize },
    });
  };

  const paginationProps = () => {
    if (!pagination || !total) return false;
    return {
      current: page,
      total,
      pageSize: size,
      showSizeChanger: true,
      showQuickJumper: true,
      showLessItems: true,
      hideOnSinglePage: false,
      onChange: changeHandle,
      onShowSizeChange: changeHandle,
      showTotal: (resultNums) =>
        `共 ${resultNums} 条记录 第 ${page} / ${Math.ceil(
          parseInt(resultNums, 10) / parseInt(size, 10)
        )} 页`,
      ...pagination,
    };
  };

  return (
    <div className={styles["sec-table"]}>
      {queryItem && <QueryHeader Items={queryItem} />}
      {children}
      <Table
        rowKey={(record) => record.id}
        pagination={paginationProps()}
        expandIconAsCell={false}
        expandIconColumnIndex={-1}
        expandIcon={() => null}
        {...rest}
      />
    </div>
  );
};

export default memo(Sectabel);
