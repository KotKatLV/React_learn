"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App {
  constructor() {
    _defineProperty(this, "run", async function () {
      let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';
      console.log("Hello ".concat(name));
    });
  }

}

const app = new App();
app.run().then(() => console.log('done')).catch(() => console.log('error'));