"use server";

export async function submitContactForm(data: { name: string; email: string; message: string; }) {
    console.log("New contact form submission:", data);
    // In a real application, you would add logic here to send an email,
    // save to a database, or integrate with a CRM.
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate a potential error
    if (data.email.includes("error")) {
        throw new Error("Simulated server error.");
    }

    console.log("Contact form processed successfully.");
    return { success: true, message: "Message received!" };
}
