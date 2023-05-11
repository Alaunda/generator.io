var allQuotes=[
    "I'm proud of you.",
    
    "The journey doesn't end just because you have to put things down...keep going!",
    
    "You are capable of doing difficult things and making difficult choices if it's for your betterment. Trust you.",
    
    "It is okay to rest! Remember: procrastination isn't rest.",
    
    "No rain, no flowers. All the bad is preparing you for all the good.",
    
    "You have an amazing smile.",
    
    "You are beautiful.",
    
    "You're incredibly smart!",
    
    "Your brighten the room just by entering it.",
    
    "You find the best of every situation.",
    
    "You are perfect just the way you are.",
    
    "You are not a mistake.",
    
    "The world is a better place with you in it.",
    
    "I appreciate and value your existence.",
    
    "You give and remind me of hope.",
    
    "Thank you for being alive.",
    
    "The world is tough enough, be nice to yourself.",
    
    "You deserve the love you give your best friend.",
    
    "People love spending time with you!",
    
    "You are loved.",
    
    "I'd give you my last piece of gum.",
    
    "Experiencing your energy has always been my faorite thing.",
    
    "You are the Universe.",
    
    "Thank you for being you.",
    
    "I admire your confidence!",
    
    "You are perfect the way you are."
  ]
  
  function newphrase(){
    var randomNumber=Math.floor(Math.random()*(allQuotes.length));  document.getElementById('kindnessDisplay').innerHTML=quotes[randomNumber];
  }