"use strict";
exports.__esModule = true;
var curry_1 = require("./functions/curry");
function sumAndStringify(a, b) {
    return String(a + b);
}
var Runner = /** @class */ (function () {
    function Runner() {
    }
    Runner.main = function () {
        var a = 1;
        var b = 2;
        console.log('Calling sumAndStringify(1,2)...');
        console.log("Result: " + sumAndStringify(a, b));
        console.log('Creating a curried version of sumAndStringify...');
        var curried = curry_1.curry(sumAndStringify);
        console.log('Creating a partial function by calling curried(1)...');
        var partial1 = curried(1);
        console.log('Calling partial(2)...');
        console.log("Result: " + partial1(2));
        console.log('Uncurrying sumAndStringify...');
        var uncurried = curry_1.uncurry(curried);
        console.log('Calling uncurried(1,2)');
        console.log("Result: " + uncurried(1, 2));
        return 0;
    };
    return Runner;
}());
Runner.main();
//# sourceMappingURL=index.js.map