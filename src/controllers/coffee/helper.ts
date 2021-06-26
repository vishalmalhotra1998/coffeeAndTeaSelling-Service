import * as queryString from 'query-string';
export const handleSearchData = (bulkkeys: string[]) => {
 const refinedObject = {};
 console.log(bulkkeys);
 bulkkeys.forEach((ele: string) => {
  const parsedString = JSON.parse(JSON.stringify(queryString.parse(ele)));
  const key = Object.keys(parsedString)[0];
   refinedObject[key] = parsedString[key];
 });
 return refinedObject;
};
