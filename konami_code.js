const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', konamiHandler);

  let index = 0;
  function konamiHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Code entered!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
