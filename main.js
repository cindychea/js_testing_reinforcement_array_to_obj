function arrayToObj(A) {
   const obj = {};
   A.forEach(([k,v]) => {
      obj[k] = v;
   })
   return obj
}
module.exports = arrayToObj;

