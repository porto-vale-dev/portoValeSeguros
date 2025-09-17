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

export async function simulateCredit(data: any) {
    console.log("New credit simulation:", data);
  
    try {
      // 1. Salvar dados no Firestore (simulação)
      // Em um app real, você descomentaria esta parte
      /*
      const ref = await addDoc(collection(db, "simulacoes"), {
        ...data,
        dataCriacao: new Date(),
      });
      console.log("Simulação salva com ID:", ref.id);
      */
      
      // Simular delay da rede
      await new Promise(resolve => setTimeout(resolve, 1500));
  
      // 2. Chamar Cloud Function (simulação de parcelas)
      // Aqui simulamos a lógica da sua Cloud Function
      const { valorDesejado, prazo } = data;
      const taxaJuros = "1.59% a.m. + IPCA";
  
      // Exemplo simplificado: PRICE (valor alto inicial, menor no fim)
      const parcelaInicial = (valorDesejado * 0.028).toFixed(2); 
      const parcelaFinal = (valorDesejado / prazo).toFixed(2);
      
      const resultado = {
        parcelaInicial: parseFloat(parcelaInicial).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        parcelaFinal: parseFloat(parcelaFinal).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        taxaJuros,
      };
  
      return { success: true, data: resultado };
  
    } catch (error) {
      console.error("Erro ao salvar simulação:", error);
      return { success: false, error: "Não foi possível realizar a simulação. Tente novamente." };
    }
}

    