// Task 1: The "Optional" Shopping Cart
// Concepts: Destructuring, Optional Properties, Default Values
// EASY
// Scenario: You are building a checkout system. Users might buy one item by default,
// or specify a bulk quantity.
// type CartItem = {
//     name: string;
//     price: number;
//     quantity?: number;
// };
// Instructions:
// • 
// • 
// • 
// Write a function 
// calculateTotal that takes a 
// Use Destructuring to extract properties.
// If 
// CartItem object.
// quantity is missing, ensure the calculation treats it as 
// • 
// Return the total cost (
// price * quantity).
// Hint: Set a default value during destructuring: 
// 1.
// { quantity = 1 } = item

  type CartItem={
       name:string;
       price:number;
       quantity?:number;
  }

   const calculateTotal=(total:CartItem)=>{
            const {quantity=1,price}=total;
            const result=quantity*price
            return result
   }
        
    console.log(calculateTotal({
        name:'biskut',
        price:200,
        quantity:5
        }
        ));