import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../constants";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `
You are the AI Assistant for Vikas Dongre's Portfolio. 
Vikas is a Full Stack Developer based in Bhopal, India, specializing in high-end MERN applications and scalable cloud architecture.

Available Projects in this portfolio:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(", ")})`).join("\n")}

Services Offered:
1. Full-Stack Engineering: Scalable MERN Solutions.
2. Dynamic Commerce: High-Conversion Storefronts (Razorpay integration).
3. Intelligent Infrastructure: AI & Cloud Deployment (Face API.js, AWS ECS Fargate).

Your tone should be:
- Professional yet approachable.
- Technical and precise.
- Helpful in answering questions about Vikas's work, experience, or how to contact him.
- Brief and concise, matching the minimalist aesthetic of the site.

If a user asks about a problem they face in the portfolio (e.g., "how do I see the demo?"), guide them politely.
Contact info: vikasdongre952@gmail.com
LinkedIn: https://www.linkedin.com/in/vikas-dongre-86370128b/
GitHub: https://github.com/Vikasdongrepawar

Always identify yourself as "Vikas's AI Assistant".
`;

export default function AIBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Vikas's AI assistant. How can I help you explore his work today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: SYSTEM_PROMPT + "\n\nUser Question: " + userMessage })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response from backend");
      }

      const aiText = data.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: "assistant", content: aiText }]);
    } catch (error: any) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Error: " + (error.message || "Unknown error") }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-2xl transition-all"
      >
        <span className="material-symbols-outlined text-white text-[28px]">
          {isOpen ? "close" : "smart_toy"}
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-[100] w-[350px] md:w-[400px] h-[500px] bg-[#1d1d1f]/90 backdrop-blur-2xl border border-white/10 rounded-apple shadow-3xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[18px]">temp_preferences_custom</span>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold tracking-tight">AI Assistant</h4>
                <p className="text-[10px] text-[#86868b] uppercase tracking-widest font-bold">Always Active</p>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-primary text-white" 
                      : "bg-white/5 text-[#f5f5f7] border border-white/10"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 px-4 py-3 rounded-2xl flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about my projects..."
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all pr-12"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center disabled:opacity-30 disabled:grayscale transition-all"
                >
                  <span className="material-symbols-outlined text-white text-[18px]">arrow_upward</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
