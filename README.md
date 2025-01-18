# book_my_show# BookMyShow-like App

## Overview
This application is inspired by the functionality of BookMyShow, providing users with a platform to browse movies, book tickets, and manage shows and theatres. It is divided into three main roles: **Admin**, **Partner**, and **User**.

---

## Features

### Admin Features
- Add new movies to the platform.
- Approve or reject theatres registered by partners.

### Partner Features
- Register and manage theatres.
- Create and manage shows for approved theatres.

### User Features
- Browse available movies and shows.
- Book tickets for specific shows.

---

## Technology Stack
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Frontend**: React.js (optional, depending on requirements)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bookmyshow-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. (Optional) Run in development mode:
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Admin Endpoints
- **POST** `/admin/movies` - Add a new movie.
- **PUT** `/admin/theatres/:id/approve` - Approve a theatre.
- **DELETE** `/admin/theatres/:id/reject` - Reject a theatre.

### Partner Endpoints
- **POST** `/partner/theatres` - Register a new theatre.
- **POST** `/partner/shows` - Create a new show for an approved theatre.

### User Endpoints
- **GET** `/movies` - Browse all available movies.
- **POST** `/bookings` - Book a ticket for a show.

---

## Folder Structure
```
bookmyshow-app/
├── controllers/       # Contains all controller logic
├── models/            # Mongoose schemas and models
├── routes/            # Application routes
├── middlewares/       # Custom middlewares (e.g., authentication)
├── utils/             # Utility functions
├── config/            # Configuration files
├── public/            # Static assets (if any)
├── views/             # Frontend views (if applicable)
├── tests/             # Automated tests
├── .env.example       # Example environment variables
└── README.md          # Project documentation
```

---

## Future Enhancements
- **Payment Integration**: Add payment gateway for booking tickets.
- **Notifications**: Email or SMS notifications for booking confirmations.
- **Analytics Dashboard**: Provide insights for partners and admins.

---

## Contributing
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

