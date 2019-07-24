const _ = {
  // Find a clamp number
	clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampValue = Math.min(lowerClampedValue, upper);
		return clampValue;
  },
  
  // Check if the number is between start and end
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      temp = start;
      start = end;
      end = temp;
    }
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },
  
  // Split the string into an array of string
  words(string) {
    return string.split(' ');
  },
  
  // Add space to the left and right sides of the string if its length is less than specified length
  pad(string, length) {
    if (length <= string.length) {
      return string;
    }

    let beginningPadding = Math.floor((length - string.length) / 2);
    let endingPadding = length - string.length - beginningPadding;
    return ' '.repeat(beginningPadding) + string + ' '.repeat(endingPadding)
  },
  
  // Check if the object contains a value at the specified key
  has(object, key) {
    if (Object.keys(object).includes(key)) {
      return true;
    }
    return false;
  },
  
  // Create a new object with Swap the key/value pairs in an old object
  invert(object) {
    const newObject = {};
    for (let [key, value] of Object.entries(object)) {
      newObject[value] = key;
    }
    return newObject;
  },
  
  // Returns the key of the first element predicate returns truthy for
  findKey(object, predicate) {
    for (let[key, value] of Object.entries(object)) {
      if (predicate(value)) {
        return key;
      }
    }
    return undefined;
  },
  
  // Delete the speficied number of element(s) from the beginning of the array
  drop(arr, number) {
    if (number === undefined) {
      number = 1;
    } else if (number > arr.length) {
      number = arr.length - 1;
    }
    for (let i = 0; i < number; i++) {
      arr.shift();
    }
    return arr;
  },
  
  // Drop element(s) from the beginning of the array until the predicate function returns false
  dropWhile(arr, predicate) {
    let dropNumber = arr.findIndex((element, index) => {
      return !(predicate(element, index, arr));
    });
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },
  
  /* Creates an array of elements split into groups the length of size.
     If array can't be split evenly, the final chunk will be the remaining elements.
  */
  chunk(arr, size) {
    newArr = []
    if (size === undefined) {
			size = 1;
    }
    while (arr.length > 0) {
      let element = []
      for (let i = 0; i < size; i++) {
        element.push(arr.shift())
      }
      newArr.push(element);
      if (arr.length < size) {
        size = arr.length;
      }
    } 
    return newArr;
  }
};





// Do not write or modify code below this line.
module.exports = _;