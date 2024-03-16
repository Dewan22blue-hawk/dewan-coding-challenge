// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function humanReadable(seconds) {
  let HH = String(Math.floor(seconds / 3600)).padStart(2, 0);
  let MM = String(Math.floor((seconds % 3600) / 60)).padStart(2, 0);
  //   let SS = Math.floor(seconds % 3600);
  let SS = String(Math.floor(seconds % 60)).padStart(2, 0);
  return `${HH}:${MM}:${SS}`;
}
console.log(humanReadable(3600));
