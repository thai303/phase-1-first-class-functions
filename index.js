function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    const spy = () => console.log("this is a named function");
    return spy;
  };
  function returnsAnAnonymousFunction() {
      return () => console.log("this is a named function");
  }