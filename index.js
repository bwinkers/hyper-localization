'use strict;'

/**
 *  This module calculates which localization files ActiveRules attempts to load.
 *  The files may or may not exist, AR is designed to use whatever is found.
 *  
 *  This module accounts for the various locales within an ActiveRules site.
 */

// Provides great promises
var Promise = require("bluebird");

var arLocales = require('activerules-locale-files');

var merge = require('activerules-merge-files');

// Create the return object
var AR = function () {};

/**
 * 
 * @param string arRoot
 * @param array acceptLangs In order of preference
 * @param object site
 * @returns {nm$_index.Promise}
 */
AR.prototype.getLocalePaths = function (arRoot, acceptLangs, site) {
    
    return  arLocales.getPaths(arRoot, acceptLangs, site);

};

// Export a new instance of the object/function
module.exports = exports = new AR();

