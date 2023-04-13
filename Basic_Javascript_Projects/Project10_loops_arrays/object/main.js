let hockeyPlayer = {
    name: "Wayne Gretzky",
    age: 60,
    team: "Edmonton Oilers",
    position: "Forward",
    country: "Canada",
    achievements: ["NHL All-Time Leading Scorer", "4-time Stanley Cup Champion"],
    sayHello: function() {
      return "Hi, I'm " + this.name + " and I played for the " + this.team + " in the NHL.";
    }
  };
  
  // Accessing object properties
  console.log(hockeyPlayer.name); // Output: "Wayne Gretzky"
  console.log(hockeyPlayer.team); // Output: "Edmonton Oilers"
  
  // Calling object method
  console.log(hockeyPlayer.sayHello()); // Output: "Hi, I'm Wayne Gretzky and I played for the Edmonton Oilers in the NHL."
  
  // Displaying object properties in HTML
  document.getElementById("output").innerHTML = "Hockey Player: " + hockeyPlayer.name + "<br>" +
                                               "Team: " + hockeyPlayer.team + "<br>" +
                                               "Achievements: " + hockeyPlayer.achievements.join(", ");
  