import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            <Form route="/api/user/register" method="register" />
            <p style={{ textAlign: "center", marginTop: "10px" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "red" }}>
                    Login
                </Link>
            </p>
        </div>
    );
}

export default Register;
