const projects = [

  {
    _key: "b8b7d9dfbdf789b8fb",
    name: "Local Weather w/ fetch API",
    img_index: 1,
    links: {
      code: "https://github.com/1DmitriiShumilov1/my-first-API/",
      page: "https://firstweatherapi.netlify.app",
    },
    description:
      "Created a web application that shows the weather in your current location with the help of openweathermap API",
    challenges: {
      first: "Fixing the mixed content problem (HTTP / HTTPS)",
      second:
        "JSON's information was not reachable (couldn't assign a variable to a string from JSON)",
    },
    usedTechnologies: "HTML | CSS | JavaScript | JSON | openweathermap API",
  },
  {
    _key: "b8b7d9dfbdf789b8fc",
    name: "Spaceship Game",
    img_index: 2,
    links: {
      code: "https://dimashumilov.netlify.app",
      page: "https://youtu.be/z24xxAo3g3c",
    },
    description:
      "Created a Java game with the total of 15 game objects: 1 spaceship, 1 bullet, 1 bomb, 8 aliens, and 4 barriers",
    challenges: {
      first: "The backgroung wouldn't load",
      second: "The ship would go off screen",
    },
    usedTechnologies: "Java | Code12 (Programming Environment)",
  },
  {
    _key: "b8b7d9dfbdf789b8fd",
    name: "Tic Tac Toe",
    img_index: 3,
    links: {
      code: "https://github.com/1DmitriiShumilov1/TicTacToe",
      page: "https://tic-tac-toe-shumilov.netlify.app",
    },
    description:
      "Created a Tic Tac Toe game in the browser. Can be played in two ways: Player vs Computer or Player vs Player.",
    challenges: {
      first: "Bot would make a move to the used cell",
      second: "Player can't make a move after the first move",
    },
    usedTechnologies: "HTML | CSS | JavaScript",
  }
];

export function getProjects() {
  return projects;
}
