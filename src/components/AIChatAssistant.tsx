import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, Phone, RefreshCw, ChevronRight, Zap, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { trackConversion } from '../utils/analytics';
import { AIChatMessage } from '../types';

interface AIChatAssistantProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const AIChatAssistant: React.FC<AIChatAssistantProps> = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! I am Expert Tech AI Advisor. How can I help you save energy & secure your property in Chhatrapati Sambhajinagar today?',
      timestamp: 'Just now',
      quickReplies: [
        '☀️ Solar System Cost & Subsidy',
        '📹 CCTV Camera Requirement',
        '🛠️ CCTV / Solar AMC Repair',
        '📞 Book Free Site Survey'
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (userQuery?: string) => {
    const textToSend = userQuery || inputText;
    if (!textToSend.trim()) return;

    const userMsg: AIChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userQuery) setInputText('');

    // Generate AI Smart Response Logic
    setTimeout(() => {
      let botResponse = '';
      let quickReplies: string[] | undefined = undefined;

      const lower = textToSend.toLowerCase();

      if (lower.includes('solar') || lower.includes('subsidy') || lower.includes('bill')) {
        botResponse = '☀️ Great choice! Under PM Surya Ghar Muft Bijli Yojana, a 3kW Solar Rooftop system gives you up to ₹78,000 subsidy in Chhatrapati Sambhajinagar and reduces monthly electricity bills by ~90%! What is your monthly bill?';
        quickReplies = ['Bills ₹2000 - ₹4000/month', 'Bills ₹4000 - ₹8000/month', 'Commercial / Factory (>₹10,000)', 'Connect on WhatsApp'];
      } else if (lower.includes('cctv') || lower.includes('camera') || lower.includes('security')) {
        botResponse = '📹 For crisp surveillance, we recommend 4K IP cameras with ColorVu 24/7 full-color night vision. We provide 4-camera, 8-camera, and 16-camera complete packages with concealed wiring and mobile app viewing.';
        quickReplies = ['Home (2 to 4 Cameras)', 'Shop / Store (4 to 8 Cameras)', 'Factory / Campus (8 to 16+ Cams)', 'Connect on WhatsApp'];
      } else if (lower.includes('amc') || lower.includes('repair') || lower.includes('maintenance')) {
        botResponse = '🛠️ We offer complete CCTV AMC repair and Solar Panel Washing packages in Garkheda, CIDCO, Waluj, Beed Bypass, and all areas of Chh. Sambhajinagar with 6-hour response SLA.';
        quickReplies = ['Request CCTV Repair Visit', 'Solar Panel Cleaning Plan', 'Connect on WhatsApp'];
      } else if (lower.includes('bill') || lower.includes('2000') || lower.includes('4000') || lower.includes('8000')) {
        botResponse = '⚡ Based on your electricity bill, a 2kW to 3kW Solar System is ideal. Your net cost after ₹78,000 subsidy will be approx ₹60,000 - ₹75,000 with a 3-year ROI payback! Would you like a free site survey?';
        quickReplies = ['Yes, Book Free Site Survey', 'Send Detailed PDF Quote', 'Talk to Engineer'];
      } else if (lower.includes('survey') || lower.includes('book') || lower.includes('quote') || lower.includes('yes')) {
        botResponse = 'Awesome! Click below to send your site location via WhatsApp or open our Free Site Survey form for Chhatrapati Sambhajinagar.';
        quickReplies = ['Connect on WhatsApp', 'Open Quote Form'];
      } else {
        botResponse = 'I can help you calculate solar rooftop capacity, choose 4K CCTV cameras, or arrange a Free Site Survey in Chhatrapati Sambhajinagar. What service are you interested in?';
        quickReplies = ['☀️ Solar Power', '📹 CCTV Cameras', '📞 Talk to Human Engineer'];
      }

      const botMsg: AIChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: 'Just now',
        quickReplies
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleQuickReply = (reply: string) => {
    if (reply === 'Connect on WhatsApp') {
      trackConversion.clickWhatsApp('ai_chat_widget');
      const msg = `Hi Expert Technologies AI Assistant, I need consultation for my property in Chhatrapati Sambhajinagar.`;
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
      return;
    }

    if (reply === 'Open Quote Form' || reply === 'Yes, Book Free Site Survey') {
      setIsOpen(false);
      onOpenQuoteModal('Solar + CCTV Combo');
      return;
    }

    handleSendMessage(reply);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-5 z-40 p-3.5 rounded-full bg-slate-900 text-white shadow-2xl hover:bg-slate-800 border border-slate-700 flex items-center gap-2 group transition-all duration-300 hover:scale-105"
        aria-label="Open AI Solar & CCTV Chat Advisor"
      >
        <div className="relative">
          <Bot className="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
        <span className="hidden sm:inline-block text-xs font-bold pr-1">AI Assistant</span>
      </button>

      {/* Chat Window Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px] animate-fade-in">
          {/* Chat Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Expert Tech AI Advisor</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-500/30">Online</span>
                </h4>
                <div className="text-[11px] text-slate-400">Solar & CCTV Instant Guidance</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Quick Reply Pills */}
                {msg.quickReplies && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs bg-white hover:bg-blue-50 border border-blue-200 text-blue-900 font-semibold px-2.5 py-1.5 rounded-xl transition-all shadow-2xs hover:shadow-sm"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything about Solar or CCTV..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
