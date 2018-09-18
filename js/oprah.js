// load json file
$(document).ready(function() {
  $.getJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/words/oprah_quotes.json", gotQuotes);
});

// calls tweet() when "Tweet Quote" button is clicked
$("#tweetQuote").on("click", tweet);

// pull a quote from json file, populate quote/author <p>
function gotQuotes(json) {
  $("#getQuote").on("click", function() {
    var index = Math.floor(Math.random() * json.oprahQuotes.length);
    $("#quote").html(json.oprahQuotes[index]);
    $("#author").html("Oprah Winfrey");
  });
  
  // calls tweet() when "Tweet Quote" button is clicked
  $("#tweetQuote").on("click", function() {
    let text = shortQuote($("#quote").html());
    console.log(text);
    window.open("https://twitter.com/intent/tweet?text=" + text + ";hashtags=OprahQuotes");
};

/* use truncate string algorithm I wrote for freeCodeCamp
   to shorten quote for Twitter (140 chars), accounts for
   OprahQuotes hashtag
*/
function shortQuote(quote) {
  if(quote.length>124) {
    quote = quote.slice(0,124);
    return quote + "...";
  } else return quote;
};
