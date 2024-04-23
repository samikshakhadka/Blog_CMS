import React, { useState, useEffect } from "react";
import api from "../api";
import Blog from "../components/Blog";
import EditBlog from "../components/EditBlog";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Home.css";

function Home() {
    const [blogs, setBlogs] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = () => {
        api
            .get("/api/blogs/")
            .then((res) => res.data)
            .then((data) => {
                setBlogs(data);
                console.log(data);
            })
            .catch((err) => toast.error(err.message));
    };

    const confirmDelete = (id) => {
        const confirmation = window.confirm("Are you sure you want to delete this blog?");
        if (confirmation) {
            deleteBlog(id);
        }
    };

    const deleteBlog = (id) => {
        api
            .delete(`/api/blogs/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    getBlogs();
                    toast.success("Blog deleted successfully!", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                } else {
                    toast.error("Failed to delete blog.");
                }
            })
            .catch((error) => toast.error(error.message));
    };

    const createBlog = (e) => {
        e.preventDefault();
        api
            .post("/api/blogs/", { content, title })
            .then((res) => {
                if (res.status === 201) {
                    toast.success("Blog created successfully!", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                    setContent("");
                    setTitle("");
                    getBlogs();
                } else {
                    toast.error("Failed to create blog.");
                }
            })
            .catch((err) => toast.error(err.message));
    };

    const editBlog = (id) => {
        setEditingId(id);
    };

    const cancelEdit = () => {
        setEditingId(null);
    };

    const handleEditSuccess = () => {
        setEditingId(null);
        getBlogs();
    };

    return (
        <div className="container">
            <div className="blogs-section">
                <h2>Blogs</h2>
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        {editingId === blog.id ? (
                            <EditBlog
                                blog={blog}
                                onCancel={cancelEdit}
                                onEditSuccess={handleEditSuccess}
                            />
                        ) : (
                            <Blog
                                blog={blog}
                                onDelete={() => confirmDelete(blog.id)}
                                onEdit={editBlog} // Pass the editBlog function as prop
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="create-blog-section">
                <h2>Create a Blog</h2>
                <form onSubmit={createBlog}>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title..."
                    />
                    <label htmlFor="content">Content:</label>
                    <br />
                    <textarea
                        id="content"
                        name="content"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter content..."
                    ></textarea>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Home;
