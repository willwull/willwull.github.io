main();
function main() {
  updateHeaderText();
}


/**
 * updateHeaderText
 * Updates the text in the header and makes it looks like it's written
 * in real time sort of.
 */
function updateHeaderText() {
  let texts = ["programming.", "cliché headers.", "web dev.", "a lot of stuff."];
  let i = 0;
  let headerInterval = setInterval(() => {
    let caret = document.getElementById("header-caret");

    if (i < texts.length) {
      let text = document.getElementById("header-interest");
      text.textContent = "";

      let t = texts[i];
      let j = 0;
      let letterInterval = setInterval(() => {
        if (j < t.length) {
          text.textContent += t[j];
          j++;
        } else {
          clearInterval(letterInterval);
        }
      }, 80);
      i++;
    } else {
      // stop the interval once all texts have been shown
      clearInterval(headerInterval);
      caret.classList.add("nodisplay");
    }
  }, 3000);
}
