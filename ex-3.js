//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
lightBulbStatus === "Off" ? (lightBulbStatus = "Light blub is off.") : lightBulbStatus === "On"?(lightBulbStatus = "Light blub is On.") : (lightBulbStatus = "Please choose the correct input (On/Off)");

console.log(lightBulbStatus);