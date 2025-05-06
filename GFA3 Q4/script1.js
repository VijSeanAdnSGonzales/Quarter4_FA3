function generateShape() {
  const outputDiv = document.getElementById("output");
  let value;
  
  while (true) {
    value = document.getElementById("numberInput").value;
    if (!isNaN(value) && value.trim() !== "") {
      value = parseInt(value);
      break;
    } else {
      alert("Please enter a valid number.");
      return;
    }
  }

  let output = `<p>Number inputted: ${value}</p>`;
  if (value % 2 !== 0) {
    for (let i = value; i >= 1; i--) {
      output += "<p>" + Array(value).fill(i).join(" ") + "</p>";
    }
  } else {
    for (let i = value; i >= 1; i--) {
      output += "<p>" + Array(i).fill(i).join(" ") + "</p>";
    }
  }

  outputDiv.innerHTML = output;
}
