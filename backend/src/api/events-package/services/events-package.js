'use strict';

/**
 * events-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events-package.events-package');
