// FOR EACH //
Array.prototype.myEach = function( callbackFn) {
   for (let n = 0; n < this.length; n++)
   {
      // skipping undefined doesn't mimic original method
      /*if (this[i] === undefined)
      {
         continue;
      }*/
      callbackFn(this[n], n, this);
   }
};
// Testing

/*let arr = [-1, 1, "string", undefined, null];
arr.forEach(l => console.log(l));
arr.myEach(l => console.log(l));
arr.forEach(l => console.log(l * 2));
arr.myEach(l => console.log(l * 2));
console.log(arr.myEach(()=>{}));
console.log(arr.forEach(()=>{}));*/


// MAP //
Array.prototype.myMap = function(callbackFn) {
   let new_arr = [];
   for (let i = 0; i < this.length; i++)
   {
      // skipping undefined doesn't mimic original method
      /*if (this[i] === undefined)
      {
         continue;
      }*/
      new_arr.push(callbackFn(this[i], i, this));
   }
   return new_arr;
};

// Testing

/*let arr = [-1, 1, "string", undefined, null];
console.log(arr.map(x=>x * 2));
console.log(arr.myMap(x=>x * 2));*/

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
   let new_arr = [];
   for (let i = 0; i < this.length; i++)
   {
      // skipping undefined doesn't mimic original method
      /*if (this[i] === undefined)
      {
         continue;
      }*/
      if (callbackFn(this[i], i, this))
      {
         new_arr.push(this[i]);
      }
   }
   return new_arr;
};

// Testing

/*let arr = [-1, 1, 7, "string", undefined, null];
console.log(arr.filter(x=>x < 2));
console.log(arr.myFilter(x=>x < 2));
console.log(arr.filter(x=>x===undefined));
console.log(arr.myFilter(x=>x===undefined));*/

// SOME //
Array.prototype.mySome = function(callbackFn) {
   let new_arr = [];
   for (let i = 0; i < this.length; i++)
   {
      // skipping undefined doesn't mimic original method
      //if (this[i] === undefined)
      //{
      //   continue;
      //}
      if (callbackFn(this[i], i, this))
      {
         return true;
      }
   }
   return false;
};

// Testing

/*let arr = [-1, 1, 7, "string", undefined, null];
arr = [7, "string", undefined, null];
arr = [7, "string", undefined];
console.log(arr.some(x=>x < 2));
console.log(arr.mySome(x=>x < 2));
console.log(arr.some(x=>x===undefined));
console.log(arr.mySome(x=>x===undefined));*/

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
   let new_arr = [];
   for (let i = 0; i < this.length; i++)
   {
      // skipping undefined doesn't mimic original method
      //if (this[i] === undefined)
      //{
      //   continue;
      //}
      if (!callbackFn(this[i], i, this))
      {
         return false;
      }
   }
   return true;
};

// Testing

/*let arr = [-1, 1, 7, "string", undefined, null];
//arr = [7, "string", undefined, null];
//arr = [7, "string", undefined];
arr = [0, 0, 0];
//arr = [undefined, undefined, undefined];
arr = [null, null];
console.log(arr.every(x=>x < 2));
console.log(arr.myEvery(x=>x < 2));
console.log(arr.every(x=>x===undefined));
console.log(arr.myEvery(x=>x===undefined));
console.log(arr.every(x=>x===0));
console.log(arr.myEvery(x=>x===0));
console.log(arr.every(x=>x===null));
console.log(arr.myEvery(x=>x===null));*/

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
   let previousValue = 0;
   for (let i = 0; i < this.length; i++)
   {
      // skipping undefined doesn't mimic original method
      //if (this[i] === undefined)
      //{
      //   continue;
      //}
      previousValue = callbackFn(previousValue, this[i], i, this);
   }
   return previousValue;
};

// Testing

/*let arr = [-1, 1, 7, "string", undefined, null];
arr = [7, "string", undefined, null];
arr = [7, "string", undefined];
//arr = [0, 0, 0];
arr = [1, 2, 4];
console.log(arr.myReduce((previousValue, currentValue)=>previousValue+currentValue));
console.log(arr.reduce((previousValue, currentValue)=>{return previousValue + currentValue}));*/


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