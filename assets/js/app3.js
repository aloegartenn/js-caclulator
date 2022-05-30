let b = "mexican";

let a = {
    name : "Yarik",
    age : 19,
    [b + " dronovhui"]: 12, 
};
Object.assign(a, {dick : "small"});
if('age' in a ){
    console.log(a.age)
}
delete(a.name)
console.log(a)