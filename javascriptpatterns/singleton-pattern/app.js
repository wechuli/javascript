const Singleton = (function() {
  let _instance;
  function _createInstance() {
    const _object = new Object({ name: "Wechuli" });
    return _object;
  }
  return {
    getInstance: function() {
      if (!_instance) {
        _instance = _createInstance();
      }
      return _instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
