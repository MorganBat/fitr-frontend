# fitr

Rails and React app built to track workouts. Built by Morgan Batterham and Gary Ho.

Live link: https://fitr-frontend.netlify.app/

Backend repo: https://github.com/MorganBat/fitr

Frontend repo: https://github.com/G-V-H/fitr-frontend

Live API: https://fitr-backend.herokuapp.com

Link to Part A repo: https://github.com/MorganBat/MorganBatterham_T3A2-A

## ERD

![Entity Relationship Diagram](docs/fitr-erd.png)

## Libraries used:

#### Front End:

The Front end was built on ```ReactJS``` which is powered by ```NodeJS```. The front end was hosted on Netlify. Libraries used:

- **ReactJS** - React is a JavaScript framework built by Facebook. React is intended to make the creation of interactive UIs incredibly easy.

- **NodeJS** - NodeJS is a JavaScript runtime which allows JavaScript code to be run outside of a browser. This was used to run the ReactJS frontend.

- **React-Router-Dom** - This library was used for creating Routes for our app. These routes were used to display different React components.

- **Bootstrap** - Bootstrap is an extremely popular CSS library which was used for basic styling

- **Cypress** - Cypress is used for testing the functionality of the website.

- **axios** - Axios is a library used for sending HTTP requests and receiving their responses. This is necessary for the front end to receive data from the API/back-end.

- **Netlify** is used to host the front end.

#### Back End:

The Backend was built on ```Ruby on Rails```, using a ```PostgreSQL``` database for the long-term, persistent storage of data. Libraries used:

- **Ruby on Rails** is an incredibly popular web application framework. While Rails has the ability to render the HTML for the end user, in this project Rails was used solely for the back-end API, with ```ReactJS``` handling the front end.

- **Knock** is used to manage the issuing of JavaScript Web Tokens (JWTs) for user authentication.

- **BCrypt** is used in conjuction with ```Knock``` for user authentication

- **Rack-CORS** is used to handle Cross Origin Resource Sharing. This enables the ```ReactJS``` front-end to access data from the back-end.

- **Heroku** is used to host the back end.

### Project Management

We managed our project through a Kanban board hosted on miro. Miro was excellent as it offers more than just a Kanban board, so it was used to draft Wireframes and for scratching together the initial data structures for our application.

We hosted two separate GitHub repositories, one for the front end and one for the backend. By allowing both group members access to the repository it was easy for us to commit changes without causing a conflict. Whenever a group member was developing a new feature, they would create a new branch for development purposes. Once they had fully implemented and tested that feature, they would open a 'pull request' in GitHub before merging their new code into the existing master branch.

For communication purposes we used the Direct Message feature on the 'Discord' Instant Messaging Platform. Using discord had many benefits, including the ability to screenshare and make voice calls, which made working on features together incredibly simple. An extra benefit was mobile access, as one group member had an internet outage but was able to use their phone App to inform the other member.

For hosting purposes we used two separate site. The API/back-end was hosted on Heroku, and the front-end was hosted on netlify. These website were chosen due to the ease of using their CLI tools for deploying.

Screenshots of our Kanban board are included below:

### Kanban Board Progress

#### End of Day 1

![End of Day 1](docs/kanban1.png)

#### End of Day 2

![End of Day 2](docs/kanban2.png)

#### End of Day 3

![End of Day 3](docs/kanban3.png)

#### End of Day 4

![End of Day 4](docs/kanban4.png)

#### End of Day 5

![End of Day 5](docs/kanban5.png)

#### End of Day 6

![End of Day 6](docs/kanban6.png)

#### End of Day 7

![End of Day 7](docs/kanban7.png)

#### End of the Project

![End of Day 8](docs/kanban8.png)

# Gary Ho T3A2-A

## Website Description

### Purpose

This website is used to track and plan workouts fitness enthusiasts. The current options for websites used for tracking workouts are quite lacking in their feature set for the end user and can be cumbersome to use. This website will track progression and improvements with additional easy to use graphical options to observe their progress. There is also the option for the website to automatically plan the rep and weight ranges for future workouts. 

The intent is to make the tedious and burdensome, yet critical, part of fitness easy in order to promote health and well-being. A key motivating factor of working out and continuing to work out is being able to see what you have already accomplished over a period of time since the progress made day-to-day or even week-to-week is sometimes hard to perceive.

Another key factor towards sticking with a workout plan is accountability and the platform will provide a number of methods to keep the user engaged and responsible for their workouts with other users and even their own personal trainers.

