// Store the wallet amount to your local storage with key "amount"
function addAmount()
{
let am=Number(document.querySelector("#amount").value);
let total=Number(localStorage.getItem("amount"));
total=total+am;
localStorage.setItem("amount",total);
document.querySelector("#wallet").innerText=total;
}