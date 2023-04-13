// Utilizing the break statement
let i;
let output = "";
for (i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // break the loop when i equals 6
  }
  output += i + " ";
}
document.getElementById("output").innerHTML = "Break Statement: " + output;

// Utilizing the continue statement
output = "";
for (i = 1; i <= 10; i++) {
  if (i === 3 || i === 7) {
    continue; // skip iteration when i equals 3 or 7
  }
  output += i + " ";
}
document.getElementById("output").innerHTML += "<br>Continue Statement: " + output;