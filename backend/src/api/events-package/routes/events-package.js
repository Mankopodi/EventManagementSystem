'use strict';

/**
 * events-package router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::events-package.events-package');
