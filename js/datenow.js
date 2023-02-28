"use strict"
document.getElementById('dateNow')
document.getElementById('dateNow').innerHTML = "m/d/y<br />h:m:s";
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
document.getElementById("dateNow").innerHTML = dateStr
var dateUpdated = new Date("January 10, 2023");
var dustr = dateUpdated.toLocaleDateString()
var diffDays = currentDay.getTime()-dateUpdated.getTime();
var Total = Math.ceil(diffDays / (1000 * 3600 * 24));
var TotalDays = Total - 1;
document.getElementById("dateMod").innerHTML = dustr
document.getElementById("diffDay").innerHTML = TotalDays




