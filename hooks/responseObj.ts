import _ from "lodash";

export const responseObj = (obj: Record<string, any>, resultAsObj = false) => {
  const result = _.isArray(obj) ? obj[0]?.result : obj?.result;
  return resultAsObj && _.isArray(obj) ? result[0] : result;
};

export default responseObj;
