# 🏡 SweetSpot

A full-stack stay listing web application inspired by platforms like Airbnb. Users can browse listings, search by location and category, create and manage their own listings, and leave reviews.

## ✨ Features

- 🔐 User authentication with Passport.js
- 🏠 Create, edit and delete listings
- 🔎 Search and filter listings by location and category
- ⭐ Add and delete reviews
- 🛡️ User authorization and ownership checks
- ✅ Server-side validation with Joi
- ⚠️ Centralized error handling
- 💬 Flash messages for user feedback
- 📱 Responsive user interface

## 🛠️ Tech Stack

| Technology                  | Used For                                        |
| --------------------------- | ----------------------------------------------- |
| **HTML5**                   | Structure and markup of web pages               |
| **CSS3**                    | Styling and responsive UI                       |
| **JavaScript**              | Client-side and server-side functionality       |
| **EJS**                     | Server-side rendering and dynamic HTML          |
| **EJS-Mate**                | Reusable layouts and EJS templating             |
| **Node.js**                 | JavaScript runtime for the backend              |
| **Express.js**              | Web server, routing and middleware              |
| **MongoDB**                 | NoSQL database for application data             |
| **Mongoose**                | MongoDB object modeling and database operations |
| **Passport.js**             | User authentication                             |
| **Passport Local**          | Username/password authentication strategy       |
| **Passport Local Mongoose** | Authentication integration with Mongoose        |
| **Express Session**         | User session management                         |
| **Connect-Flash**           | Temporary success/error messages                |
| **Joi**                     | Server-side input validation                    |
| **Method Override**         | Enables PUT and DELETE requests from HTML forms |
| **Git & GitHub**            | Version control and project management          |

## 📁 Project Structure

```text
SweetSpot/
│
├── controllers/       # Application/business logic
├── initialize/        # Database initialization & sample data
├── models/             # Mongoose database models
├── public/
│   ├── css/            # Stylesheets
│   └── js/             # Client-side JavaScript
├── routes/             # Application routes
├── utilities/          # Reusable helper functions
├── views/
│   ├── includes/       # Reusable EJS components
│   ├── layouts/        # Page layouts
│   ├── listings/       # Listing-related pages
│   └── users/          # Authentication pages
│
├── app.js              # Main application entry point
├── middleware.js       # Custom authentication & validation middleware
├── schema.js           # Joi validation schemas
├── package.json
└── README.md
```

## 🚀 Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/chinmayaadiga10/SweetSpot.git
cd SweetSpot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

Make sure your local MongoDB server is running.

SweetSpot currently connects to:

```text
mongodb://127.0.0.1:27017/sweetspot
```

### 4. Start the application

```bash
node app.js
```

The server will start on port `8080`.

### 5. Open the application

Visit:

```text
http://localhost:8080
```

## 🔑 Main Routes

| Method   | Route                             | Description             |
| -------- | --------------------------------- | ----------------------- |
| `GET`    | `/listings`                       | View all listings       |
| `GET`    | `/listings/:id`                   | View a specific listing |
| `GET`    | `/listings/new`                   | Create a new listing    |
| `PUT`    | `/listings/:id`                   | Update a listing        |
| `DELETE` | `/listings/:id`                   | Delete a listing        |
| `POST`   | `/listings/:id/reviews`           | Add a review            |
| `DELETE` | `/listings/:id/reviews/:reviewId` | Delete a review         |
| `GET`    | `/signup`                         | Sign up                 |
| `GET`    | `/login`                          | Log in                  |
| `GET`    | `/logout`                         | Log out                 |

## 🏗️ Architecture

SweetSpot follows an **MVC-style architecture**:

```text
             User
               ↓
             Routes
               ↓
           Middleware
               ↓
          Controllers
               ↓
            Models
               ↓
           MongoDB
               ↓
           EJS Views
               ↓
             User
```

This separation keeps routing, business logic, database operations, and presentation organized and maintainable.

## 👨‍💻 Author

**Chinmaya Adiga**

GitHub: https://github.com/chinmayaadiga10/SweetSpot

---
