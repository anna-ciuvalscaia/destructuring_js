//////HW1:  Aplicati destructurizarea si/sau spread operator in locul marcat cu "???"
class Order {
    constructor( id, name, cost ){
        this.id   = id;            
        this.name = name;          
        this.cost = cost;          
    }

}

let data = {
    orders: [
        new Order(10,"John", 100.00),
        new Order(11,"Marry", 150.00),
        new Order(12,"Jack", 200.00),
    ]
}


let [client_1, client_2, client_3] = [ data.orders[0].name, data.orders[1].name, data.orders[2].name ] // ???

console.log("Clint 1:",client_1)
console.log("Clint 2:",client_2)
console.log("Clint 3:",client_3)

//###############################################


/// HW: 2
/////  cu ajutorul destructurizarii sa se rescrie codul, 
/////  astfel incat acesta sa ocupe cat mai putine randuri 
///    instructiuni si sa aduca la acelasi rezultat
let a = 10;
let b = 100;
//let c 
console.log("before",a,b);
//c = a
//a = b
//b = c
[a,b]=[b,a];

console.log("after",a,b); 

//###############################################



//HW: 3 ????????
///////Destructurizarea in argumentii functiilor

const processOrder = ( { quantity, price: {amount}, price: {currency} } ) => {

    let cost = quantity * amount
    return cost

 }

 //----------------------------------
 
 const order = {
     quantity: 10,
     price : {
        amount: 100,
        currency: "EUR"
     }

 }
 
//const { quantity, price: {amount}, price: {currency} } = order


 let totalCost = processOrder(order);

//console.log("quantity:",quantity,"amount:", amount,"currency:", currency);

console.log("Total Cost:",totalCost)

//######################