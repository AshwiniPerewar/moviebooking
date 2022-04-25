// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let total=Number(localStorage.getItem("amount"));
document.querySelector("#wallet").innerText=total;


document.querySelector("#confirm").addEventListener("click",function()
{
    let uname=document.querySelector("#user_name").value;
    let no=Number(document.querySelector("#number_of_seats").value);

    let amount=no*100;
    console.log(total,amount,no)


    if(total<amount)
    {
        alert("Insufficient Balance!");
    }
    else{
        alert("Booking Successful!");
        total-=amount;
        localStorage.setItem("amount",total);
        total1=Number(localStorage.getItem("amount"));
        document.querySelector("#wallet").innerText=total;
    }
})
let data=JSON.parse(localStorage.getItem("movie"));
let box=document.createElement("div");
        let image=document.createElement("img");
        let name1=document.createElement("h3");
        

        image.src=data.image;
        name1.innerText=data.name;
        
        box.append(name1,image);

        document.querySelector("#movie").append(box);

    