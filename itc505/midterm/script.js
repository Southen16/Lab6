const storyStages = {
  start: {
    text: "You, Detective Athreya, are called to the scene of a murder at the grand mansion. The victim is the wealthy business tycoon, Mr. Vyas Patel    . Your investigation begins...",
    choices: ["Examine crime scene", "Interview the staff"],
    consequences: ["A", "mysteriou"],
    image: "1.jpeg",
  },
  A: {
    text: "At the crime scene, you found...",
    choices: [" A bloody Knife ", " A mystery note"],
    consequences: ["investigateFingerprints", "continueExploring1"],
    image: "2.jpeg",
  },
  mysteriou: {
    text: "You are about to interview the mansion's staff and others....",
    choices: ["Confront the nervous staff", "Question His Personal assistance"],
    consequences: ["enterCave", "continueMountains"],
    image: "interview.jpeg",
  },
  investigateFingerprints: {
    text: "You found a knife with blood stains and fingerprints on it. What will you do?",
    choices: [
      "Examine the fingerprints on the knife",
      "Examine the other locations where the knife was discovered to detect additional fingerprints.",
    ],
    consequences: ["befriendDog", "c"],
    image: "3.webp",
  },
  continueExploring1: {
    text: "You Found a note......",
    choices: [
      "Read the note and come to the conclusion",
      "Verify the handwriting and come to a conclusion",
    ],
    consequences: ["conclusion", "conclusion1"],
    image: "notes.jpeg",
  },

  conclusion: {
    text: "The note is sucide note ",
    choices: [],
    consequences: [],
    image: "sucide.jpeg",
  },

  conclusion1: {
    text: "The handwritting in sucide note is not  by tycoon ",
    choices: [],
    consequences: [],
    image: "sucide.jpeg",
  },

  c: {
    text: "The fingerprints match those of the suspect. You've found a crucial clue in the investigation.",
    choices: [],
    consequences: [],
    image: "finger.jpeg",
  },
  enterCave: {
    text: "The staff provides all types of answers to your questions..... ",
    choices: [
      "You have a doubt on the mansion staff,",
      "You have a doubt on his PA,",
    ],
    consequences: ["scareBear", "exitQuietly"],
    image: "mansion.jpeg",
  },
  continueMountains: {
    text: "You are asking his PA questions...",
    choices: ["He says I am not guilty", "He pleads that he is guilty"],
    consequences: ["s", "s1"],
    image: "pa.webp",
  },
  s: {
    text: "No, he is the culprit",
    choices: [],
    consequences: [],
    image: "culprit.jpeg",
  },
  s1: {
    text: "Congrats, he is the culprit with fingerprints on the knife",
    choices: [],
    consequences: [],
    image: "guilty.jpeg",
  },
  befriendDog: {
    text: "The fingerprints match those of the suspect. You've found a crucial clue in the investigation.",
    choices: [],
    consequences: [],
    image: "4.jpeg",
  },
  scareBear: {
    text: "Your expectation is right, the killer is his PA",
    choices: [],
    consequences: [],
    image: "killer.jpeg",
  },
  exitQuietly: {
    text: "Go back to the last step",
    choices: [],
    consequences: [],
    image: "killer.jpeg",
  },
};

function startGame() {
  currentStage = "start";
  updatePage();
}

function updatePage() {
  const stage = storyStages[currentStage];
  document.getElementById("story-text").textContent = stage.text;
  document.getElementById("choices").innerHTML = "";

  for (let i = 0; i < stage.choices.length; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = stage.choices[i];
    choiceButton.addEventListener("click", () => makeChoice(i));
    document.getElementById("choices").appendChild(choiceButton);
  }

  document.getElementById("story-image").src = stage.image;
}

function makeChoice(choiceIndex) {
  const stage = storyStages[currentStage];
  const nextStage = stage.consequences[choiceIndex];
  currentStage = nextStage;
  updatePage();

  if (storyStages[nextStage].choices.length === 0) {
    endGame();
  }
}

function endGame() {
  const stage = storyStages[currentStage];
  document.getElementById("story-text").textContent = stage.text;
  document.getElementById("choices").innerHTML = "";
  document.getElementById("story-image").src = stage.image;
}

let currentStage;
startGame();
