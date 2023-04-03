//
// L10S01 - Arithmetic Operators
//
var a = 0;
var b = 1;
gs.info(a < b);

var n = '3';
var i = 3;
gs.info(n == i); // REALLY?!!
gs.info(i = 4); // WATCH OUT!!!

//My example is below
var a = 25;
var b = 7;
var c = 12;
if (a < b) {
   gs.info ('a is less than b');
}  else if (a > b) {
   gs.info ('a is greater than b');
}  else {
   gs.info ('it looks like a is equal to b');
}
