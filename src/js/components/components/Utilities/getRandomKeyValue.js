export function getRandomKeyValue() {
    const uuidv4 = require('uuid/v4');
    const buffer= Array();
    uuidv4(null, buffer, 0);
    return buffer;
}