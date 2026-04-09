import { useState } from 'react';
import { Button } from "@/src/components/ui/button";
import { Textarea } from "@/src/components/ui/textarea";
import { Sparkles, Mic, Plus, Send, Menu, Settings, ChevronLeft, FolderKanban, LayoutDashboard, Search, Bell, Key, User, Music, Droplets, ChevronRight, LayoutGrid, MoreVertical } from "lucide-react";

export const DashboardHero = () => {
  const [prompt, setPrompt] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#131314] text-zinc-50 p-6 relative font-sans overflow-hidden">
      {/* Header Icons */}
      <div className="absolute top-6 left-6">
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl bg-[#1e1f20] text-zinc-400 hover:text-white hover:bg-[#2b2c2d]" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <div className="absolute top-6 right-6 flex gap-2">
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl bg-[#1e1f20] text-zinc-400 hover:text-white hover:bg-[#2b2c2d]">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl bg-[#1e1f20] text-zinc-400 hover:text-white hover:bg-[#2b2c2d]" onClick={() => setIsMenuOpen(true)}>
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide-out Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 h-full w-72 bg-[#1e1f20] border-r border-zinc-800 z-50 p-6 flex flex-col shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium tracking-tight">Google AI Studio</span>
              <ChevronRight className="h-4 w-4 text-zinc-500 rotate-90" />
            </div>
            <Button variant="ghost" size="icon" className="text-zinc-400" onClick={() => setIsMenuOpen(false)}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mb-6">
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-[#2b2c2d] px-3 py-6 rounded-xl">
              <ChevronLeft className="mr-3 h-5 w-5" /> Build
            </Button>
          </div>

          <nav className="space-y-1 flex-grow overflow-y-auto no-scrollbar">
            <Button variant="secondary" className="w-full justify-start bg-[#333537] text-white hover:bg-[#3d3f41] px-3 py-6 rounded-xl">
              Start
            </Button>
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-[#2b2c2d] px-3 py-6 rounded-xl">
              Gallery
            </Button>
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-[#2b2c2d] px-3 py-6 rounded-xl">
              Your apps
            </Button>
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-[#2b2c2d] px-3 py-6 rounded-xl">
              FAQ
            </Button>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider px-3 mb-4">Recently viewed</div>
              <div className="space-y-1">
                {[
                  "AI App Builder", 
                  "OPay Clone", 
                  "Untitled", 
                  "Financial Dashboard", 
                  "Untitled",
                  "DEVTOOL CLAN", 
                  "SignalBot", 
                  "MR SUCCESS Crash Predi...", 
                  "PocketSignal Pro", 
                  "ABKED Enterprise POS"
                ].map((item) => (
                  <Button key={item} variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-[#2b2c2d] px-3 py-2 text-sm rounded-lg truncate">
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </nav>

          <div className="space-y-1 border-t border-zinc-800 pt-6 mt-auto">
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-[#2b2c2d] px-3 py-3 rounded-xl">
              <Search className="mr-3 h-5 w-5" /> Search <span className="ml-auto text-xs text-zinc-600">Ctrl /</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-[#2b2c2d] px-3 py-3 rounded-xl">
              <Bell className="mr-3 h-5 w-5" /> What's new
            </Button>
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-[#2b2c2d] px-3 py-3 rounded-xl">
              <Key className="mr-3 h-5 w-5" /> Get API key
            </Button>
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-[#2b2c2d] px-3 py-3 rounded-xl">
              <Settings className="mr-3 h-5 w-5" /> Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-[#2b2c2d] px-3 py-3 rounded-xl">
              <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold mr-3">B</div>
              blessedsuccess738...
            </Button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center space-y-12 w-full max-w-3xl">
        {/* Center Content */}
        <div className="flex flex-col items-center space-y-8">
          <div className="relative">
            <Sparkles className="h-24 w-24 text-[#1e1f20]" strokeWidth={1} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="h-12 w-12 text-[#1e1f20]" strokeWidth={0.5} />
            </div>
          </div>
          <h1 className="text-4xl font-normal text-zinc-200 tracking-tight">Build your ideas with Gemini</h1>
        </div>
        
        {/* Prompt Input Area */}
        <div className="w-full space-y-6">
          <div className="relative group">
            <div className="bg-[#1e1f20] rounded-[32px] p-6 min-h-[200px] flex flex-col border border-transparent hover:border-zinc-800 transition-all duration-300 shadow-2xl overflow-hidden">
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe an app and let Gemini do the rest"
                className="flex-grow bg-transparent border-none text-xl text-zinc-100 placeholder:text-zinc-500 resize-none focus-visible:ring-0 p-0 mb-4 leading-relaxed"
              />
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-[#131314] text-zinc-400 hover:text-white hover:bg-[#2b2c2d]">
                    <Mic className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-[#131314] text-zinc-400 hover:text-white hover:bg-[#2b2c2d]">
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
                
                <Button size="icon" className="h-10 w-10 rounded-full bg-[#333537] text-blue-400 hover:bg-[#3d3f41] transition-all duration-300">
                  {prompt.trim() ? <Send className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                </Button>
              </div>
              
              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
            </div>
          </div>

          {/* Suggestions Pills */}
          <div className="flex gap-3 justify-center items-center w-full overflow-x-auto no-scrollbar py-2">
            <Button variant="ghost" className="rounded-full bg-[#1e1f20] text-zinc-300 hover:bg-[#2b2c2d] px-6 py-6 h-auto flex items-center gap-3 border border-zinc-800/50">
              <Music className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium">Generate music</span>
            </Button>
            <Button variant="ghost" className="rounded-full bg-[#1e1f20] text-zinc-300 hover:bg-[#2b2c2d] px-6 py-6 h-auto flex items-center gap-3 border border-zinc-800/50">
              <Droplets className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium">Add database and auth</span>
            </Button>
            <Button variant="ghost" className="rounded-full bg-[#1e1f20] text-zinc-300 hover:bg-[#2b2c2d] px-4 py-6 h-auto flex items-center border border-zinc-800/50">
              <LayoutGrid className="h-5 w-5 text-zinc-500" />
              <ChevronRight className="h-4 w-4 text-zinc-500 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
