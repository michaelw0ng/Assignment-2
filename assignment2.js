// FOR EACH //
Array.prototype.myEach = function( callbackFn) {
   for (let n = 0; n < this.length; n++)
   {
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
   let previousValue = this[0];
   for (let i = 1; i < this.length; i++)
   {
      previousValue = callbackFn(previousValue, this[i], i, this);
   }
   return previousValue;
};

// Testing

/*let arr = [-1, 1, 7, "string", undefined, null];
arr = [7, "string", undefined, null];
arr = [7, "string", undefined];
//arr = [0, 0, 0];
//arr = [1, 2, 4];
console.log(arr.myReduce((previousValue, currentValue)=>previousValue+currentValue));
console.log(arr.reduce((previousValue, currentValue)=>{return previousValue + currentValue}));
arr = [10, 1, 2];
console.log(arr.myReduce((previousValue, currentValue)=>previousValue-currentValue));
console.log(arr.reduce((previousValue, currentValue)=>{return previousValue - currentValue}));*/


// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex) {
   if (fromIndex < 0)
   {
      for (let i = arr.length + fromIndex; i < arr.length; i++)
      {
         if (searchElement === this[i])
         {
            return true;
         }
      }
      return false;
   }
   else if (fromIndex > 0)
   {
      for (let i = fromIndex; i < this.length; i++)
      {
         if (searchElement === this[i])
         {
            return true;
         }
      }
      return false;
   }
   else
   {
      for (let i = 0; i < this.length; i++)
      {
         if (searchElement === this[i])
         {
            return true;
         }
      }
      return false;
   }
};

// Testing

/*let arr = [1, 2, 3];
arr = [-1, 1, 7, "string", undefined, null];
//arr = [-0, 0];
console.log(arr.includes(+0));
console.log(arr.myIncludes(+0));
//arr = [-0, +0]
console.log(arr.includes(undefined));
console.log(arr.myIncludes(undefined));
console.log(arr.includes("string"));
console.log(arr.myIncludes("string"));
console.log(arr.includes(0));
console.log(arr.myIncludes(0));
console.log(arr.includes(null, -1));
console.log(arr.myIncludes(null, -1));
console.log(arr.includes(-1, -6));
console.log(arr.myIncludes(-1, -6));*/

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex) {
   if (fromIndex < 0)
   {
      for (let i = arr.length + fromIndex; i < arr.length; i++)
      {
         if (searchElement === this[i])
         {
            return i;
         }
      }
      return -1;
   }
   else if (fromIndex > 0)
   {
      for (let i = fromIndex; i < this.length; i++)
      {
         if (searchElement === this[i])
         {
            return i;
         }
      }
      return -1;
   }
   else
   {
      for (let i = 0; i < this.length; i++)
      {
         if (searchElement === this[i])
         {
            return i;
         }
      }
      return -1;
   }
};

// Testing

/*//let arr = [1, 2, 3];
arr = [-1, 1, 7, "string", undefined, null];
//console.log(arr.indexOf(null, -1));
//console.log(arr.myIndexOf(null, -1));
//console.log(arr.indexOf(-1, -6));
//console.log(arr.myIndexOf(-1, -6))
console.log(arr.indexOf(undefined));
console.log(arr.myIndexOf(undefined));
console.log(arr.indexOf("string"));
console.log(arr.myIndexOf("string"));
arr = [-0, 0];
console.log(arr.indexOf(+0));
console.log(arr.myIndexOf(+0));
arr = [-0, +0]
console.log(arr.indexOf(0));
console.log(arr.myIndexOf(0));*/

// PUSH //
Array.prototype.myPush = function (...args) {
   let args_i = 0;
   let length = this.length;
   for (let i = length; i < length + args.length; i++)
   {
      this[i] = args[args_i];
      args_i++;
   }
   return this.length;
};

// Testing

/*let arr = [0, 1];
console.log(arr.push(2, 3, 4));
console.log(arr.push(2));
console.log(arr.push(null));
console.log(arr.push(undefined));
console.log(arr.push(+0));
console.log(arr.myPush(2, 3, 4));
console.log(arr.myPush(2));
console.log(arr.myPush(null));
console.log(arr.myPush(undefined));
console.log(arr.myPush(+0));
console.log(arr);*/

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};