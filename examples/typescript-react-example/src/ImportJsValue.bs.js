// Generated by BUCKLESCRIPT VERSION 4.0.17, PLEASE EDIT WITH CARE

import * as ImportJsValueGen from "./ImportJsValue.gen";

var roundedNumber = ImportJsValueGen.round(1.8);

var areaValue = ImportJsValueGen.area(/* record */[
      /* x */3,
      /* y */undefined
    ]);

function getAbs(x) {
  return x.getAbs();
}

var AbsoluteValue = /* module */[/* getAbs */getAbs];

function useGetProp(x) {
  return x.getProp() + 1 | 0;
}

function useGetAbs(x) {
  return x.getAbs() + 1 | 0;
}

export {
  roundedNumber ,
  areaValue ,
  AbsoluteValue ,
  useGetProp ,
  useGetAbs ,
  
}
/* roundedNumber Not a pure module */
