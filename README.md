# Hunt-Game5

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dabde95955984dd08493709c421c7da6)](https://app.codacy.com/gh/denisecase/web-app-2020-fall?utm_source=github.com&utm_medium=referral&utm_content=denisecase/web-app-2020-fall&utm_campaign=Badge_Grade)
![GitHub repo size](https://img.shields.io/github/repo-size/denisecase/web-app-2020-fall?style=flat)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

> Example of a collaborative Gaming app built with the Express web framework for Node.js.

## Links

- [Hosted Webapp on Heroku](https://hunt-5.herokuapp.com/)
- [Source Repo](https://github.com/sudheera96/hunt-5)


## Stack
- Platform: Node (v15.0.1)
- Web Framework: Express
- View engine: EJS
- DB: SQL or NoSQL
- ORM: Sequelize 
- Web App Host: Heroku
- Data host: PostgreSQL
- Coding standards: Prettier/ESlint

## CI/CD
-Auto-deploying from our main repo.

## TEAM 
- We are a team of 6 people working on developing a gaming application in which the users complete a quest,which is finding out specific set of location based on the clues provided.
- This is a fun game aimed at involving all the students at Northwest Missouri State University to make their respective teams and participate in the competition to - score maximum points based on the level of the difficulty. As we all know due to the ongoing pandemic it is really difficult to get together a group of people but this game - will provide the paltform to get along and meet new people while still maintaining the social distancing.
- This also helps the students in improving the mental and physical fitness as the clues will be tricky, a person has to walk/jog/run(depends on the interest of the person) to these locations.
## Team Members 
- Sri Sudheera chitipolu - S538422@nwmissouri.edu
- Harika kulkarni - S538299@nwmissouri.edu
- Sumana Reddy Reddybathula - S538360@nwmissouri.edu
- Gundu Pooja - S538295@nwmissouri.edu
- Ravichander Reddy Goli - S538386@nwmissouri.edu
- Sai Rohith Gorla - S538416@nwmissouri.edu
## Prerequisites

- Node.js (comes with npm)
- Git
- TortoiseGit
- VS Code
- VS Code Extension - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [DB Browser for SQLite](https://sqlitebrowser.org/dl/), e.g., standard for 64 Windows. Save the .msi file and double-click to run it.

## Prerequisites for Publishing

- [Heroku CLI - to publish](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- [Heroku login](https://id.heroku.com/login)
- [PostgreSQL local install](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

Create Heroku app with Heroku Postgres (Hobby Dev - free) add-on.

## Instructions on getting started
## Background - How to Start a New App like this

- Run Express-generator with EJS (dynamically create pages with HTML & embedded JS)
- Update the JavaScript - change var to const, use async/await
- Change package.json versions to "latest" - until you have issues, then freeze a version
- Add folders to organize your code
- Update to use Express app4 updates - stay current
- [Set up ESLint and Prettier](https://sourcelevel.io/blog/how-to-setup-eslint-and-prettier-on-node)

## Build Responsive Apps (for all screen sizes)

- We choose [MDB 5](https://mdbootstrap.com/docs/standard/) (Material Design Bootstrap 5 - no jQuery)

## Add App-Specific Resources

Follow conventions - use standard lowercase, no spaces, follow naming patterns

Enable standard CRUD options (create, read, update, delete)

- Make a model & seed some data on startup
- Route requests to specific routers
- Route CRUD requests to controller functions
- Create standard views for the resource

1. create.ejs
1. delete.ejs
1. details.ejs
1. edit.ejs
1. index.ejs

Add a standard comment block at the top of each file.

Add yourself and email as the author (follow examples).

## How to Contribute

### Step 1 - Get fresh code.

1. Pull fresh code. (Fork & clone if this is the first time.)
1. Run npm install
1. Run npm run start
1. Verify everything runs.

```PowerShell
npm install
npm run start
```

### Step 2 - Make your contributions.

As you test your code, format it with Prettier and
lint (clean it up) with ESLint.
See scripts in package.json.

1. Immediately, make your local edits.
1. Verify the app still runs & standarize your code (see commands below)

```PowerShell
npm install
npm run start

npm run prettier
npm run lint
npm run lint-fix
```

### Step 3 - Save your work.

1. Git add & git commit locally.
1. Git push to the origin.
1. In your updated GitHub repo look for "Pull Request".
1. Follow instructions (click the green buttons) to prepare a "pull request" into the main repo.

## Start Options

Start the app by running npm run start.
Until error handling is complete, a clean shutdown is better.
Once error handling is complete, use npm run dev to start with nodemon.

```PowerShell
npm run start
```

View the application locally at <http://localhost:3025/>

## Sequelize commands

```PowerShell
npx sequelize-cli db:migrate
```

## PostgreSQL commands (for Production Database)

```PowerShell
Start-Process 'C:\Program Files\PostgreSQL\13\scripts\runpsql.bat'
psql "${DATABASE_URL}"

```

## Heroku commands (for Production App)

```PowerShell
heroku login
heroku addons

heroku addons:create heroku-postgresql:hobby-dev
heroku ps:scale web=1 --app web-app-2020-fall

heroku config --app web-app-2020-fall
heroku pg:info --app web-app-2020-fall
heroku pg:diagnose --app web-app-2020-fall
heroku pg:psql postgresql-round-39059 --app web-app-2020-fall

heroku run sequelize --app web-app-2020-fall
heroku run sequelize db:migrate --app web-app-2020-fall

heroku logs --app web-app-2020-fall --tail

heroku open --app web-app-2020-fall
```

## Resources:
- [Reference Repo](https://github.com/denisecase/web-app-2020-fall)
- [Express API with Postgres](https://www.smashingmagazine.com/2020/04/express-api-backend-project-postgresql/)
- [See repo](https://github.com/chidimo/Express-API-Template)
- [Getting Started with Sequelize and Postgres](https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp)
- [Getting Started with Node, Express and PostgreSQL using Sequelize](https://morioh.com/p/fe03e5149f97)
- [EJS CRUD tutorial](https://www.mynotepaper.com/nodejs-simple-crud-with-expressjs-and-mysql)
- [EJS CRUD repo](https://github.com/mdobydullah/nodejs-crud-with-expressjs-mysql)
- [MDN Guide to Publishing with Heroku](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
- [Provising Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-heroku-postgres)


## Contributors

<table>
<td align="center"><a href="https://github.com/sudheera96"><img src="https://avatars3.githubusercontent.com/u/22390581?s=460&u=e2a3ccb663ae34048a4c2233bb9a530d2de29a9c&v=4" width="100px;" alt=""/><br /><sub><b>Sri Sudheera Chitipolu</b></sub></a><br /><a href="https://github.com/sudheera96/hunt-5/commits?author=sudheera96" title="Code" width="18" height="18">💻</a><a attid="8742" href="https://www.linkedin.com/in/sri-sudheera-chitipolu/" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a> </td>
  
<td align="center"><a href="https://github.com/sumana-reddy"><img src="https://avatars1.githubusercontent.com/u/60016064?s=460&u=33898f8b8524f47cd6c76f8ecc4e022cdaa1c118&v=4" width="100px;" alt=""/><br /><sub><b>Sumana Reddy</b></sub></a><br /><a href="https://github.com/sudheera96/hunt-5/commits?author=sumana-reddy" title="Code">💻</a> </td>
  
<td align="center"><a href="https://github.com/KHARIKA17"><img src="https://avatars2.githubusercontent.com/u/60010885?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Harika Kulkarni</b></sub></a><br /><a href="https://github.com/sudheera96/hunt-5/commits?author=KHARIKA17" title="Code">💻</a> <a attid="8742" href="https://www.linkedin.com/in/kulkarni-harika-7b149382/" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a></td>

<td align="center"><a href="https://github.com/GUNDUPOOJA"><img src="https://avatars3.githubusercontent.com/u/60015515?s=460&u=0cf98e92476834a65061f613a12fb92421ab5da8&v=4" width="100px;" alt=""/><br /><sub><b>Pooja Gundu</b></sub></a><br /><a href="https://github.com/sudheera96/hunt-5/commits?author=GUNDUPOOJA" title="Code">💻</a> <a attid="8742" href="https://www.linkedin.com/in/pooja-gundu-b71000107//" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a></td>

<td align="center"><a href="https://github.com/Ravichanderreddy-goli"><img src="https://avatars2.githubusercontent.com/u/60166223?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Ravichander Reddy Goli</b></sub></a><br /><a href="https://github.com/sudheera96/hunt-5/commits?author=Ravichanderreddy-goli" title="Code">💻</a> <a attid="8742"
href="https://www.linkedin.com/in/ravichander-reddy-goli-606ab8171/" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a></td>

<td align="center"><a href="https://github.com/SaiGorla"><img src="https://avatars1.githubusercontent.com/u/41150392?s=64&v=4" width="100px;" alt=""/><br /><sub><b>Sai Gorla</b></sub></a><br /><a href="https://github.com/sudheera96/hunt-5/commits?author=SaiGorla" title="Code">💻</a> <a attid="8742"
href="https://www.linkedin.com/in/sairohith-gorla-3b6954169/" width="18" height="18"><img src="https://media-exp1.licdn.com/dms/image/C5103AQGzM058kw3Zvg/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=L-E7jOWCTTtERTp3sDEWF7fRHy882g7T_bBuIo2lOQE" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a> </td>



