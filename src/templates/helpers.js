'use strict'

module.exports = {
  eq: function eq(a, b) {return a === b},
  gt: function gt(a, b) {return a > b},
  gte: function gte(a, b) {return a >= b},
  lt: function lt(a, b) {return a < b},
  lte: function lte(a, b) {return a <= b},
  upcase: function upcase(s) {return s.toUpperCase()},
}
