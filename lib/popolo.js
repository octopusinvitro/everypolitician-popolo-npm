'use strict';

function Popolo() {
}

Popolo.prototype.read = function (popoloJSON) {
  return JSON.parse(popoloJSON);
};

module.exports = Popolo;
