function isEmpty(obj) {
    return JSON.stringify(obj) === '{}';
}

function areObjectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function intersectionTwoObjects(obj1, obj2) {
    let result = {};
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            if (obj1[key] === obj2[key]) {
                result[key] = obj1[key];
            }
        }
    }
    return result;
}

function findValueByKey(obj, keyObj) {
    if (obj[keyObj]) {
        return obj[keyObj];
    }
    else {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                if (obj[key][keyObj]) {
                    return obj[key][keyObj];
                }
            }
        }
    }
}
