
"use client";

import { useEffect, useRef, useState } from 'react';
import { blipChatService } from '@/lib/blip-chat.service';
import './blip-chat.css';

const BlipChat = () => {
  const blipContainerRef = useRef<HTMLDivElement>(null);
  const [messages] = useState(['<b>Black Porto</b>. Parcelas 40% menores + 0% de adesão.']);
  const [messagesOption] = useState(['Quero fazer uma simulação!', 'Quero saber mais']);
  const messageDelay = 1000;

  // Usando refs para evitar problemas com closures em event listeners
  const messageBubbleRef = useRef<HTMLDivElement | null>(null);
  const messageOptionContainerRef = useRef<HTMLUListElement | null>(null);
  const containerMessageRef = useRef<HTMLDivElement | null>(null);

  const removeMessages = () => {
    const container = containerMessageRef.current;
    if (messageBubbleRef.current && container && messageBubbleRef.current.parentNode === container) {
        container.removeChild(messageBubbleRef.current);
        messageBubbleRef.current = null;
    }
    if (messageOptionContainerRef.current && container && messageOptionContainerRef.current.parentNode === container) {
        container.removeChild(messageOptionContainerRef.current);
        messageOptionContainerRef.current = null;
    }
  };
  
  const destroyAndStart = (param: string) => {
    blipChatService.reload(param);
    removeMessages();
  };
  
  const addOptionMessage = () => {
    const container = containerMessageRef.current;
    if (!container) return;

    if (messageOptionContainerRef.current) {
        container.removeChild(messageOptionContainerRef.current);
        messageOptionContainerRef.current = null;
    }

    const optionContainer = document.createElement('ul');
    optionContainer.classList.add('option-message');

    messagesOption.forEach(opt => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = opt;

        a.addEventListener('click', (e: Event) => {
            e.stopPropagation();
            destroyAndStart(opt);
        });

        li.appendChild(a);
        optionContainer.appendChild(li);
    });

    container.appendChild(optionContainer);
    messageOptionContainerRef.current = optionContainer;
  };
  
  const addMessageBubble = () => {
    const container = containerMessageRef.current;
    if (!container) return;

    const bubble = document.createElement('div');
    bubble.classList.add('message-bubble');
    bubble.setAttribute('id', 'bubble');

    messages.forEach(m => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('textContainer');
        const span = document.createElement('span');
        span.innerHTML = m;
        msgDiv.appendChild(span);
        bubble.appendChild(msgDiv);
    });

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-button');
    bubble.appendChild(closeBtn);

    closeBtn.addEventListener('click', (event: Event) => {
        event.stopPropagation();
        removeMessages();
    });

    container.appendChild(bubble);
    messageBubbleRef.current = bubble;
    addOptionMessage();
  };

  useEffect(() => {
    blipChatService.loadScript().then(() => {
        
        blipChatService.init();

        const addContainerMessage = () => {
            if (!containerMessageRef.current && blipContainerRef.current) {
                const container = document.createElement('div');
                container.classList.add('containerMessage');
                blipContainerRef.current.appendChild(container);
                containerMessageRef.current = container;
            }
        };

        const addMessageBubbleIfAny = () => {
            // Garante que não adicionará se já existir
            if (messages.length > 0 && !messageBubbleRef.current) {
                setTimeout(() => addMessageBubble(), messageDelay);
            }
        };
        
        const onBlipChatEnter = () => {
            removeMessages();
        };

        const onBlipChatLoad = () => {
          removeMessages();
          const widget = blipChatService.getWidget();
          const content = blipChatService.tt?.trim() ? blipChatService.tt : 'Oi';
          setTimeout(() => {
            try {
              if (widget && typeof widget.sendMessage === 'function') {
                widget.sendMessage({ type: 'text/plain', content });
              }
            } catch (e) {
              console.warn('Falha ao enviar mensagem no load:', e);
            }
          }, 200);
        };

        addContainerMessage();
        addMessageBubbleIfAny();
        
        window.addEventListener('blip-chat-enter', onBlipChatEnter);
        window.addEventListener('blip-chat-load', onBlipChatLoad);

        // Cleanup
        return () => {
            window.removeEventListener('blip-chat-enter', onBlipChatEnter);
            window.removeEventListener('blip-chat-load', onBlipChatLoad);
        }

    }).catch(error => {
      console.warn('Erro ao carregar script do Blip Chat:', error);
    });
  }, [messages, messagesOption]); // Dependências

  return <div ref={blipContainerRef} id="blip-chat-container"></div>;
};

export default BlipChat;
