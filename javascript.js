const quoteGen= function (){
  const quotes=[
    {quote: "I'm proud of you."},
    
    {quote:"The journey doesn't end just because you have to put things down...keep going!"},
    
    {quote:"You are capable of doing difficult things and making difficult choices if it's for your betterment. Trust you."},
    
    {quote:"It is okay to rest! Remember: procrastination isn't rest."},
    
    {quote:"No rain, no flowers. All the bad is preparing you for all the good."},
    
    {quote:"You have an amazing smile."},
    
    {quote:"You are beautiful."},
    
    {quote:"You're incredibly smart!"},
    
    {quote:"Your brighten the room just by entering it."},
    
    {quote:"You find the best of every situation."},
    
    {quote:"You are perfect just the way you are."},
    
    {quote:"You are not a mistake."},
    
    {quote:"The world is a better place with you in it."},
    
    {quote:"I appreciate and value your existence."},
    
    {quote:"You give and remind me of hope."},
    
    {quote:"Thank you for being alive."},
    
    {quote:"The world is tough enough, be nice to yourself."},
    
    {quote:"You deserve the love you give your best friend."},
    
    {quote:"People love spending time with you!"},
    
    {quote:"You are loved."},
    
    {quote:"I'd give you my last piece of gum."},
    
    {quote:"Experiencing your energy has always been my faorite thing."},
    
    {quote:"You are the Universe."},
    
    {quote:"Thank you for being you."},
    
    {quote:"I admire your confidence!"},
    
    {quote:"You are perfect the way you are."}
]; 
let arrayIndex= Math.floor(Math.random()*quotes.length);
  
document.getElementById("quotes").innerHTML=quotes[arrayIndex].quote;
}

window.onload= function (){
  quoteGen();
  document.getElementById("button").addEventListener('click',quoteGen);
}
