
/*jslint devel: true */
/*global $, jQuery, alert, element, document*/
var p1score = 1;
var p2score = 2;
var pic1 = "images/dice" + p1score + ".png";
var pic2 = "images/dice" + p2score + ".png";
function potato() {p1score = Math.floor(Math.random() * 6) + 1;
                   p2score = Math.floor(Math.random() * 6) + 1;
                   pic1 = "images/dice" + p1score + ".png";
                   pic2 = "images/dice" + p2score + ".png";
                   document.querySelectorAll("img")[0].setAttribute("src", pic1);
                   document.querySelectorAll("img")[1].setAttribute("src", pic2);
                   if (p1score < p2score) {document.getElementsByClassName("winner")[0].innerHTML = "player one wins!"; } else if (p1score > p2score) {document.getElementsByClassName("winner")[0].innerHTML = "player Two wins!"; } else {document.getElementsByClassName("winner")[0].innerHTML = "Draw!"; }
                  console.log(p1score); }
