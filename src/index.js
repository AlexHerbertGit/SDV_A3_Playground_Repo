// Create a function that can divide object keys and values into a singular object and store them inside an array
const myObj = {
    first_name: "Alex",
    last_name: "Herbert",
    city: "Nelson",
    postcode: 7010
};

function divideObject(obj) {
    const result = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const dividedObj = {};
            dividedObj[key] = obj[key];
            result.push(dividedObj);
        }
    }
    return result;
};

const dividedArray = divideObject(myObj);
console.log(dividedArray);

function findValue(obj, key) {
    if (obj.hasOwnProperty(key)) {
        return String(obj[key])
    } else {
        return 'Key not found'
    }
}

console.log(findValue(myObj, 'last_name'));

//Create a function that switches the key and the value of an object.

function switchKeyAndValues(obj) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[obj[key]] = key;
        }
    }
    return result;
};

const switchedObj = switchKeyAndValues(myObj);
console.log(switchedObj);

//Alternate Method

function objSwitchFunction(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [value, key]
    ))
};

console.log(objSwitchFunction(myObj));