const standardizeInput = function (collection) {
  return collection instanceof Array
    ? collection.slice()
    : Object.values(collection);
};
//myEach: calls alert with each element passed; calls alert properly on object values;returns the original collection:

const myEach = function (collection, callback) {
  const newCollection = standardizeInput(collection);

  for (let idx = 0; idx < newCollection.length; idx++) {
    callback(newCollection[idx]);
  }

  return collection;
};
// myMap: to successfully return a correctly populated array; successfully return a correctly populated array from modified object values:
const myMap = function (collection, callback) {
  const newCollection = standardizeInput(collection);
  const newArr = [];
  for (let idx = 0; idx < newCollection.length; idx++) {
    newArr.push(callback(newCollection[idx]));
  }
  return newArr;
};
//myReduce: to return the correct reduced value when passed an initial value;return the correct reduced value when not passed an initial value; return the correct reduced value from object values:
const myReduce = function (collection, callback, acc) {
  let newCollection = standardizeInput(collection);
  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }
  const len = newCollection.length;
  for (let i = 0; i < len; i++) {
    acc = callback(acc, newCollection[i], newCollection);
  }
  return acc;
};
// myFind: to return the value if found; does not traverse the whole array if the value is found early; returns undefined if the value is not present:
const myFind = function (collection, predicate) {
  const newCollection = standardizeInput(collection);

  for (let idx = 0; idx < newCollection.length; idx++) {
    if (predicate(newCollection[idx])) return newCollection[idx];
  }

  return undefined;
};
//myFilter: to correctly filter for values that the callback evaluates as true; correctly return an empty array if no matching values are found:
const myFilter = function (collection, predicate) {
  const newCollection = standardizeInput(collection);
  const newArr = [];
  for (let idx = 0; idx < newCollection.length; idx++) {
    if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
  }
  return newArr;
};
//mySize: to correctly return the size of the collection when an array is passed;correctly return the size of the collection (amount of keys) when an object is passed:
const mySize = function (collection) {
  const newCollection = standardizeInput(collection);
  return newCollection.length;
};

// Array Functions
// myFirst: returns the first element of the collection:; returns the first n elements of the collection when the second optional argument (n) is provided:
const myFirst = function (arr, stop = false) {
  return stop ? arr.slice(0, stop) : arr[0];
};
//myLast: to return the last element of the collection; return the last n elements of the collection when the second optional argument (n) is provided:
const myLast = function (arr, start = false) {
  return start
    ? arr.slice(arr.length - start, arr.length)
    : arr[arr.length - 1];
};

const mySortBy = function (arr, callback) {
  const newArr = [...arr];
  return newArr.sort(function (a, b) {
    if (callback(a) > callback(b)) {
      return 1;
    } else if (callback(b) > callback(a)) {
      return -1;
    } else {
      return 0;
    }
  });
};
const unpack = function (receiver, arr) {
  for (let val of arr) {
    receiver.push(val);
  }
};
const myFlatten = function (collection, shallow, newArr = []) {
  if (shallow) {
    for (let val of collection) {
      Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
    }
  } else {
    for (let val of collection) {
      if (Array.isArray(val)) {
        myFlatten(val, false, newArr);
      } else {
        newArr.push(val);
      }
    }
  }
  return newArr;
};
//myKeys: to retrieve all the names of the object's own enumerable properties:
const myKeys = function (obj) {
  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
};
//myValues: retrieves all the values of the object's own properties:
const myValues = function (obj) {
  const values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
};
