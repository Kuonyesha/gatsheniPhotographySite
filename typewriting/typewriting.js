const typewriter = document.getElementById("typewriter");
const text = ["Photography", "Cinematography", "Video Editing"];
// typewriter.textContent = "";

let typeEffect = 0;
let deleteEffect = 0;
const type = () => {
  const currentWord = text[typeEffect];

  if (deleteEffect < currentWord.length) {
    typewriter.textContent += currentWord[deleteEffect];
    deleteEffect++;
    setTimeout(type, 280);
  } else {
    typewriter.textContent = "";
    typeEffect = (typeEffect + 1) % text.length;
    deleteEffect = 0;
    setTimeout(type, 1000);
  }
};

type();
