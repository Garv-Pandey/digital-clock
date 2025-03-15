# Digital Clock - React Learning Project

## Overview
This project is a simple digital clock built using React.js. The purpose of this project is to practice React fundamentals, including state management, the `useEffect` hook, and functional components.

## Features
- Displays the current time in HH:MM:SS AM/PM format.
- Updates every second using `setInterval`.
- Implements the `useState` hook to manage time state.
- Uses the `useEffect` hook to handle side effects (updating time at an interval and cleanup on unmount).

## Technologies Used
- React.js
- JavaScript (ES6+)

## Code Explanation
The main component `DigitalClock` includes:
- `useState` to store and update the time.
- `useEffect` to start an interval that updates the time every second and cleans up on unmount.
- A function `timeFormatted` to format the time with leading zeros and display the AM/PM notation.
- A function `timeUpdate` that sets the interval for updating the time.

## Learning Outcomes
- Understanding state updates with `useState`.
- Managing side effects using `useEffect`.
- Formatting time using JavaScript functions.
- Handling cleanup in React components.

## Author
This project was created for learning purposes while practicing React.js.