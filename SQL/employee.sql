CREATE TABLE employee (
  EmployeeID int(10) PRIMARY KEY,
  EmployeeName varchar(25),
  EmployeeDOB int(8),
  Designation varchar(50)L,
  Mobile int(10),
  Email varchar(50),
) 

ALTER TABLE employee ADD COLUMN Address varchar(255);

INSERT INTO `employee` (`EmployeeID`, `EmployeeName`, `EmployeeDOB`, `Designation`, `Mobile`, `Email`, `Address`) VALUES
(101, 'Ram', '10-05-2002', 'Software Developer', 7854632145, 'ram@gmail.com','chennai'),
(102, 'rajesh', '09-06-2003', 'Manager',  8945424025, 'rajesh@gmail.com','cuddalore'),
(103, 'Prem', '12-07-2002', 'Software developer', 7895462135, 'prem07@gmail.com', 'thiruvanamalai'),
(104, 'Ragul', '31-03-2002', 'Tester', 8925315101, 'ragul074@gmail.com', 'pondicherry'),
(105, 'Murali', '05-07-2002', 'Tester', 123456899, 'murali_07@gmail.com', 'tiruvelveli');



CREATE TABLE department (
  DepartmentID int(10),
  DepartmentName varchar(20),
  EmployeeID int(10),
   FOREIGN KEY (EmployeeID) REFERENCES employee(EmployeeID)
);


INSERT INTO `department` (`DepartmentID`, `DepartmentName`, `EmployeeID`) VALUES
(201, 'Development', 101),
(202, 'Testing', 102),
(203, 'Planning', 103),
(204, 'Support', 104);


--left joim
SELECT * FROM employee LEFT JOIN department ON employee.EmployeeID = department.EmployeeID;


-- RIGHT JOIN
SELECT * FROM employee RIGHT JOIN department ON employee.EmployeeID = department.EmployeeID;


-- INNER JOIN
SELECT * FROM employee INNER JOIN department ON employee.EmployeeID = department.EmployeeID;