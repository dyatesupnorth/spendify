const add = (a,b) => {
    return a+b;
}

console.log(add(55,1,1001));

const user = {
    name: 'David',
    cities: ['Manchester', 'Oxford', 'Kirkwall'],
    printPlacesLived(){
        
        return this.cities.map((city) => this.name + ' has lived in ' + city)
            
        
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers : [1,4545,6,7,5,78,78,89,8,5,65],
    multiplyBy: 164558,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    },


}
console.log(multiplier.multiply(3));