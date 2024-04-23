import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../api";
import Blog from "./Blog";
function EditBlog({ blog, onCancel, onEditSuccess }) {
    const [editContent, setEditContent] = useState(blog.content);
    const [editTitle, setEditTitle] = useState(blog.title);

    const handleEdit = () => {
        api
            .put(`/api/blogs/edit/${blog.id}/`, { content: editContent, title: editTitle })
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Blog updated successfully!", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                    onEditSuccess();
                } else {
                    toast.error("Failed to update blog.");
                }
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <div className="edit-blog-container">
            <h2>Edit Blog</h2>
            <label htmlFor="editTitle">Edit Title:</label>
            <br />
            <input
                type="text"
                id="editTitle"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Enter updated title..."
            />
            <br />
            <label htmlFor="editContent">Edit Content:</label>
            <br />
            <textarea
                id="editContent"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="Enter updated content..."
            ></textarea>
            <br />
            <div className="edit-buttons">
                <button onClick={handleEdit}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default EditBlog;
