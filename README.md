# **Elysian**

**Elysian** is a personal blog platform designed to store and manage blog posts, providing a seamless backend solution for a frontend application. Built with modern technologies, Elysian leverages NestJS for a robust and scalable API, Prisma for efficient database management, and JWT for secure admin authentication. The platform supports CRUD operations for blog posts, allowing the admin to create, read, update, and delete entries effortlessly. Additionally, Multer handles image uploads for blog post thumbnails, while Docker ensures the application and database run smoothly in a containerized environment.

For the frontend, Elysian uses React for building a dynamic and responsive user interface, Tailwind CSS for quick and intuitive styling, and Axios for seamless communication with the backend API. React Router enables smooth navigation between pages, such as the home page and individual blog posts. The frontend is designed to be simple and beginner-friendly, making it easy to learn and extend.

The purpose of Elysian is to serve as a reliable full-stack system for a personal blog, enabling the admin to store, manage, and retrieve blog content dynamically. With its clean architecture, modern technologies, and focus on simplicity, Elysian is the perfect foundation for building a modern, personal blogging experience.

---

## **Features**
- **Backend**:
  - CRUD operations for blog posts.
  - Admin authentication using JWT.
  - Image uploads for blog post thumbnails using Multer.
  - Containerized with Docker for easy deployment.

- **Frontend**:
  - Dynamic and responsive user interface built with React.
  - Styled with Tailwind CSS for a modern look.
  - Smooth navigation with React Router.
  - Fetches and displays blog posts from the backend.

---

## **Technologies Used**
### Backend
- **NestJS**: Backend framework for building the API.
- **Prisma**: ORM for managing the database.
- **JWT**: For secure admin authentication.
- **Multer**: For handling image uploads.
- **Docker**: For containerizing the application and database.

### Frontend
- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For making HTTP requests to the backend.
- **React Router**: For handling navigation between pages.

---

## **Getting Started**
Follow these steps to set up and run **Elysian** locally.

### **Prerequisites**
- **Node.js** (v16 or higher).
- **Docker** and **Docker Compose**.
- **PostgreSQL** (optional, Docker will handle this).

---

### **Backend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/elysian.git
   cd elysian/backend