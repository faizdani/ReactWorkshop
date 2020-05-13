export const clone = (inObject) => {

    let outObject = {...inObject};

    return outObject;
}


export const deepClone = (inObject) => {
    
    let outObject = JSON.parse(JSON.stringify(inObject));
    
    return outObject;
    
    // let outObject, value, key
  
    // if (typeof inObject !== "object" || inObject === null) {
    //   return inObject // Return the value if inObject is not an object
    // }
  
    // // Create an array or object to hold the values
    // outObject = Array.isArray(inObject) ? [] : {}
  
    // for (key in inObject) {
    //   value = inObject[key]
  
    //   // Recursively (deep) copy for nested objects, including arrays
    //   outObject[key] = deepCopyFunction(value)
    // }
  
    // return outObject
  }
  