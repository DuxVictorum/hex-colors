import colors from "./colors.js";

// Nothing like a good ol' IFEE to get the ball rolling
(function () {
  const bg = document.getElementById("body");
  const colorSelect = document.getElementById("colorSelect");
  const colorButton = document.getElementById("colorButton");
  let method;

  // Main function to change background color
  function changeColor(method) {
    if (method === "keyword") {
      // Method #1: Color keyword randomly chosen from array
      let randNum = Math.floor(Math.random() * colors.length);
      let randColorKeyword = colors[randNum];
      bg.style.backgroundColor = randColorKeyword;
      document.getElementById("color").innerHTML =
        "Currently displaying color: <span id='color2'></span>";
      document.getElementById("color2").innerText = randColorKeyword;
    } else if (method === "hexcode") {
      // Method #2: Hexadecimal color code generated at random
      let randHexNum = Math.floor(Math.random() * (0xffffff + 1))
        .toString(16)
        .padStart(6, "0");
      let hexColor = "#" + randHexNum;
      bg.style.backgroundColor = hexColor;
      document.getElementById("color").innerHTML =
        "Currently displaying color: <span id='color2'></span>";
      document.getElementById("color2").innerText = hexColor;
    } else if (method === "rgb") {
      // Method #3: RGB color (hexColor gets converted into RGB automatically once inserted into backgroundColor)
      let randHexNum = Math.floor(Math.random() * (0xffffff + 1))
        .toString(16)
        .padStart(6, "0");
      let hexColor = "#" + randHexNum;
      bg.style.backgroundColor = hexColor;
      document.getElementById("color").innerHTML =
        "Currently displaying color: <span id='color2'></span>";
      document.getElementById("color2").innerText = bg.style.backgroundColor;
    } else if (method === "hsl") {
      // Method #4: HSL color
      let randHue = Math.floor(Math.random() * 360 + 1);
      let randSat = Math.floor(Math.random() * 100 + 1);
      let randLight = Math.floor(Math.random() * 100 + 1);
      let hslColor =
        "hsl(" + randHue + ", " + randSat + "%, " + randLight + "%)";
      bg.style.backgroundColor = hslColor;
      document.getElementById("color").innerHTML =
        "Currently displaying color: <span id='color2'></span>";
      document.getElementById("color2").innerText = hslColor;
      console.log(bg.style.backgroundColor, hslColor);
    } else {
      // Fallback method if no selection made
      document.getElementById("color").innerText =
        "Please select a method for displaying color.";
    }
  }

  // Setting up the two event listeners
  function setUpListeners() {
    // #1: Drop-down menu to select color display method
    colorSelect.addEventListener("change", e => {
      const { value } = e.target;
      method = value;
      document.getElementById("method").innerText = method;
      changeColor(method);
    });

    // #2: Main button to change background color once the method has already been established
    colorButton.addEventListener("click", e => {
      changeColor(method);
    });
  }

  const init = () => {
    setUpListeners();
  };

  // Let's get this party started!
  init();
})();
