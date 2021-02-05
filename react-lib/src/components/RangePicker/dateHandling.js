import moment from "moment";
import { typeEnum as dateType } from "../map.jsx";

moment.locale("zh-cn");

export class DataHandling {
  static realTimeFormatData = (data) => {
    const tmpDb = [];
    const tmpDate = new Date();
    for (const item of data) {
      const timeStr = `${tmpDate.getFullYear()}-${
        tmpDate.getMonth() + 1
      }-${tmpDate.getDate()} ${item.x}`;
      tmpDb.push({ x: new Date(timeStr).getTime(), y: item.y });
    }
    return tmpDb;
  };

  static dataType = ({ type, diff }) => {
    if (type) {
      switch (type) {
        case dateType.page.today:
        case dateType.page.yesterday:
          return dateType.api.HOUR;
        case dateType.page.year:
          return dateType.api.MONTH;
        default:
          return dateType.api.DAY;
      }
    } else {
      if (diff === 1) return dateType.api.HOUR;
      if (diff >= 182) return dateType.api.MONTH;
      return dateType.api.DAY;
    }
  };

  static formatDate = (type = "today", dateStyle = "YYYY-MM-DD") => {
    let dateVal;
    let dateTypeEnum;
    if (Object.prototype.toString.call(type) === "[object String]") {
      dateVal = getTimeDistance(type);
      dateTypeEnum = this.dataType({ type });
    } else {
      dateVal = type;
      const dateDiff = dateVal[1].diff(dateVal[0], "day") + 1;
      dateTypeEnum = this.dataType({ type: undefined, diff: dateDiff });
    }
    dateVal[1] = moment(dateVal[1]).endOf("day");
    const tmpVal = {
      factor: {
        type: dateTypeEnum,
        start: dateVal[0].format(dateStyle),
        end: dateVal[1].format(dateStyle),
      },
      currentDate: dateVal,
    };
    return tmpVal;
  };
}

export function getTimeDistance(type) {
  const { page: typeEnum } = dateType;
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);

  switch (type) {
    case typeEnum.yesterday: {
      const yesterday = moment(now).add(-1, "days").toDate();
      yesterday.setHours(0);
      yesterday.setMinutes(0);
      yesterday.setSeconds(0);
      return [moment(yesterday), moment(yesterday.getTime() + (oneDay - 1000))];
    }
    case typeEnum.today:
      return [moment(now), moment(now.getTime() + (oneDay - 1000))];
    case typeEnum.week:
      return [
        moment(now).subtract(6, "days"),
        moment(now.getTime() + (oneDay - 1000)),
      ];
    case typeEnum.halfMonth:
      return [
        moment(now).subtract(14, "days"),
        moment(now.getTime() + (oneDay - 1000)),
      ];
    case typeEnum.month:
      return [
        moment(now).subtract(29, "days"),
        moment(now.getTime() + (oneDay - 1000)),
      ];
    case typeEnum.quarter:
      return [
        moment(now).subtract(89, "days"),
        moment(now.getTime() + (oneDay - 1000)),
      ];
    default:
      return [
        moment(now).subtract(12, "months"),
        moment(now.getTime() + (oneDay - 1000)),
      ];
  }
}
