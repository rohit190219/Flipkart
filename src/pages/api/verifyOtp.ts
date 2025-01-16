// pages/api/verifyOtp.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface VerifyOtpRequest {
  phoneNumber: string;
  otp: string;
}

interface VerifyOtpResponse {
  success: boolean;
  message: string;
}

const verifyOtp = async (req: NextApiRequest, res: NextApiResponse<VerifyOtpResponse>) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { phoneNumber, otp }: VerifyOtpRequest = req.body;

  if (!phoneNumber || !otp) {
    return res.status(400).json({ success: false, message: 'Phone number and OTP are required' });
  }

  // Check OTP in the database or memory
  console.log(`Verifying OTP ${otp} for ${phoneNumber}`);

  // Simulate a valid OTP check
  if (otp === "123456") {
    return res.status(200).json({ success: true, message: "OTP verified." });
  } else {
    return res.status(400).json({ success: false, message: "Invalid OTP." });
  }
};

export default verifyOtp;
