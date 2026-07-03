import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Paperclip, Smile, Mic, Maximize2, Minimize2 } from "lucide-react";
import { useLocale } from "./i18n";

type Msg = { id: number; role: "user" | "bot"; text: string; time: string };

const INIT: Msg[] = [
  { id: 1, role: "bot", text: "Hello! I'm Sky, your Airavia assistant. I can help with bookings, flight status, upgrades, and lounge access. How can I assist you today?", time: "now" },
];

const BOT_REPLIES = [
  "I've found your booking. Would you like to upgrade to Business Class on that route?",
  "Your boarding pass has been sent to your registered email.",
  "Is there anything else I can help you with today?",
  "I can also assist with lounge access, meal preferences, or baggage.",
];

export function SkyChatFloat() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(INIT);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [replyIdx, setReplyIdx] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const send = () => {
    if (!input.trim()) return;
    const now = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    setMsgs((m) => [...m, { id: Date.now(), role: "user", text: input, time: now }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { id: Date.now() + 1, role: "bot", text: BOT_REPLIES[replyIdx % BOT_REPLIES.length], time: now }]);
      setReplyIdx((i) => i + 1);
    }, 1300);
  };

  const quickReplies = [t("chat_quick1"), t("chat_quick2"), t("chat_quick3")];

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#001F6B] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl text-sm font-semibold hover:bg-[#002B8F] transition-colors"
        >
          <div className="w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center">
            <Bot size={13} className="text-[#001F6B]" />
          </div>
          Ask Sky
          <span className="w-2 h-2 rounded-full bg-[#2EC074]" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col bg-card border border-border rounded-lg shadow-2xl overflow-hidden w-[360px]" style={{ height: 480 }}>
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#001F6B] shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0">
              <Bot size={15} className="text-[#001F6B]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white leading-none">Sky — Airavia Assistant</p>
              <p className="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2EC074]" />
                Online
              </p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#F4F6FB]">
            {msgs.map((m) => (
              <div key={m.id} className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                {m.role === "bot" ? (
                  <div className="w-6 h-6 rounded-full bg-[#001F6B] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={12} className="text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#001F6B] text-white text-[9px] font-semibold flex items-center justify-center shrink-0 mt-0.5">MD</div>
                )}
                <div className={`max-w-[78%] px-3 py-2 rounded text-xs leading-relaxed ${m.role === "user" ? "bg-[#001F6B] text-white rounded-tr-none" : "bg-card text-foreground border border-border rounded-tl-none shadow-sm"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-[#001F6B] flex items-center justify-center shrink-0">
                  <Bot size={12} className="text-white" />
                </div>
                <div className="bg-card border border-border px-3 py-2.5 rounded rounded-tl-none shadow-sm flex gap-1 items-center">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1 h-1 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1 h-1 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          <div className="px-3 py-2 border-t border-border flex gap-1.5 overflow-x-auto shrink-0 bg-background">
            {quickReplies.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setInput(q)}
                className="shrink-0 text-[10px] px-2.5 py-1 rounded-full border border-border bg-card text-foreground hover:bg-[#E6ECF8] hover:border-[#001F6B]/30 transition-colors font-medium whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-3 pb-3 pt-1.5 border-t border-border flex items-center gap-2 bg-card shrink-0">
            <button type="button" className="text-muted-foreground hover:text-foreground transition-colors"><Paperclip size={14} /></button>
            <button type="button" className="text-muted-foreground hover:text-foreground transition-colors"><Smile size={14} /></button>
            <input
              className="flex-1 bg-muted rounded px-3 py-1.5 text-xs outline-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30"
              placeholder={t("chat_placeholder")}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
            />
            <button type="button" className="text-muted-foreground hover:text-foreground transition-colors"><Mic size={14} /></button>
            <button
              type="button"
              onClick={send}
              disabled={!input.trim()}
              className="w-7 h-7 flex items-center justify-center bg-[#001F6B] text-white rounded hover:bg-[#002B8F] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={12} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
