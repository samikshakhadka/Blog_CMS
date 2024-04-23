# Blog Post Web Application

## Overview
This documentation provides an overview of a simple web application for managing blog posts. The application allows users to perform CRUD operations (Create, Read, Update, Delete) on blog posts. Users can create new posts, view existing posts, edit posts, and delete posts.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Django (Python)
- **Database**: PostgreSQL
- **API Communication**: Axios
- **Authentication**: Django REST Framework (JWT Authentication)
- **Styling**: CSS (Bootstrap)

## Features
1. **Create a Blog Post**:
   - Users can create new blog posts by providing a title and content.
   - When creating a new post, users can submit the form, and the post will be added to the database.

2. **View Blog Posts**:
   - Users can view a list of all existing blog posts.
   - Each post displays its title, content, and creation date.

3. **Edit a Blog Post**:
   - Users can edit existing blog posts.
   - Clicking on the "Edit" button for a specific post allows users to modify the title and content.
   - After editing, users can save the changes, and the post will be updated in the database.

4. **Delete a Blog Post**:
   - Users can delete existing blog posts.
   - Clicking on the "Delete" button for a specific post will prompt users for confirmation.
   - If confirmed, the post will be removed from the database.

5. **User Authentication**:
   - The application implements user authentication using JWT (JSON Web Tokens).
   - Users need to authenticate (login) before performing any CRUD operations.
   - Unauthorized users are redirected to the login page.

