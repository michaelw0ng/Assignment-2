// FOR EACH //
Array.prototype.myEach = function( callbackFn) {
   for (let n = 0; n < this.length; n++)
   {
      if (this[n] === undefined)
      {
         continue;
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
Array.prototype.myMap = function() {
   /*let new_arr = [];
   for (let i = 0; i < this.length; i++)
   {
      if (this[i] === undefined)
      {
         continue;
      }
      new_arr.push(callbackFn(this[i], i, this));
   }
   return new_arr;*/
};

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