
import { useState } from "react";
import { MessageSquare, History, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

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
    <div className="flex h-screen w-full bg-gradient-to-b from-zinc-900 to-black text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar className="w-64 border-r border-zinc-800">
        <SidebarContent>
          {/* User Profile Section */}
          <SidebarGroup>
            <div className="p-4 flex items-center gap-3 border-b border-zinc-800">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Guest User</h3>
                <p className="text-sm text-zinc-400">Sign in to save chats</p>
              </div>
            </div>
          </SidebarGroup>

          {/* Chat History */}
          <SidebarGroup>
            <SidebarGroupLabel>Chat History</SidebarGroupLabel>
            <SidebarGroupContent className="px-2">
              <div className="space-y-1">
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-800 text-sm flex items-center gap-2">
                  <History className="w-4 h-4" />
                  <span>Recent Chat 1</span>
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-800 text-sm flex items-center gap-2">
                  <History className="w-4 h-4" />
                  <span>Recent Chat 2</span>
                </button>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Settings */}
          <SidebarGroup className="mt-auto">
            <button className="w-full text-left p-4 hover:bg-zinc-800 flex items-center gap-2 text-zinc-400">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-screen">
        <div className="flex-1 p-4 md:p-6 max-w-4xl mx-auto w-full">
          <div className="bg-zinc-900/50 backdrop-blur-lg rounded-lg border border-zinc-800 shadow-xl h-full flex flex-col">
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
    </div>
  );
};

export default Index;
