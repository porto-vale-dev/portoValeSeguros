
"use server";

export async function submitQuoteForm(data: any) {
    console.log("New quote submission:", data);
  
    try {
      // Enviar dados para o webhook
      try {
        const webhookUrl = 'https://n8n.portovaleconsorcio.com.br/webhook/porto-vale-seguros';
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
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      return { success: true, message: "Cotação enviada com sucesso! Em breve entraremos em contato." };
  
    } catch (error) {
      console.error("Erro ao enviar cotação:", error);
      return { success: false, error: "Não foi possível enviar sua cotação. Tente novamente." };
    }
}
