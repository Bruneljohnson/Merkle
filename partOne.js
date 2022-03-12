"use strict";

const longestSeq = function (str) {
  const regex = /([a-z])\1+/gi;
  const matches = str.match(regex);

  const seqObj = {};
  matches.forEach((el) => (seqObj[el[0].toLowerCase()] = el.length));

  const sorted = Object.keys(seqObj)
    .sort()
    .reduce((acc, key) => ({ ...acc, [key]: seqObj[key] }), {});

  const max = Math.max(...Object.values(sorted));

  const longestSeq = Object.keys(sorted)
    .filter((key) => sorted[key] === max)
    .map((key) => ({ [key]: sorted[key] }))[0];

  return longestSeq;
};

console.log(longestSeq("dghhhmhmx"));
console.log(longestSeq("dhkkhhKKKt"));
console.log(longestSeq("aBbBadddadd"));
