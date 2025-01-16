// pages/login.js
import { useState } from "react";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState("");

    const sendOtp = async () => {
        const response = await fetch("/api/sendOtp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phoneNumber }),
        });
        const data = await response.json();
        if (data.success) {
            setOtpSent(true);
            setMessage("OTP sent successfully!");
        } else {
            setMessage(data.message);
        }
    };

    const verifyOtp = async () => {
        const response = await fetch("/api/verifyOtp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phoneNumber, otp }),
        });
        const data = await response.json();
        if (data.success) {
            setMessage("Logged in successfully!");
        } else {
            setMessage("Invalid OTP. Please try again.");
        }
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
            <h1>Login</h1>
            <div>
                <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    disabled={otpSent}
                />
                <button onClick={sendOtp} disabled={otpSent}>
                    Send OTP
                </button>
            </div>
            {otpSent && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={verifyOtp}>Verify OTP</button>
                </div>
            )}
            <p>{message}</p>
        </div>
    );
}
