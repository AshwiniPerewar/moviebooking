// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let total=Number(localStorage.getItem("amount"));
document.querySelector("#wallet").innerText=total;



// debounce function
let id;
function debounce(func,delay)
{
  if(id)
  {
      clearTimeout(id);
  }
  id=setTimeout(function()
  {
      func();
  },delay)
}

// main function

async function main()
{
    let data=await(searchMovies());
    if(data==undefined)
    {
        return false;
    }
    else{
        console.log(data);
        append(data);
    }
}


// function to search movies
async function searchMovies()
{
    try{
    let movie=document.querySelector("#search").value;
    let res=await(fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f766b134&s=${movie}`));

    const name=await(res.json());
   return (name.Search);
    }
    catch(err)
    {
        console.log(err);
    }


}


function append(data)
{
    data.forEach(function(el)
    {
        let box=document.createElement("div");
        let image=document.createElement("img");
        let name=document.createElement("p");
        let btn=document.createElement("button");


        image.src=el.Poster;
        name.innerText=el.Title;
        btn.innerText="Book Now";
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function()
        {
            let data={
                name:el.Title,
                image:el.Poster
            }
            localStorage.setItem("movie",JSON.stringify(data));
            window.location.href="checkout.html";
        })

        box.append(image,name,btn);

        document.querySelector("#movies").append(box);

    })
}
