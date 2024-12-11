

const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quote_btn");
const tweetBtn = document.querySelector(".tweet_btn");

const apiLink = "https://quotes-api-self.vercel.app/quote";

// global variable
let temp;

// API Call ---> async and await
const getData = async () => {
    const response = await fetch(apiLink);
    const data = await response.json();
    
    quote.innerText = data.quote;
    author.innerText = data.author;
    temp = data.quote;
    console.log(temp);  // Corrected
};

getData();

newQuote.addEventListener("click", () => {
    getData();
});

tweetBtn.addEventListener("click", () => {
    window.open("https://twitter.com/intent/tweet?text= " +encodeURIComponent( temp),  "tweet post" , "width = 400 ","heiht=400"); // Corrected
});
