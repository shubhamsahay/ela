// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
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

/////////////////////////////////////////////
let id;
let movies_div=document.getElementById('movies');

async function searchMovies(){
    try{
        const search=document.getElementById('search').value;
        const res= await fetch(`http://www.omdbapi.com/?s=${search}&apikey=e09994e1`);
        const data= await res.json();
        // append(data.items);
        const movies=data.search;
        return movies
    }catch(err){
         console.log("err:",err);
    }
}

function appendMovies(data){
    movies_div.innerHTML=null;
    data.forEach(function(el){
        let image =document.createElement('img');
        image.src=el.Poster;
        let p=document.createElement('p');
        p.innerText=el.Title;
        let btn=document.createElement('button')
        btn.innerText="Book Now";

        movies_div.append(p);
    });
}

async function main(){
    let data=await searchMovies();
    if(data===undefined){
        return false
    }

    appendMovies(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func();
    },delay);
}