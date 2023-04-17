function getMountainInfo() {
    // Get input value
    let peakName = document.getElementById("peakInput").value;
    var outputDisplay;
    // Define switch statement
    switch (peakName) {
      case "Mount Robson":
        outputDisplay = "Mount Robson is the highest peak in the Canadian Rockies, located in eastern British Columbia.";
        break;
      case "Mount Columbia":
        outputDisplay = "Mount Columbia is the highest peak in Alberta and British Columbia, located in the Canadian Rockies.";
        break;
      case "Mount Waddington":
        outputDisplay = "Mount Waddington is the highest peak in British Columbia, located in the Coast Mountains.";
        break;
      default:
        outputDisplay = "Mountain peak information not found.";
        break;
    }
    document.getElementById("output").innerHTML = outputDisplay;
  }