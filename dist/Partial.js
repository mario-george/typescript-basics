"use strict";
function createCourseGoals(data) {
    const { title, description, completeUntil } = data;
    const cGoal = {};
    cGoal.title = title;
    cGoal.description = description;
    cGoal.completeUntil = completeUntil;
    // we cant  make this empty if we want to add partial properties make Partial<DataType> and do type casting as the end
    // the partial makes all the properties optional
    return cGoal;
}
// Partial and Readonly is utility generic types
// const users :Readonly<string[]>=["userr1","user2"]
const users = ["userr1", "user2"];
// if i want to make it read only
// users.push("user3")
// users.pop()
console.log(users);
console.log(createCourseGoals({
    title: "Course",
    description: "Course",
    completeUntil: new Date(),
}));
//# sourceMappingURL=Partial.js.map