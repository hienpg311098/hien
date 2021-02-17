var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};

function getObjectKey(obj, keys) {
  // Write code here...
  var keys = [];
  for (var i in obj){
      keys.push(i);
      console.log(i);
      if (typeof(obj[i]) === typeof(obj)){
      getObjectKey(obj[i]);
      }
  }
  return keys;
}
getObjectKey(apartment);