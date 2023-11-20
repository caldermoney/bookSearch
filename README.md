# bookSearch App

## Description

The Google Books App is a full-stack MERN application integrating GraphQL. It allows users to search for books using Google's Books API, save their favorite books, and manage their selections.

## Features

- Search for books via Google Books API.
- Save favorite books to a personal list.
- View saved books and remove them as needed.

## Technology Stack

- **MongoDB**: A document-based database used to store user data and book information.
- **Express.js**: Backend web application framework running on top of Node.js.
- **React**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the backend.
- **GraphQL**: A query language for APIs used in the application.
- **Apollo Server**: An open-source, spec-compliant GraphQL server.
- **Apollo Client**: Comprehensive state management library for JavaScript.
- **Heroku**: Cloud platform for deploying and running applications.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/caldermoney/bookSearch.git
   cd bookSearch

2. **Install Dependencies**

   Navigate to the project directory and install the required dependencies.

   - For the server:

     ```bash
     cd server
     npm install
     ```

   - For the client:

     ```bash
     cd client
     npm install
     ```

3. **Environment Variables**

   Set up the necessary environment variables:

   - In the `server` directory, create a `.env` file and add the required configurations (e.g., `MONGODB_URI`, `JWT_SECRET`).

4. **Running the Application**

   - To run the server, navigate to the `server` directory and run:

     ```bash
     npm start
     ```

   - To run the client, navigate to the `client` directory in a separate terminal window and run:

     ```bash
     npm start
     ```

   The application will launch in your default web browser.

### Usage

- Use the search bar to find books.
- Save your favorite books by clicking the "Save" button.
- View your saved books in the "Saved Books" section.
- Remove books from your saved list as desired.


## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

