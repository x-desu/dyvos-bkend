import nodemailer from 'nodemailer'

export const postemail = (req,res,next) => {
    
    const {name,email,message} = req.body
    console.log(name)
    const transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
        auth: {
          user:"api",
          pass:process.env.PASS,
        },
      });

      const mailOptions = {
        from: "info@dyvostech.com",    // sender's email address
        to: 'info@dyvostech.com',        // recipient's email address
        subject: `Email from ${name}`,
        text: message,
        replyTo:email,
        
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          
          res.status(500).json({error})
        } else {
          
          res.status(200).json("email sent")
        }
      });
    
}