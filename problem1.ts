

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