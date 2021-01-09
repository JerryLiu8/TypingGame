/*import System.IO;
var fileName = "quotes.txt";
var mydata;
function start () {
     // read from filename
    var sr = new StreamReader(Application.dataPath + "/" + fileName);
    var fileContents = sr.ReadToEnd();
    sr.Close();

     // put data from filename into a variable
    mydata = fileContents.Split("\n"[0]);
}
*/
function randomQuote() {
    //var myrandom = Random.Range(0,myData.Length);
    document.getElementById("quote").innerHTML = "testing";
}
