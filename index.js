const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce(function(accumulator, batteries){ return batteries + accumulator},0)













// const reducer = (accumulator, item) => {
//     console.log(accumulator, item)
//     let total = item.price * item.iventory 
//     return accumulator+= total 

// }

// let total = books.reducer(reducer,0)

//.reducer can do more than just math 