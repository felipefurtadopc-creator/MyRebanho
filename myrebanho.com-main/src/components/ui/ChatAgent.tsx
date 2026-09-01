'use client';
import { useState } from 'react';

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Olá! Como posso ajudar a otimizar sua gestão pecuária?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    if ((window as any).sendMessageToAgent) {
  const reply = await (window as any).sendMessageToAgent(userMsg);
  setMessages((prev) => [...prev, { sender: 'bot', text: reply || 'Erro de conexão.' }]);
  }
  };

  return (
    <div className="fixed bottom-[120px] right-6 z-50 font-sans">
      {!isOpen ? (
        // Botão flutuante usando a cor vermelha/telha do site
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-[#a63c2e] hover:bg-[#8a3125] text-white p-4 rounded-full shadow-2xl transition-all border border-[#d6aa63]/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      ) : (
        <div className="bg-[#1c1b19] border border-[#d6aa63]/30 rounded-lg shadow-2xl w-80 sm:w-[350px] h-[32rem] flex flex-col overflow-hidden">
          
          {/* Header (Cabeçalho do Chat) */}
          <div className="bg-[#a63c2e] text-[#f4f4f4] p-4 flex justify-between items-center border-b border-[#d6aa63]/20">
            <span className="font-semibold tracking-wide">MyAssistent</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-[#d6aa63] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Body (Área de Mensagens) */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-[#121212]">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`p-3 rounded-lg max-w-[85%] text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-[#d6aa63] text-black self-end rounded-br-none font-medium' // Cor mostarda do usuário
                    : 'bg-[#2a2a2a] text-[#e0e0e0] self-start rounded-bl-none border border-[#d6aa63]/10' // Cor chumbo do bot
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area (Campo de Digitação) */}
          <div className="p-3 bg-[#1c1b19] border-t border-[#d6aa63]/20 flex gap-2">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-[#2a2a2a] text-[#e0e0e0] border border-[#444] focus:border-[#d6aa63] rounded-md p-2 text-sm outline-none transition-colors placeholder-gray-500"
              placeholder="Sua mensagem..."
            />
            <button 
              onClick={handleSend} 
              className="bg-[#d6aa63] hover:bg-[#c49a56] text-black px-4 py-2 rounded-md font-semibold text-sm transition-colors"
            >
              Enviar
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
