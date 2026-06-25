
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
  private isOptionPending = false;
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
        this.isOptionPending = true;
        // OnLoad fires when the widget finishes connecting — send the message then.
        newWidget.withEventHandler('OnLoad', () => {
          setTimeout(() => {
            try {
              newWidget.sendMessage({ type: 'text/plain', content: openAndSendMessage });
            } catch (e) {
              console.warn('Falha ao enviar mensagem no reload:', e);
            }
            this.isOptionPending = false;
          }, 500);
        });
      }

      // OnEnter fires whenever the chat opens (user click or toogleChat).
      // Skip when an option message is already being handled to avoid sending 'Oi' on top of it.
      newWidget.withEventHandler('OnEnter', () => {
        if (!this.isOptionPending) {
          window.dispatchEvent(new Event('blip-chat-enter'));
        }
      });

      newWidget.build();
      this.widget = newWidget;

      // Open the chat immediately after build for option clicks — same pattern as reference.
      if (openAndSendMessage) {
        newWidget.toogleChat(true);
      }
    }
  }

  public init() {
    this.createWidget();
  }

  public getWidget() {
    return this.widget;
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
    this.createWidget(param);
  }
}

export const blipChatService = new BlipChatService();
