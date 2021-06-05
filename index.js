// Write your solution in this file!

// drivers
// updateDriverWithKeyAndValue(driver, key, value)
//   ✓ returns a driver with the original key value pairs and the new key value pair
//   ✓ it does not modify the original driver, but rather returns a clone with the new data

const driver = {}


function updateDriverWithKeyAndValue(driver, key, value) {
    
    return Object.assign({}, driver, { [key]: value } );
}

// destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
//       ✓ updates `driver` with the given `key` and `value` (it is destructive) 
//       and returns the entire updated driver

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

    driver[key] = value;

    return driver;
}

// deleteFromDriverByKey(driver, key)
//       ✓ deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
//       ✓ does not modify the original driver (it is non-destructive)


function deleteFromDriverByKey(driver, key) {

    const newObj = Object.assign({}, driver);

    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    
    delete driver[key];

    return driver;

}
