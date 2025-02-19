
import { useState } from "react";
import { MessageSquare, History, User, Settings, Sun, Moon } from "lucide-react";
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
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useTheme } from "@/components/ui/theme-provider";

interface Message {
  id: string;
  content: string;
  type: "user" | "bot";
}

interface RasaResponse {
  recipient_id: string;
  text: string;
}

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your diabetic food recommendation assistant. Please select your diabetes severity level and ask me about food recommendations.",
      type: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [diabeticType, setDiabeticType] = useState("no_diabetic");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToRasa = async (message: string) => {
    try {
      const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: "user123",
          message: `${diabeticType}: ${message}`,
        }),
      });

      const data: RasaResponse[] = await response.json();
      return data[0]?.text || "Sorry, I couldn't process your request.";
    } catch (error) {
      console.error("Error sending message to Rasa:", error);
      return "Sorry, I'm having trouble connecting to the server.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsLoading(true);
    setInputValue("");

    // Get response from Rasa
    const botResponseText = await sendMessageToRasa(inputValue);
    
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: botResponseText,
      type: "bot",
    };

    setMessages((prev) => [...prev, botResponse]);
    setIsLoading(false);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-gradient-to-b from-background to-background/80 text-foreground overflow-hidden">
        {/* Sidebar */}
        <Sidebar className="w-64 border-r border-border">
          <SidebarContent>
            {/* User Profile Section */}
            <SidebarGroup>
              <div className="p-4 flex items-center gap-3 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Guest User</h3>
                  <p className="text-sm text-muted-foreground">Sign in to save chats</p>
                </div>
              </div>
            </SidebarGroup>

            {/* Chat History */}
            <SidebarGroup>
              <SidebarGroupLabel>Chat History</SidebarGroupLabel>
              <SidebarGroupContent className="px-2">
                <div className="space-y-1">
                  <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent text-sm flex items-center gap-2">
                    <History className="w-4 h-4" />
                    <span>Recent Chat 1</span>
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent text-sm flex items-center gap-2">
                    <History className="w-4 h-4" />
                    <span>Recent Chat 2</span>
                  </button>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Settings */}
            <SidebarGroup className="mt-auto">
              <div className="space-y-2 p-4">
                <button 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent flex items-center gap-2 text-muted-foreground"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent flex items-center gap-2 text-muted-foreground">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
              </div>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col h-screen">
          <div className="flex-1 p-4 md:p-6 max-w-4xl mx-auto w-full">
            <div className="bg-card/50 backdrop-blur-lg rounded-lg border border-border shadow-xl h-full flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-border flex items-center gap-3">
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
                          ? "bg-emerald-500 text-white"
                          : "bg-muted text-foreground"
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground max-w-[80%] rounded-lg p-3">
                      Thinking...
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Select
                    value={diabeticType}
                    onValueChange={setDiabeticType}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no_diabetic">No Diabetic</SelectItem>
                      <SelectItem value="mild_diabetic">Mild Diabetic</SelectItem>
                      <SelectItem value="moderate_diabetic">Moderate Diabetic</SelectItem>
                      <SelectItem value="severe_diabetic">Severe Diabetic</SelectItem>
                      <SelectItem value="profiliative_diabetic">Profiliative Diabetic</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex-1 flex">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-background border border-input rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      className={cn(
                        "bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r-lg transition-colors",
                        isLoading && "opacity-50 cursor-not-allowed"
                      )}
                      disabled={isLoading}
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
    </SidebarProvider>
  );
};

export default Index;
