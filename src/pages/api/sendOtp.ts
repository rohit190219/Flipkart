// pages/api/sendOtp.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface SendOtpRequest {
  phoneNumber: string;
}

interface SendOtpResponse {
  success: boolean;
  message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<SendOtpResponse>) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { phoneNumber } = req.body as SendOtpRequest;

  if (!phoneNumber) {
    return res.status(400).json({ success: false, message: 'Phone number is required' });
  }

  // Simulate OTP generation
  const otp = Math.floor(100000 + Math.random() * 900000);

  // Save OTP and phoneNumber in database or memory for verification
  console.log(`OTP for ${phoneNumber}: ${otp}`);

  res.status(200).json({ success: true, message: 'OTP sent successfully.' });
};

export default handler;