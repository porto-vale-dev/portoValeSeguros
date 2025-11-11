"use server";

import { db } from '@/lib/firebase';
import { addDoc, collection } from 'firebase/firestore';

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

export async function submitQuoteForm(data: any) {
    console.log("New quote submission:", data);
  
    try {
      // Enviar dados para o webhook
      try {
        const webhookUrl = 'https://n8n.portovaleconsorcio.com.br/webhook-test/8cf18544-6e51-4f72-b5df-91f59cf7b08d';
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        console.log("Webhook sent successfully.");
      } catch (webhookError) {
        console.error("Error sending webhook:", webhookError);
        // Não interrompa o fluxo principal se o webhook falhar
      }
      
      // Simular delay da rede
      await new Promise(resolve => setTimeout(resolve, 1500));
  
      return { success: true, message: "Cotação enviada com sucesso! Em breve entraremos em contato." };
  
    } catch (error) {
      console.error("Erro ao enviar cotação:", error);
      return { success: false, error: "Não foi possível enviar sua cotação. Tente novamente." };
    }
}
