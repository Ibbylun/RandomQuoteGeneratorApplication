// event listener to respond to "Show another quote" button clicks

/*

button.addEventListener('click',);

*/


// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//object of quotes, sources, citations and years
var quoteSource = [{
    quote:'The best preparation for tomorrow is doing your best today.',source:'H. Jackson Brown, Jr.',citation:'',year:''
}, {
    quote:'We must let go of the life we have planned, so as to accept the one that is waiting for us.',source:'Joseph Campbell',citation:'',year:'' 
}, {
    quote:'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.',source:'Jimmy Dean',citation:'',year:''
}, {
    quote:'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',source:'Hellen Keller',citation:'',year:''
}, {
    quote:'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you\'ll know when you find it.',source:'Steve Jobs',citation:'',year:''
}];

//Grabbing HTML Elements
var button = document.getElementById('loadQuote'),
    quote = document.getElementById('quote'),
    author = document.getElementById('source');