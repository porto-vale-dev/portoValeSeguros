"use client";

import { useEffect, useRef, useState } from 'react';
import { blipChatService } from '@/lib/blip-chat.service';
import './blip-chat.css';

const BlipChat = () => {
  const blipContainerRef = useRef<HTMLDivElement>(null);
  const [messages] = useState(['<b>Black Porto</b>. Parcelas 40% menores + 0% de adesão.']);
  const [messagesOption] = useState(['Quero fazer uma simulação!', 'Quero saber mais']);
  const messageDelay = 1000;

  let messageBubble: HTMLDivElement | null = null;
  let messageOptionContainer: HTMLUListElement | null = null;
  let containerMessage: HTMLDivElement | null = null;

  useEffect(() => {
    blipChatService.loadScript().then(() => {
      init();
    }).catch(error => {
      console.warn('Erro ao carregar script do Blip Chat:', error);
    });
  }, []);

  const init = () => {
    blipChatService.init();
    mount();
    addContainerMessage();
    addMessageBubbleIfAny();
  };

  const mount = () => {
    blipChatService.onEnter(() => {
      removeMessages();
    });

    blipChatService.onLoad(() => {
      removeMessages();
      const widget = blipChatService.getWidget();
      const content = blipChatService.tt?.trim() ? blipChatService.tt : 'Oi';
      setTimeout(() => {
        try {
          widget.sendMessage({ type: 'text/plain', content });
        } catch (e) {
          console.warn('Falha ao enviar mensagem no load:', e);
        }
      }, 200);
    });
  };

  const addContainerMessage = () => {
    if (!containerMessage && blipContainerRef.current) {
      containerMessage = document.createElement('div');
      containerMessage.classList.add('containerMessage');
      blipContainerRef.current.appendChild(containerMessage);
    }
  };

  const addMessageBubbleIfAny = () => {
    if (messages.length > 0) {
      setTimeout(() => addMessageBubble(), messageDelay);
    }
  };

  const addMessageBubble = () => {
    if (containerMessage) {
        messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble');
        messageBubble.setAttribute('id', 'bubble');

        messages.forEach(m => {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('textContainer');
            const span = document.createElement('span');
            span.innerHTML = m;
            msgDiv.appendChild(span);
            messageBubble?.appendChild(msgDiv);
        });

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close-button');
        messageBubble.appendChild(closeBtn);

        closeBtn.addEventListener('click', (event: Event) => {
            event.stopPropagation();
            removeMessages();
        });

        containerMessage.appendChild(messageBubble);
        addOptionMessage();
    }
  };

  const addOptionMessage = () => {
    if (containerMessage) {
        if (messageOptionContainer) {
            containerMessage.removeChild(messageOptionContainer);
            messageOptionContainer = null;
        }

        messageOptionContainer = document.createElement('ul');
        messageOptionContainer.classList.add('option-message');

        messagesOption.forEach(opt => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = opt;

            a.addEventListener('click', (e: Event) => {
                e.stopPropagation();
                if (messageOptionContainer && containerMessage && messageOptionContainer.parentNode === containerMessage) {
                    containerMessage.removeChild(messageOptionContainer);
                    messageOptionContainer = null;
                }
                destroyAndStart(opt);
            });

            li.appendChild(a);
            messageOptionContainer.appendChild(li);
        });

        containerMessage.appendChild(messageOptionContainer);
    }
  };

  const destroyAndStart = (param: string) => {
    blipChatService.reload(param);
    removeMessages();
  };

  const removeMessages = () => {
    if (messageBubble && containerMessage) {
        if (messageBubble.parentNode === containerMessage) {
            containerMessage.removeChild(messageBubble);
        }
        messageBubble = null;
    }
    if (messageOptionContainer && containerMessage) {
        if (messageOptionContainer.parentNode === containerMessage) {
            containerMessage.removeChild(messageOptionContainer);
        }
        messageOptionContainer = null;
    }
  };

  return <div ref={blipContainerRef} id="blip-chat-container"></div>;
};

export default BlipChat;
