// Comparison of datatypes in javascript | chai aur #javascript
console.log("5" == 5);      // true, because of type coercion
console.log("5" === 5);     // false, no type coercion
console.log(null == undefined); // true, both are considered equal
console.log(null === undefined); // false, different types
console.log(NaN == NaN);    // false, NaN is not equal to anything, including itself
console.log(NaN === NaN);   // false, same reason as above
console.log(0 == false);    // true, type coercion
console.log(0 === false);   // false, different types   
