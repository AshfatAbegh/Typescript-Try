let age:number=50;
let club:string="Barcelona";
const isFamous: boolean = false;

function add(num1:number, num2:number){
         return num1 + num2;
}
add(2,3);
function fullName(firstName:string, lastName:string):string{
    return firstName+ ' '+lastName;
}
const user = fullName('Martin','Rock');
console.log(user);

let multiply2:(x:number, y:number)=> number;
multiply = (x,y) => x*y;

const multiply=(x:number, y:number):number=>x*y;
console.log(multiply(20,6));

const numbers: number[] = [,2,3,5,6,54];
numbers.push(52135);

const friends = [Auyaf,Sajid,Gull];

