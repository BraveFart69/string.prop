const colors = require("colors");

function stringProp(str, obj, bool = false) {
  if (str === "") return obj;

  if (typeof str === "string" || str instanceof String) {
    const array = str.split(".");

    let foo;
    array.forEach((el, ind) => {
      try {
        if (ind === 0) foo = obj[el];
        else foo = foo[el];
      } catch (error) {
        process.exit(9);
      }
    });

    if (!foo && !bool) process.exit(1);
    if (foo && !bool) return foo;
    if (foo && bool) return true;
    if (!foo && bool) return false;
  }
}

console.log(stringProp("", { a: 1 }));

process.on("exit", (code) => {
  if (code !== 0)
    console.log(` The property was not found on the object `.bgRed.white);
});

module.exports = stringProp;
