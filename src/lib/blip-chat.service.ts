
declare global {
  interface Window {
    BlipChat: any;
    blipClient: any;
  }
}

class BlipChatService {
  private scriptLoaded = false;
  private widget: any;
  public tt: string | null = null;
  private readonly APP_KEY = 'dGVzdGUydGVzdGU6MTZkYTU5MWMtNzA1NS00NzQ1LWE1MGEtYzhiMmVjZTQ4MmU4';
  private readonly BLIP_CHAT_URL = 'https://portovale.chat.blip.ai/';

  public loadScript(): Promise<void> {
    if (this.scriptLoaded) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/blip-chat-widget';
      script.async = true;
      script.onload = () => {
        this.scriptLoaded = true;
        resolve();
      };
      script.onerror = (error) => {
        console.error('Blip Chat script not loaded', error);
        reject(error);
      };
      document.body.appendChild(script);
    });
  }

  private createWidget(openAndSendMessage?: string) {
    if (window.BlipChat) {
      const newWidget = new window.BlipChat()
        .withAppKey(this.APP_KEY)
        .withButton({ color: '#0c4ec0' })
        .withCustomCommonUrl(this.BLIP_CHAT_URL);

      if (openAndSendMessage) {
        newWidget.withEventHandler(newWidget.LOAD_EVENT, () => {
          setTimeout(() => {
            try {
              newWidget.sendMessage({ type: 'text/plain', content: openAndSendMessage });
            } catch (e) {
                console.warn('Falha ao enviar mensagem no reload:', e);
            }
          }, 500); // Adiciona um pequeno delay para garantir que o chat está pronto
        });
      }

      newWidget.build();
      this.widget = newWidget;

      if(openAndSendMessage) {
        this.widget.toogleChat(true);
      }
    }
  }

  public init() {
    this.createWidget();
  }

  public getWidget() {
    return this.widget;
  }

  public onEnter(callback: () => void) {
    if (this.widget && this.widget.withEventHandler) {
        this.widget.withEventHandler('enter', callback);
    }
  }

  public onLoad(callback: () => void) {
    if (this.widget && this.widget.withEventHandler) {
        this.widget.withEventHandler('load', callback);
    }
  }

  public reload(param: string) {
    this.tt = param;
    if (this.widget) {
      try {
        this.widget.destroy();
      } catch (e) {
        console.warn('Falha ao destruir o widget:', e);
      }
    }
    // Cria um novo widget, abre e envia a mensagem
    this.createWidget(param);
  }
}

export const blipChatService = new BlipChatService();
