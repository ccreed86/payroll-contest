// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];

  let letsKeepGoing = true;

  while(letsKeepGoing) {
    const firstName = prompt("Enter the employee's fist name:");
    const lastName = prompt("Enter the employee's last name:");
    const salary = prompt("Enter the employee's salary:");


    /*if (isNaN(salary)) {
        alert ('Not a Number!');
    }*/

  // if (isNaN(salary)) { salary = "0"}

  const employee = {
    firstName: firstName,
    lastName: lastName, 
    salary: parseInt(salary), 
  }
  
  employees.push(employee);

  letsKeepGoing = confirm("Add another Employee?");
}
  
return employees;
  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let numEmployees = employeesArray.length;

  for(let index = 0; index < numEmployees; index++){
    totalSalary += employeesArray[index].salary;
  }

  const averageSalary = totalSalary / numEmployees;
 console.log(`The average employee salary between our ${numEmployees} employee(s) is $${averageSalary}`);

}

// Select a random employee
function getRandomEmployee(employeesArray) {
  // TODO: Select and display a random employee 
  //Math.floor(Math.random() * employeeArray.length)
const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]
console.log(`Random Employee: ${randomEmployee["firstName"]} ${randomEmployee["lastName"]} is our winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
