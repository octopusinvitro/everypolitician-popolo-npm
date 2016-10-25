'use strict';

function Popolo() {
}

Popolo.prototype.read = function (popoloJSON) {
  try {
    return JSON.parse(popoloJSON);
  } catch (e) {
    return {};
  }
};

module.exports = Popolo;
