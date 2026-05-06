// Task 2: Merging User Profiles
// Concepts: Intersection Types (&)
// Scenario: A user signs up as a basic 
// JobDetails. An 
// Employee is a union of both.
// type Person = { name: string; age: number };
// type JobDetails = { role: string; salary: number };
// Instructions:
// • 
// • 
// • 
// Create a new type 
// Write a function 
// Return a string: 
// Hint: Use the 
// Employee that combines 
// getProfile that accepts an 
// "Name: [name], Role: [role]".
// & operator to merge the two types

type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type JobHolder=Person & JobDetails;

const employeeDetails=(employee:JobHolder):string=>{
            const {name,role}=employee;
            return `Name=${name},Role:${role}`
}

const employeeDetail:JobHolder={
    name:'Kader vai',
    age:32,
    role:'Manager',
    salary:40000
}
console.log(employeeDetails(employeeDetail));
