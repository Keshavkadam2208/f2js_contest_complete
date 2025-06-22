/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee) => {
    if(employee.profession === "developer")
    {
      console.log(employee)
    }
  });
}
function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.map((employee) => {
    if(employee.profession === "developer")
    {
      console.log(employee)
    }
  });
}


function addData() {
  //Write your code here, just console.log
  const newEmployee = {
      id: 7,
      name: "keshav",
      age:"23",
      profession: "software developer",
      };
     arr.push(newEmployee);
     console.log(arr);

  }
  


function removeAdmin() {
  //Write your code here, just console.log
  const filterdArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(filterdArr);
}


function concatenateArray() {
  //Write your code here, just console.log
   const newEmployees = [
    { id: 5, name: "alice", age: "22", profession: "designer" },
    { id: 6, name: "bob", age: "25", profession: "manager" },
    // { id: 7, name: "eve", age: "21", profession: "developer" },
    {id: 8, name: "lisa", age: "26", profession: "manager"}
  ];
  const combined = arr.concat(newEmployees);
  console.log(combined);
}

