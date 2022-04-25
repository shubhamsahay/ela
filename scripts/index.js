// Store the wallet amount to your local storage with key "amount"
// let am=document.getElementById("add_to_wallet").value;
// let money=0;


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





