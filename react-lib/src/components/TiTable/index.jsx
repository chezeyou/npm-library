import React, { useEffect, useReducer, memo } from "react";
import { Table } from "antd";
import Search from "./Search.jsx";
import styles from "./index.less";

function increment(count) {
  return count + 1;
}

function formatPage(page) {
  if (page - 1 >= 0) {
    return page - 1;
  }
  return 0;
}

// 删除操作判断页码
function delPage(state, dataLen) {
  let { page: prePage } = state;
  const { count } = state;
  if (dataLen - 1 === 0) {
    prePage = prePage - 1 >= 1 ? prePage - 1 : 1;
  }
  return { ...state, page: prePage, count: increment(count) };
}

// 各种操作改变参数从而触发调用api
function reduce(state, action) {
  const { count } = state;
  switch (action.type) {
    case "add":
      return { ...state, count: increment(count) };
    case "del": {
      return delPage(state, action.payload);
    }
    case "search":
      return { ...state, page: 1, count: increment(count) };
    case "change":
      return { ...state, count: increment(count), ...action.payload };
    default:
      return state;
  }
}

const TiTable = (props) => {
  const {
    children,
    tableConfig,
    pageConfig,
    api = () => {},
    refresh = {
      isRefresh: true,
      type: "nomal",
    },
    isSort = true,
    sortArr = ["id,desc"],
    dataLen = 0,
    relyon = [],
  } = props;

  const { pagination = null } = tableConfig;
  const initialValue = { page: 1, size: 10, count: 0 };

  const [value, dispatch] = useReducer(reduce, initialValue);

  const { count, size, page } = value;

  useEffect(() => {
    const { type } = refresh;
    const action = { type };
    if (type === "del") {
      action.payload = dataLen;
    }
    dispatch(action);
  }, [refresh.isRefresh, ...relyon]);

  useEffect(() => {
    const defaultParams = {
      size,
      page,
    };
    if (isSort) {
      defaultParams.sort = sortArr;
    }
    defaultParams.page = formatPage(page);
    if (relyon.length > 0 && count > 0) {
      api(defaultParams);
    }
    if (relyon.length === 0 && count > 0) {
      api(defaultParams);
    }
  }, [count]);

  let paginationConfig = {};
  if (pagination !== false) {
    paginationConfig = {
      onChange: (paPage, paSize) =>
        dispatch({
          type: "change",
          payload: { page: paPage, size: paSize },
        }),
      pageSize: size,
      current: page,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: (resultNums) =>
        `共 ${resultNums} 条记录 第 ${page} / ${Math.ceil(
          parseInt(resultNums, 10) / parseInt(size, 10)
        )} 页`,
      ...pageConfig,
      ...pagination,
    };
  } else {
    paginationConfig = false;
  }

  return (
    <div className={styles["ti-table"]}>
      {children}
      <Table
        rowKey={(record) => record.name}
        {...tableConfig}
        pagination={paginationConfig}
      />
    </div>
  );
};

export default memo(TiTable);
export { Search };
