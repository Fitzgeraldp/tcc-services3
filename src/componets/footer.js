import React from "react";

export default function Footer() {
    return (
        <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#f1f1f1" }}>
            <p>&copy; {new Date().getFullYear()} The Coding Commando. All rights reserved.</p>
        </footer>
    );
}