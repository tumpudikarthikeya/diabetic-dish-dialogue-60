
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Message {
  id: string;
  content: string;
  type: "user" | "bot";
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your diabetic food recommendation assistant. Please select your diabetes severity level and ask me about food recommendations.",
      type: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [diabeticType, setDiabeticType] = useState("no_diabetic");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    // Here you would typically make an API call to get the bot's response
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: `Thank you for your message. I see you're ${diabeticType}. I'll provide recommendations accordingly.`,
      type: "bot",
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="flex-1 p-4 md:p-6 max-w-4xl mx-auto w-full">
        <div className="bg-zinc-900/50 backdrop-blur-lg rounded-lg border border-zinc-800 shadow-xl h-[80vh] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-emerald-500" />
            <h1 className="text-lg font-medium">Diabetic Food Assistant</h1>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.type === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg p-3 animate-slideIn",
                    message.type === "user"
                      ? "bg-emerald-500 text-white ml-auto"
                      : "bg-zinc-800 text-zinc-100"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800">
            <div className="flex gap-2">
              <Select
                value={diabeticType}
                onValueChange={setDiabeticType}
              >
                <SelectTrigger className="w-[140px] bg-zinc-800 border-zinc-700">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no_diabetic">No Diabetic</SelectItem>
                  <SelectItem value="mild">Mild</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="severe">Severe</SelectItem>
                  <SelectItem value="profiliative">Profiliative</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex-1 flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
