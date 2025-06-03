"use server"
import { Resend } from "resend"
import { z } from "zod"

const apiKey = process.env.RESEND_API_KEY2 ?? '';
const resend = new Resend(apiKey);

export async function SendForm(prevState:{message:string}, 
  formData:FormData
) {
 const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    company: z.string().min(1, "Company name is required"),
    phone: z.string().min(1, "Phone number is required"),
    message: z.string().min(1, "Message is required")
 })
 const parse = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    phone: formData.get("phone"),
    message: formData.get("message")
 })
 if(!parse.success) {
    return {message: "Please fill all required fields correctly"}
 }
 try {
    const {name, phone, email, message, company} = parse.data;
    const {error} = await resend.emails.send({
      from: "SimpliP2P Demo <onboarding@resend.dev>",
      to: "supremozee14@gmail.com",
      subject: `Demo Request: ${company} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #333;">Simplip2p Demo Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h3 style="color: #555;">Additional Information:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 3px;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="color: #888; font-size: 14px;">Please contact this customer to schedule their demo at your earliest convenience.</p>
        </div>
      `
    });
    
    if(error) {
      console.error("Failed to send demo request:", error);
      return {message: "error"}
    }
    
    return {message: "success"}
   
 } catch (error) {
    console.error("Unexpected error:", error);
    return {message: "error"}
 }
}