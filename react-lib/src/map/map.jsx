const DEFAULTCOLLAYOUT = { xs: 24, sm: 24, md: 12, lg: 12, xl: 8, xxl: 6 };
const DEFAULTGULTER = [
  { xs: 0, sm: 0, md: 24, lg: 24, xl: 24, xxl: 24 },
  { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 },
];

const typeEnum = {
  page: {
      yesterday: 'yesterday',
      today: 'today',
      week: 'week',
      halfMonth: 'halfMonth',
      month: 'month',
      quarter: 'quarter',
      year: 'year',
  },
  api: { HOUR: 'HOUR', DAY: 'DAY', MONTH: 'MONTH' },
};

const typeName = {
  today: '今日',
  yesterday: '昨日',
  week: '7天',
  halfMonth: '15天',
  month: '30天',
  quarter: '90天',
  year: '一年',
};

export { DEFAULTCOLLAYOUT, DEFAULTGULTER, typeEnum, typeName };
