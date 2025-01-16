// pages/signup.js
import { useState } from "react";

export default function Signup() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async () => {
        const response = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phoneNumber }),
        });
        const data = await response.json();
        if (data.success) {
            setMessage("Signup successful!");
        } else {
            setMessage(data.message);
        }
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
            <h1>Signup</h1>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
            <p>{message}</p>
        </div>
    );
}
