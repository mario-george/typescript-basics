interface CourseGoals {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoals(data: {
  title: string;
  description: string;
  completeUntil: Date;
}): CourseGoals {
  const { title, description, completeUntil } = data;
  const cGoal: Partial<CourseGoals> = {};
  cGoal.title = title;
  cGoal.description = description;
  cGoal.completeUntil = completeUntil;
  // we cant  make this empty if we want to add partial properties make Partial<DataType> and do type casting as the end
  // the partial makes all the properties optional
  return cGoal as CourseGoals;
}
// Partial and Readonly is utility generic types
// const users :Readonly<string[]>=["userr1","user2"]
const users: Readonly<Array<string>> = ["userr1", "user2"];
// if i want to make it read only
// users.push("user3")
// users.pop()
console.log(users);
console.log(
  createCourseGoals({
    title: "Course",
    description: "Course",
    completeUntil: new Date(),
  })
);
