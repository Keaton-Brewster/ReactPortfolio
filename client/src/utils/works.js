function Work(name, appURL, gitURL, description, imgPath) {
  this.name = name;
  this.redirectToApp = appURL;
  this.redirectToGithub = gitURL;
  this.description = description;
  this.img = imgPath;
}

const Routinify = new Work(
  "Routinify",
  "https://routinify.herokuapp.com/",
  "https://github.com/Keaton-Brewster/project-2",
  `A simple task management / communication application for 
    anyone looking to manage things within a group. Create groups, tasks, and routines and 
    add any other users to your groups to participate in group task management`,
  "Routinify.png"
);

const NoteTaker = new Work(
  "Notes Web App",
  "https://notetaker-keatonbrewster.herokuapp.com/",
  "https://github.com/Keaton-Brewster/Note-Taking-WebApp",
  `A clean and simple web application for creating, saving, and editing notes
    for personal, or professional use`,
  "NoteTaker.png"
);

const PAIR = new Work(
  "PAIR",
  "https://brandyquinlan.github.io/PAIR/",
  "https://github.com/brandyquinlan/PAIR",
  `A group collaboration, PAIR is designed to give you inspiration in the kitchen,
    and behind the bar by providing you with recipes for food AND drinks, all in one place`,
  "PAIR.png"
);

const WeatherDashboard = new Work(
  "Weather Dashboard",
  "https://keaton-brewster.github.io/Weather-Dashboard/",
  "https://github.com/Keaton-Brewster/Weather-Dashboard",
  `A simple and concise app for checking the weather and saving your frequent
    locations. Great for day-to-day use, or for planning a trip to a new location!`,
  "WeatherDash.png"
);

const FitnessTracker = new Work(
  "Fitness Tracker",
  "https://fitnesstracker-nosql-kpb.herokuapp.com/",
  "https://github.com/Keaton-Brewster/FitnessTracker",
  `A simple app for keeping track of workouts and exersices. Log your exercise, either cardio or resistance,
    include weight moved, or distance covered, as well as time elapsed`,
  "FitnessTracker.png"
);

const BudgetTracker = new Work(
  "Offline Finance Tracker",
  "https://offline-budget-tracker-kpb.herokuapp.com/",
  "https://github.com/Keaton-Brewster/BudgetTracker",
  `A simple offline-first approached web application that can keep track of your debits and credits, 
    especially designed for people who are constanly on the move where connections can be unreliable`,
  "FinanceTracker.png"
);

const devlr = new Work(
  "devlr",
  "https://devlrapp.herokuapp.com/",
  "https://github.com/brandyquinlan/devlr/",
  `Create a customized profile to display your development background, pinned projects and status updates to share with other developers worldwide. 
  devlr is a social media/portfolio/networking site designed just for developers. There is nothing like it on the open market, 
  the nearest competitor would be Stack Overflow or GitHub for code sharing or Reddit for social interaction.
  Our project combines the benefits of GitHub for sharing your code, and Twitter and other social media for sharing your life.`
);

const works = [
  devlr,
  Routinify,
  BudgetTracker,
  FitnessTracker,
  PAIR,
  NoteTaker,
  WeatherDashboard,
];

export default works;
