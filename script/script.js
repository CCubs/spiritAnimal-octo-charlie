// $('body').css("background-color", "yellow");

$("#btnGetAnimal").on("click", function () {
  let bakerName = $("#bakerName").val();

  $("#greetingArea").text("Hi there, " + bakerName + "!");

  let randomAnimal =
    spiritAnimal[Math.floor(Math.random() * spiritAnimal.length - 1)];
  $("#greetingArea").after("Your spirit animal is: " + randomAnimal);
});

let spiritAnimal = [
  "🦅",
  "🦅",
  "🐈",
  "🐈",
  "🐕",
  "🐕",
  "🐠",
  "🐟",
  "🦈",
  "🐍",
  "file not found",
];
