"use strict";

const reverseString = function (string) {
  if (string === null) return;

  const reverse =
    string === "" || string.length === 1
      ? string
      : reverseString(string.substring(1)) + string.charAt(0);

  return reverse;
};
console.log(reverseString("abcb"));
console.log(reverseString("test"));
console.log(reverseString("racecar"));
console.log(reverseString("hello"));
console.log(reverseString("iphonethirteen"));
