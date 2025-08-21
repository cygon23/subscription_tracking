import nodemailer from "nodemailer";
import { EMAIL_PASS } from "../config/env.js";

export const accountEmail = "newkoko827@gmail.com";

const transporter = nodemailer.createTransport({
  serve: "gmail",
  auth: {
    user: accountEmail,
    pass: EMAIL_PASS,
  },
});

export default transporter;
