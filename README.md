# Dog Images Application

This project is a lightweight single-page application built with React and Vite. It fetches random dog photos from the publicly available Dog CEO API and displays them in a clean, interactive interface. Users can load new dog images on demand and experience dynamic updates without page reloads. The project demonstrates essential React concepts such as state management, side effects, prop passing, and component modularity.________________________________________________________________________________________________________________________________________
## Purpose

The goal of this application is to provide an approachable example of consuming an external API inside a React environment. It serves as both a beginner-friendly learning tool and a simple template for more advanced projects that work with asynchronous data. The codebase is intentionally minimal, readable, and easy to extend.________________________________________________________________________________________________________________________________________
### Features

Automatically fetches a dog picture when the app loads

Fetch a new random dog image at any time using a button

Displays a loading state while waiting for the API

Clean separation of logic and UI components

Simple, modular component structure

Uses the Dog CEO API with no authentication required

Fast development environment powered by Vite
________________________________________________________________________________________________________________________________________
#### Component Structure
src/
├─ App.jsx              // Root component: manages state, API calls, and layout
│
├─ components/
│  ├─ DogDisplay.jsx   // Displays the current dog or a loading message
│  └─ FetchButton.jsx   // Button component that fetches a new dog
│
├─ main.jsx             // Entry point that renders the App component
├─ App.css            // Global stylesheet and optional layout styling
└─ Index.css            // Included in the initial github repo but unused for the application

This structure keeps the application modular and easy to maintain. Core logic is centralized in App.jsx, while UI components remain focused and purpose-specific. Props are used to pass state and event handlers cleanly between components.
________________________________________________________________________________________________________________________________________
##### State Management

State is handled at the top level inside App.jsx, including:

- The current dog image URL

- The loading state during API requests

React’s useState manages these values, and useEffect triggers the initial dog fetch on mount.
Child components receive data and event handlers through props, maintaining clear and predictable data flow.
________________________________________________________________________________________________________________________________________
###### Styling and Interface

- The dog image is displayed inside a dedicated container

- The fetch button is centered and styled for easy interaction

- The loading state appears instantly while awaiting data

- Styles are intentionally minimal to keep the project focused on functionality, but can be expanded for more polished designs
________________________________________________________________________________________________________________________________________
####### Installation and Running the Application

1) Install dependencies:

- npm install

2) Start the development server:

- npm run dev


Open the application in a browser:

http://localhost:5173/

Technologies Used

React — Component-based UI development

Vite — Lightning-fast development server and build tooling

JavaScript — Application logic, API communication, and state handling

CSS — Visual styling and layout

DogAPI — Public API for fetching dog pictures
________________________________________________________________________________________________________________________________________
Summary
This project provides a clear and concise demonstration of building a functional API-driven interface using React. By combining state management, component composition, and asynchronous data fetching, it offers a solid introduction to common patterns found in modern front-end development. Its simple architecture and modular design make it an excellent foundation for expanding into more complex applications or for use as a teaching tool.