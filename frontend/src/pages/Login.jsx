import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
            <p style={{ textAlign: "center", marginTop: "10px" }}>
                Don't have an account?{" "}
                <Link to="/register" style={{ color: "red" }}>
                    Register
                </Link>
            </p>
        </div>
    );
}

export default Login;
