var Methodder;

module.exports = Methodder = (function() {
  function Methodder(method, scope) {
    return function(args) {
      return method.call(scope, args);
    };
  }

  return Methodder;

})();