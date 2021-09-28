// FOR EACH //
Array.prototype.myEach = function( callbackFn) {
   for (let n = 0; n < this.length; n++)
   {
      if (this[n] === undefined)
      {
         continue; // may remove for more accurate functionality
      }
      callbackFn(this[n], n, this);
   }
};
// Testing

/*let arr = [1, undefined];
arr.forEach(l => console.log(l));
arr.myEach(l => console.log(l));
arr.forEach(l => console.log(l * 2));
arr.myEach(l => console.log(l * 2));*/


// MAP //
Array.prototype.myMap = function(callbackFn) {
   let new_arr = [];
   for (let i = 0; i < this.length; i++)
   {
      if (this[i] === undefined)
      {
         continue; // may remove for more accurate functionality
      }
      new_arr.push(callbackFn(this[i], i, this));
   }
   return new_arr;
};

// Testing

/*let arr = [1, "string", undefined, null];
console.log(arr.map(x=>x * 2));
console.log(arr.myMap(x=>x * 2));*/

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};