### Functionality/Features

The application is designed for the user to be able to create their own personal workout plan saved to the platform and editable at will. The user is then able to store their completed workouts and view their historical logs in a tabular format, as a graph, or just in a calendar form in order to view their progress and commitment to their plan.

These workout plans and logs are personal to each user and, as such, each user will have an account which will require a level of account creation, authentication, and permission. Providing a user's information to their trainer will also require multiple levels of end-user access. Should a user decide to share their logs to others there will be an export function available to them.

The user's historical logs will need to be stored but also be editable and deletable.

Providing a social aspect for a level of accountability will be accomplished through the creation of user groups and within these groups they will be able to set communicate and challenges to one-another. 

### Target Audience

The target audience for this website is anyone who has an interest in Health and Fitness. Specifically people interested in weightlifting, as the website is built to track reps and weights.

There will also be the option for trainers to access a client's data, to track their progress and assist in the planning of workouts. 

### Tech Stack

This website will be primarily built on the MERN stack:

- *MongoDB* will be used as the database; for the long term, persistent storage of Data.

- *ExpressJS* will be used as the web server, to receive and process HTTP requests.

- *ReactJS* will be used to build the 'front end' of the website. This is the portion that is loaded into the browser, in order to handle user interaction.

- *NodeJS* is a JavaScript runtime which will be used to run the ExpressJS code.

Hosting will be performed by the following providers:

- *GitHub Pages* will be used to host the front end. As the front end is built on HTML, CSS, JavaScript and ReactJS the integration with GitHub for source control makes it the logical choice.

- *Heroku* will be used to host the back end. As the application requires dynamic responses, GitHub Pages is unusable for this purpose. As such, Heroku will be used to host the API.

- *Amazon Web Services* will be used to host the Database. Heroku offer a MongoDB hosting service, though AWS' offering is far more developed and flexible.

Additional Technologies used:

- *Miro* is used for a kanban board and for drafting the Wire Frames.

- *GitHub* is used for source control.

- *Creately* is used for creating the Data Flow Diagram.

- *Draw.io* is used for creating the Application Architecture Diagram.

## Dataflow Diagram

![Data Flow Diagram](docs/Data_Flow_Diagram.png)

## Application Architecture Diagram

![Application Architecture Diagram](docs/Application_Architecture_Diagram.png)

## User Stories

**Nichola - 35**

Single Police Officer who needs to stay fit and strong for her job. She has constantly struggled with feeling as if she is making progress in her fitness because she does not follow a routine when she works out. 

"When I go to the gym I just do exercises I feel like doing that day and I don't feel like I'm getting any better"

"I'd like a way to see what I've workouts I've done in the past"

**Jermaine - 40**

An experienced personal trainer who has a wide number of clients that give up shortly after starting their regimen with Jermaine. He attributes this dropout rate to his clients not seeing immediate results in their body despite making a lot of progress.

"If I could show my clients the great work they've done just over the short time they've trained with me I think more clients would stay committed"

**Tyreese - 64**

An accountant approaching retirement and a grandfather to a some very active grandkids. He wants to stay healthy and fit to keep up with them but loses track whenever he gets the motivation.

"When I have nothing holding me accountable it slips my mind. I don't want to be the grandparent who has to take a break playing but I get too busy or I just forget to workout."

"My buddies go on and on about being in the best shape of their life but I can't keep up. If we could be pushing each other I know I would stick to it."

**Kyle - 26**

A PhD student who is a regular gym goer. He has tried numerous applications to track and monitor his progress but does not like their feature-sets or ease of use. 

"I've tried all the apps but they're so annoying and unintuitive to use. They lose my progress and I can't plan ahead any of my workouts. I just want something easy to use and edit my past and future sessions"

"I'm not a computer wiz' like you, I just need something that works"

## Wire Frame Diagrams

### Site Overview
![Site Overview](docs/WF1.png)
### Landing Page
![Landing Page](docs/WF2.png)
### Login
![Login](docs/WF3.png)
### Register
![Register](docs/WF4.png)
### Profile
![Profile](docs/WF5.png)
### Past Workouts
![Past Workouts](docs/WF6.png)
### My Program
![My Program](docs/WF7.png)
### Add Workout
![Add Workout](docs/WF7.png)

## Trello Board Screenshots

### Start of Day 1
![Trello](docs/TB1.png)

### End of Day 1
![Trello](docs/TB2.png)

### End of Day 2
![Trello](docs/TB3.png)

### End of Day 3
![Trello](docs/TB4.png)