console.log('ok');
$(document).ready(function () {
  const myArray= [1,2,3,4,5,6,7,8,9];

  const newArray = myFunction (myArray,3,5)
  console.log(newArray);
  FILTER
  const myFunction = (array,a,b) => {
    const arrayFiltered = array.filter((element, index, array) =>{
      return index >=a &&index<= b
    });
    return arrayFiltered
  };
  console.log(myFunction(myArray,2,3));

  //SLICE
  // const myFunction2 = (array,a,b) =>{
  //   const newArray2 = array.slice(a,b+1)
  //   return newArray2
  // }

  // const myFunction = (array,a,b) => {
  //   let arrayFiltered = [];
  //   for (var i = 0; i < array.length; i++) {
  //     if (i >= a && i <=b) {
  //       arrayFiltered.push(array[i])
  //     }
  //   }
  // } return arrayFiltered

});
