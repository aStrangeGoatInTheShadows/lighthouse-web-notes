const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const filterGrades = gradesToFilter => {
  // make a new place holder array
  let passingGrades = [];
  // Filters values from grades and push to new array
  passingGrades = gradesToFilter.filter(grade => grade >= 70);
  // output array via console
  console.log(passingGrades);
}

filterGrades(grades);