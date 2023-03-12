/*
 *title: Utilities
 *Description: Important utilitie function
 *Date: 06-03-2023
 *
 */

// dependecies
const crypto = require('node:crypto');
const environments = require('./environments');

// module saffolding
const Utilities = {};

// parse JSON string to object
Utilities.parseJson = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// hash string
Utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        console.log(environments, process.env.NODE_ENV);
        const hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');

        return hash;
    }
    return false;
};

// expot module
module.exports = Utilities;
