const guides = require('./collections/guides');
const ct_creation = require('./collections/ct-creation');
const rankings = require('./collections/rankings');

module.exports = function (config) {
  guides(config);
  ct_creation(config);
  rankings(config);
}