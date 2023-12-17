
// var quotes = ['Be yourself; everyone else is already taken.',
//               'Two things are infinite: the universe and human stupidity ; and Im not sure about the universe.',
//               'So many books, so little time.',
//               'A room without books is like a body without a soul.',
//               'You only live once, but if you do it right, once is enough.'];

// var authers = [' Oscar Wilde',
//                'Albert Einstein',
//                'Frank Zappa',
//                'Marcus Tullius Cicero',
//                'Mae West'];

var x = [
            {   quotes: '"Be yourself , everyone else is already taken."',
                authers: ' - Oscar Wilde -' } ,
            {   quotes: '"Two things are infinite: the universe and human stupidity , and Im not sure about the universe."',
                authers: '- Albert Einstein -'} ,
            {   quotes: '"So many books, so little time."',
                authers: '- Frank Zappa -' } ,
            {   quotes: '"A room without books is like a body without a soul."',
                authers: '- Marcus Tullius Cicero -' } ,
            {   quotes: '"You only live once, but if you do it right, once is enough."',
                authers: ' - Mae West -' } ,
            {   quotes:' "Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind." ' ,
                authers: ' - Bernard M. Baruch -'
            } ,
            {   quotes:' "Be the change that you wish to see in the world." ' ,
                authers: ' - Mahatma Gandhi -'
            } ,
            {   quotes: `"Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend" ` ,
                authers: ' - Mahatma Gandhi -'
            } 
        
    ]

function skip(){
    
    var numbers = [];
   
    // var random;
    // do {
    // random= Math.floor(Math.random()*x.length);
    // } while (numbers.includes(random));
    // numbers.push(random);   


    do {
        random= Math.floor(Math.random()*x.length);
    } while (numbers.indexOf(random) !== -1);

    
    // var random = Math.random() ;
    
    // window.document.getElementById('p2').innerHTML=quotes[Math.floor(random * quotes.length )];
    // window.document.getElementById('p3').innerHTML=authers[Math.floor(random * authers.length )];
    
    // window.document.getElementById('p2').innerHTML=x[Math.floor(random * x.length )].quotes;
    // window.document.getElementById('p3').innerHTML=x[Math.floor(random * x.length )].authers;
   
    window.document.getElementById('p2').innerHTML=x[random].quotes;
    window.document.getElementById('p3').innerHTML=x[random].authers;
    
};

