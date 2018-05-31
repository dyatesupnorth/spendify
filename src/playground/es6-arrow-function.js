const square = function (x){
    
    return x* x;
}

console.log('square: ', square);

// const squareArrow = (x) => {
    
//     return x * x;
// }
const squareArrow = (x) => x * x;

console.log(squareArrow(4));
const firstName = (fullName) => fullName.split(' ')[0];
   
console.log(firstName('Dave Yates'));