var quotes = [
  "Be yourself; everyone else is already taken.",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "A room without books is like a body without a soul.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
];

var lastIdx = -1;
function showRandomQuote() {
  var randomIdx = Math.floor(Math.random() * quotes.length);

  if (randomIdx === lastIdx) {
    randomIdx = (randomIdx + 1) % quotes.length;
  }

  lastIdx = randomIdx;
  document.getElementById("quote").innerHTML = quotes[randomIdx];
}
