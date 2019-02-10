var quotes = [
    {
      quote: 'Controlling complexity is the essence of computer programming.',
      source: 'Brian Kernigan',
      year: '1976',
      citation: 'Software Tools, p. 319'
    },
    {
      quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
      source: 'Anonymous'
    },
    {
      quote: 'If debugging is the process of removing bugs, then programming must be the process of putting them in.',
      source: 'Edsger W. Dijkstra'
    },
    {
      quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
      source: 'John F. Woods',
      year: '1991',
      citation: 'Google Groups'
    },
    {
      quote: 'The function of good software is to make the complex appear to be simple.',
      source: 'Grady Booch',
      year: '2010',
      citation: 'Frank H. P. Fitzek et al. Qt for Symbian. p. xv'
    },
    {
      quote: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
      source: 'Bill Gates'
    },
    {
      quote: 'A different error message! Finally some progress!',
      source: 'bakablah (username)',
      year: '2016',
      citation: 'Devrant.com'
    }
];

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * Math.floor(quotes.length));
  return quotes[randomNumber];
}

function printQuote() {
  var randomQuote = getRandomQuote();
  var stringOfQuoteProperties = '';
  stringOfQuoteProperties += '<p class="quote">' + randomQuote.quote + '</p>';
  stringOfQuoteProperties += '<p class="source">' + randomQuote.source;
  if(randomQuote.citation && randomQuote.citation !== '') {
    stringOfQuoteProperties += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if(randomQuote.year && randomQuote.year !== '') {
    stringOfQuoteProperties += '<span class="year">' + randomQuote.year + '</span>';
  }
  stringOfQuoteProperties += '</p>';
  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}

setInterval(printQuote,10000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
