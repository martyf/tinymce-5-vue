'use strict';

let appConfig = {};

//
// If we have the "app-config" element, let's load its contents into our config object.
//
if (document.getElementById('app-config'))
{
    // load the config options
    appConfig = JSON.parse(document.getElementById('app-config').innerHTML);
}

/**
 * Get a config option, using dot-syntax.
 *
 * Will parse the requested key by a period to look for nested attributes.
 *
 * For example, "tiny.key" would look for the "key" parameter inside a "tiny" object.
 *
 * @param key
 * @return {*}
 */
appConfig.get = function (key) {
    return key.split('.').reduce((o, i) => o[i], this);
};

// freeze our object
Object.freeze(appConfig);

export default appConfig;