# React Login Form App

This is a React-based web application that provides a user-friendly login form. The primary purpose of this project is to allow users to enter their credentials (username and password), and based on the input, the app will either grant access on successful login or display an error message for incorrect login details.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)

## Getting Started

To set up and run this project on your local machine for development and testing purposes, follow these instructions:

### Prerequisites

Ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/react-login-form-app.git
   ````
2. Navigate to the project directory:
   ```bash
   cd React-Login
   ```
3. Install the project dependencies:
   ```bash
   npm install
   ```

## Project Structure

This project is organized into two main components:

### 1. App.js:
   
   `App.js` serves as the core of the application. It's responsible for rendering the login form and managing user interactions.
   The key elements of `App.js` are:
   * User input fields for username and password.
   * Logic for handling user input and login attempts.
   * Success message display for successful logins.
   * Error message display for incorrect login details.
     
### 2. Textbox.js:

`Textbox.js` is a reusable component for rendering styled text input fields. It includes optional icon support and is used for the input fields in the login form. 
Some important details about `Textbox.js`:

* It ensures consistent styling and user interface for text input fields.
* Provides an option to include an icon with the input field, enhancing the visual appeal.

## Features

This login form application offers the following features:

* Users can enter their username and password.
* Password input enforces specific constraints.
* Successful login triggers a success message.
* Incorrect login details display an error message.
   
   
