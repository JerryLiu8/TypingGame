
/*var filename = "/quotes.txt";
var txt;
function start () {
    txt = loadStrings(filename)
}
*/
var quotes = ['"Dogs have Owners, Cats have Staff.""',
'"I do not fear computers. I fear lack of them.” – Isaac Asimov',
'“A computer once beat me at chess, but it was no match for me at kick boxing.” – Emo Philips',
'“Computer Science is no more about computers than astronomy is about telescopes.” – Edsger W. Dijkstra',
'“The computer was born to solve problems that did not exist before.” – Bill Gates',
'“Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.”   – Norman Augustine',
'“Software is a gas; it expands to fill its container.” – Nathan Myhrvold',
'“All parts should go together without forcing.  You must remember that the parts you are reassembling were disassembled by you.  Therefore, if you can’t get them together again, there must be a reason.  By all means, do not use a hammer.”    – IBM Manual, 1925',
'“Standards are always out of date.  That’s what makes them standards.” – Alan Bennett',
'“Physics is the universe’s operating system.”  – Steven R Garman',
'“It’s hardware that makes a machine fast.  It’s software that makes a fast machine slow.” – Craig Bruce']
function randomQuote() {
    //var myrandom = Random.Range(0,myData.Length);
    document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * 11)];
    console.log(txt)
}
