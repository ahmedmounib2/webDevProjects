const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi; // can only have one default export for every file
export { doublePi, triplePi }; // all other exports should be included inside curly braces to export
