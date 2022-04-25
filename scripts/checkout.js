// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
function added(am){
    let a =document.getElementById("amount").value;
let money=0;
money =money+a;
localStorage.setItem("amount",JSON.stringify(money));
let arr=JSON.parse(localStorage.getItem("amount"));
// return arr
console.log(arr)
let y= document.getElementById("wallet");

y.innerText=arr;

}