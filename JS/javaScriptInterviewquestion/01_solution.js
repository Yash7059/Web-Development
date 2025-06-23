let Student = ["yash", "monil", "sahil", "priyanshu", "siddharth", "shubham", "sachin", "prashant", "saurabh", "naman"];

let house = []

for (const student of Student) {
    if (Student.length < 6){
        house.push("gryffindor");
    }else if (Student.length < 8) {
        house.push("hufflepuff");   
    }else if (Student.length < 12) {
        house.push("ravenclaw");
    }else {
        house.push("slytherin");
    }
}

console.log(house);