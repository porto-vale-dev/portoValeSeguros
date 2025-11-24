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

  public init() {
    if (window.BlipChat) {
      this.widget = new window.BlipChat()
        .withAppKey('dGVzdGUydGVzdGU6MTZkYTU5MWMtNzA1NS00NzQ1LWE1MGEtYzhiMmVjZTQ4MmU4')
        .withButton({ color: '#25D366' })
        .withCustomCommonUrl('https://portovale.chat.blip.ai/')
        .build();
    }
  }

  public getWidget() {
    return this.widget;
  }

  public onEnter(callback: () => void) {
    window.addEventListener('blip-chat-enter', callback);
  }

  public onLoad(callback: () => void) {
    window.addEventListener('blip-chat-loaded', callback);
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
    this.init();
  }
}

export const blipChatService = new BlipChatService();
