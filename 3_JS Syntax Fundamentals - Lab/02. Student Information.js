function students(...arr) {
  const [name, age, grade] = arr;
  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

students("John", 15, 5.54678);
