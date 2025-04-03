# URL Shortener

The URL Shortener is a web application that converts long URLs into short, easily shareable links. It is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and provides users with a simple interface to create, manage, and track shortened URLs.

## Features

- **Shorten URLs:** Convert long URLs into short links.
- **Manage Shortened Links:** View and track all created links.
- **Redirect Functionality:** Automatically redirect users from short links to the original URL.
- **User Authentication:** Secure login and registration system.
- **Analytics Tracking:** Monitor the number of times a shortened link is clicked.

## Technologies Used

- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** Tailwind CSS

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your machine:
- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

### Clone the Repository

```bash
git clone https://github.com/shaghaf7/url-shortner.git
cd url-shortner
```

### Backend Setup

```bash
cd backend
npm install
```

#### Create a `.env` file in the `backend` directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

#### Start the Backend Server

```bash
npm start
```

### Frontend Setup

```bash
cd ../frontend
npm install
```

#### Start the Frontend Development Server

```bash
npm run dev
```

The frontend should now be running, and you can access the application in your browser.

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login and get a token

### URL Management

- **POST** `/api/url/shorten` - Shorten a new URL
- **GET** `/api/url/:shortCode` - Redirect to the original URL
- **GET** `/api/url/user` - Get all URLs created by a user (requires authentication)

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or support, feel free to reach out:

- **GitHub:** [shaghaf7](https://github.com/shaghaf7)
- **Email:** shaghafkashif@gmail.com

---

Enjoy using the URL Shortener!

