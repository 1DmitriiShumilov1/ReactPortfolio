const projects = [
  {
    _key: "b8b7d9dfbdf789b8fa",
    name: "Website for a Musician",
    img_index: 0,
    links: {
      page: "https://vladimiromeltchenko.com",
    },
    description:
      "4-page website with audio and videos for a musician from Portugals",
    challenges: {
      first: "Creating the 'double-sided' album covers (Media page).",
      second: "Optimizing the covers for mobile devices",
    },
    usedTechnologies: "HTML | CSS",
  },
  {
    _key: "b8b7d9dfbdf789b8fb",
    name: "Weather App w/ fetch API",
    img_index: 1,
    links: {
      code: "https://github.com/1DmitriiShumilov1/my-first-API/",
      page: "https://firstweatherapi.netlify.app",
    },
    description:
      "Using openweathermap API to get current weather and displaying the received information with the icons / numbers / text",
    challenges: {
      first: "Fixing the mixed content problem (HTTP / HTTPS)",
      second:
        "JSON's information was not reachable (couldn't assign a variable to a string from JSON)",
    },
    usedTechnologies: "HTML | CSS | JavaScript | JSON | openweathermap API",
  },
  {
    _key: "b8b7d9dfbdf789b8fc",
    name: "JavaScript Showcase",
    img_index: 2,
    links: {
      code: "https://github.com/1DmitriiShumilov1/JavaScriptShowcase",
      page: "https://js-showcase.netlify.app",
    },
    description:
      "Fully functionable Contact List (Add / Edit / Remove contacts), BG Changer, and a Tip Calculator",
    challenges: {
      first:
        "EventListeners' options weren't used, so they would attach to a contact list element forever",
      second:
        "When 'update contact' button is clicked, previously updated contact cell would delete its innerHTML",
    },
    usedTechnologies: "HTML | CSS | JavaScript",
  },
  {
    _key: "b8b7d9dfbdf789b8fd",
    name: "Tic Tac Toe",
    img_index: 3,
    links: {
      code: "https://github.com/1DmitriiShumilov1/TicTacToe",
      page: "https://fancy-tictactoe.netlify.app",
    },
    description:
      "Tic Tac Toe where you can lose to the bot without any problem when not playing careful. One player / Two players",
    challenges: {
      first: "Bot would make a move to the used cell",
      second: "Player can't make a move after the first move",
    },
    usedTechnologies: "HTML | CSS | JavaScript",
  },
  {
    _key: "b8b7d9dfbdf789b8fe",
    name: "Restaurant",
    img_index: 4,
    links: {
      code: "https://github.com/1DmitriiShumilov1/UnusualDinerWebpage",
      page: "https://unusualdiner.netlify.app",
    },
    description:
      "4-page restaurant website with a fully functionable JavaScript cart",
    challenges: {
      first:
        "EventListeners woudn't work correctly (adding one item, different item adds to the cart)",
      second: "Undefined variables when 'purchase' button is clicked",
    },
    usedTechnologies: "HTML | CSS | JavaScript",
  },
  {
    _key: "b8b7d9dfbdf789b8ff",
    name: "Stack The Blocks",
    img_index: 5,
    links: {
      code: "https://github.com/1DmitriiShumilov1/JavaStackingBlocks",
      page: "https://stack-cubes.netlify.app",
    },
    description:
      "Very simple game where you pick from 3 to 9 blocks which will be stacked upon each other at the end",
    challenges: {
      first:
        "No matter how many blocks you picked, only 3 blocks would show up at the end",
      second:
        "Updating one HTML file instead of creating multiple files for all the outcomes",
    },
    usedTechnologies: "HTML | CSS | JavaScript",
  },
  {
    _key: "b8b7d9dfbdf789b8fg",
    name: "Violin Store",
    img_index: 6,
    links: {
      code: "https://github.com/1DmitriiShumilov1/ViolinStoreWebpage",
      page: "https://violinstore.netlify.app",
    },
    description:
      "2-page website with the JS cart. The first project I've built by myself!",
    challenges: {
      first: "Overlapping divs",
      second: "No mobile support",
    },
    usedTechnologies: "HTML | CSS | JavaScript",
  },
];

export function getProjects() {
  return projects;
}
