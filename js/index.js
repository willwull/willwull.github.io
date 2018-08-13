window.addEventListener("load", () => {
  updateHeaderText();
});

/**
 * updateHeaderText
 * Updates the text in the header and makes it looks like it's written
 * in real time sort of.
 */
function updateHeaderText() {
  const texts = [
    "graphic design.",
    "programming.",
    "making cliché headers.",
    "web development.",
    "doing a lot of stuff."
  ];
  const target = document.getElementById("header-interest");
  const caret = document.getElementById("header-caret");
  let textIndex = 0;
  let charIndex = 0;
  const extraCycles = 25;
  let hasSelected = false;
  let charHasCleared = false;
  const updateInterval = setInterval(() => {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].length + extraCycles) {
        if (!hasSelected) {
          // "select" text on first cycle
          target.classList.add("selected-text");
          hasSelected = true;
        } else if (!charHasCleared) {
          // clear text on second cycle
          target.textContent = "";
          target.classList.remove("selected-text");
          charHasCleared = true;
        } else {
          if (charIndex < texts[textIndex].length) {
            target.textContent += texts[textIndex][charIndex];
          }
          charIndex++;
        }
      } else {
        textIndex++;

        // reset stuff
        hasSelected = false;
        charHasCleared = false;
        charIndex = 0;
      }
    } else {
      // stop interval and remove caret
      clearInterval(updateInterval);
      caret.classList.remove("caret-anim");
      caret.classList.add("opacity0");
    }
  }, 80);
}
