/*
 *title: Environments
 *Description: HANDLE All Environment Related things
 *Date: 01-03-2023
 *
 */

// module saffolding
const environments = {};

environments.staging = {
    port: 9000,
    envName: 'staging',
    secretKey: 'fgsdzfghgdgf',
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'sdfkshbfasldf',
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// expot corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// expot module
module.exports = environmentToExport;
