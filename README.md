# To Do List website

## Description
Website for managing tasks where users can:
- Create tasks with a title, description, and deadline.
- Edit or remove existing tasks.
- View all tasks.
- Get reminders for deadlines.
- Users can´t use website without an account.

## Features
- User authentication:
  - Register, login, and logout.
  - Password reset.
- User profile management.
- Task history for each user.
- Fully responsive design.

## Security 
-Logs
    - Temporary account lockout for too many failed logins
    - Password hashing and salting
    - Input validation and sanitization
    - Authentication on 2 steps
    - Sessions expire
- HTTPS 
- Tokens authentication (JWT)
- SQL injection protection (ORM)
- Cross-Site Request Forgery (CSRF) protection

## Tools
- Front-end : 
    - React
    - CSS
-Back-end : 
    - Django (Python)
- Database :
    - PostgreSql

### Requirements:
- Python 3.8+
- Node.js 14+
- npm or yarn
- PostgreSQL

### Steps to Setup:
1. **Clone the repository**
2. **Setup the virtual environment**
3. **Install backend requirements**
4. **Configure the database**
5. **Run migrations**
7. **Start the backend server**
8. **Setup the frontend**

## How to Use
1. Open the frontend in your browser at `http://localhost:3000`.
2. Register or log in to create your tasks.
3. Manage tasks through the web interface.

## License
This project is licensed under the MIT License.