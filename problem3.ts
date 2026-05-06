// Task 3: The "Safe" Data Fetcher
// Concepts: Optional Chaining (?.), Nullish Coalescing (??)
// MEDIUM
// Scenario: API responses can be unpredictable. You need to safely access a deep
// property without causing a crash.
// type UserResponse = {
//     info?: {
//         address?: {
//             zipCode?: string;
//         }
//     }
// };
// Instructions:
// • 
// • 
// Write a function 
// getZipCode that reaches deep into the object.
// If any part of the path is missing, or if the zipCode is null/undefined, return 
// "00000".
// Hint: Chain 
// ?. for every level and end with 
// ?? "00000"

type UserResponse = {
    info?: {
        address?: {
            zipCode?: string ;
        }
    }
};

const getZipCode=(code:UserResponse):string=>{
     return code?.info?.address?.zipCode??'00000';
}

const userresponse:UserResponse={
    info: {
        address: {
            zipCode: '7000'
        }
    }
}

console.log(getZipCode({info:{address:{}}}));