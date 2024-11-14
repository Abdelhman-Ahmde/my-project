var qoute = [
    {
        qoute: "Do not take life too seriously. You will not get out alive.",
        Auther: "--Elbert Hubbard"
    },
    {
        qoute: "The best revenge is massive success.",
        Auther: "--Frank Sinatra"
    },
    {
        qoute: "You miss 100% of the shots you don't take.",
        Auther: "--Wayne Gretzky"
    },
    {
        qoute: "Life is what happens when you're busy making other plans.",
        Auther: "--John Lennon"
    },
    {
        qoute: "Get busy living or get busy dying.",
        Auther: "--Stephen King"
    },
    {
        qoute: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        Auther: "--Winston Churchill"
    },
    {
        qoute: "Believe you can and you're halfway there.",
        Auther: "--Theodore Roosevelt"
    },
    {
        qoute: "The only impossible journey is the one you never begin.",
        Auther: "--Tony Robbins"
    },
    {
        qoute: "Life is either a daring adventure or nothing at all.",
        Auther: "--Helen Keller"
    },
    {
        qoute: "Your time is limited, so don't waste it living someone else's life.",
        Auther: "--Steve Jobs"
    }
];
var lastIndex = -1;
function getQoutes() {
    var num;
    do {
        num = Math.floor(Math.random() * qoute.length);
    } while (num === lastIndex);
    lastIndex = num;
    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;
}
