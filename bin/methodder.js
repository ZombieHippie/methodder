// Generated by CoffeeScript 1.7.1
module.exports = function(fn, scope) {
  return function() {
    return fn.apply(scope, arguments);
  };
};
