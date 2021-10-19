///////////////////////////////////////// Exe 1
class Student{
    firstName;
    lastName;
    gradesAvrage;
    age;
    constructor(f,l,g,a){
    this.firstName = f
    this.lastName = l
    this.gradesAvrage = g
    this.age = a
    }
}
const stud = new Student("shay","black",69.7,24)
const stud2 = new Student("haim","chakol",70.7,28)
const stud3 = new Student("izhak","baruch",80.7,30)
let arrayStudent = []
arrayStudent.push(stud,stud2,stud3)
///////////////////////////////////////// Exe 2
let map = new Map()
arrayStudent.forEach(itemStudent => {
    map.set(itemStudent.firstName,itemStudent)
});
console.log(map);
///////////////////////////////////////// Exe 3
map.forEach(item =>{
 document.body.innerHTML += `<div id="${item.firstName}" class="div"style="width:200px;height:200px;background:pink;margin:2px;">${item.firstName}</div>`
})

///////////////////////////////////////// Exe 4
let claasArray = document.getElementsByClassName("div")
for (let i = 0; i < claasArray.length; i++) {
       claasArray[i].onmouseover = ()=>{
       claasArray[i].innerHTML += map.get(claasArray[i].id).lastName + map.get(claasArray[i].id).age + map.get(claasArray[i].id).gradesAvrage
       claasArray[i].style.width = "300px" 
       claasArray[i].style.height = "300px"
    //    console.log(map.get(claasArray[i].id));
    } 
       claasArray[i].onmouseout = ()=>{
       claasArray[i].innerHTML = claasArray[i].id 
       claasArray[i].style.width = "200px" 
       claasArray[i].style.height = "200px" 
       }
}
///////////////////////////////////////// Exe 5
// for (let i = 0; i < claasArray.length; i++) {
//      claasArray[i].onmouseover = ()=>{
//      claasArray[i].innerHTML = ``
//      }
    
// }

