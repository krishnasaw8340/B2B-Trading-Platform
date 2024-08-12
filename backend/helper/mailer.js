import bcryptjs from 'bcryptjs'
import nodemailer from 'nodemailer'
import userModel from '../model/users.js'
import dotenv from 'dotenv'


const mailerUser = '45c33828c42c51'
const mailePass = 'd061ae0f8bf206'


export const sendMail = async(email, emailType, userId)=>{
    try{
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)
        if (emailType === "VERIFY")
            {
                await userModel.findByIdAndUpdate(userId,
                    {verifyToken:hashedToken,
                        verifyTokenExpiry:Date.now() + 600000
                    }
                )
            }
        else if (emailType === "RESET")
            {
                await userModel.findByIdAndUpdate(userId,{
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 600000
                })
            }
            var transport = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: mailerUser,
                  pass: mailePass
                }
              });

            const mailOptions = {
                from: 'way2agribusiness@gmail.com',
                to : email,
                subject: emailType === 'VERIFY' ? 'Verify your email'  : 'Reset your password',
                html: `<p>Click <a href=http://localhost:3000/${emailType === "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}>here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"} or copy and paste the link below in your browser.<br>http://localhost:3000/${emailType === "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}</p>`
            }
            const mailResponse = await transport.sendMail(mailOptions);
            return mailResponse
    }
    catch(err)
    {
        console.log("Error in sendMail")
        throw new Error(err.message)
    }
}