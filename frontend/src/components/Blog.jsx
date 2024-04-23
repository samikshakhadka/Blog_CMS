import React from "react";
import "../styles/Blog.css";

function Blog({ blog, onDelete, onEdit }) {
    const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US");

    return (
        <div className="blog-container">
            <p className="blog-title">{blog.title}</p>
            <p className="blog-content">{blog.content}</p>
            <p className="blog-date">{formattedDate}</p>
            <div className="blog-buttons">
                <button className="delete-button" onClick={() => onDelete(blog.id)}>
                    Delete
                </button>
                <button className="edit-button" onClick={() => onEdit(blog.id)}>
                    Edit
                </button>
            </div>
        </div>
    );
}

export default Blog;
