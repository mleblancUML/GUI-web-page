export function isArray(arr) {    
    return (((!!arr) && (arr.constructor === Array)) ? true : false);
}

export function isNonUserDefinedObject(obj) {
    return (((!!obj) && (obj.constructor === Object)) ? true : false);
}