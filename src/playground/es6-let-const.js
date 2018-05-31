var nameVar = 'David';
var nameVar = 'Maeson';
console.log('nameVar', nameVar);

let nameLet = 'Erin'
console.log(nameLet);


const nameConst = "Ethan";
console.log('nameConst', nameConst);

//Block scoping

var fullName = "David Yates";

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log('firstName: ', firstName);
    
}
console.log(firstName);