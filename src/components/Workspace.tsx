import { useState, useEffect } from 'react';
import { Button } from '@/src/components/ui/button';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { Input } from '@/src/components/ui/input';
import { Mic, Plus, Send, ChevronLeft, Settings, Share2, Play, Code, Eye, RefreshCw, Clock, RotateCcw, X } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';

export const Workspace = ({ project, onBack }: { project: any, onBack: () => void }) => {
  const [code, setCode] = useState(project.code || 'console.log("Hello, World!");');
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setChatInput('');
    setIsAiLoading(true);

    try {
      const response = await generateChatResponse(userMessage);
      setChatHistory(prev => [...prev, { role: 'ai', text: response }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'ai', text: "Error: Failed to get AI response." }]);
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 relative">
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-zinc-900/80 backdrop-blur-sm flex flex-col items-center justify-center text-white">
          <div className="w-64 h-40 bg-zinc-800 rounded-lg p-6 flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
            <p className="text-sm">Preparing system resources</p>
          </div>
        </div>
      )}
      <header className="px-4 py-2 border-b border-zinc-200 flex justify-between items-center bg-white">
        <div className="flex items-center gap-2">
          <Button onClick={onBack} variant="ghost" size="sm"><ChevronLeft className="h-4 w-4" /></Button>
          <h1 className="text-sm font-semibold">{project.name}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm"><RefreshCw className="mr-2 h-4 w-4" /> Remix</Button>
          <Button variant="ghost" size="sm"><Share2 className="mr-2 h-4 w-4" /> Share</Button>
          <Button variant="ghost" size="sm">Publish</Button>
          <Button variant="ghost" size="sm"><Settings className="h-4 w-4" /></Button>
        </div>
      </header>
      
      <div className="px-4 py-2 border-b border-zinc-200 bg-white flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="bg-zinc-100"><Eye className="mr-2 h-4 w-4" /> Preview</Button>
          <Button variant="ghost" size="sm"><Code className="mr-2 h-4 w-4" /> Code</Button>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm"><Clock className="mr-2 h-4 w-4" /> Checkpoint</Button>
          <Button variant="ghost" size="sm"><RotateCcw className="mr-2 h-4 w-4" /> Restore</Button>
        </div>
      </div>

      <div className="flex flex-grow overflow-hidden">
        <div className="flex-grow p-4 overflow-auto">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => highlight(code, languages.javascript, 'javascript')}
            padding={10}
            className="font-mono text-sm bg-white border border-zinc-200 rounded-lg min-h-[400px]"
          />
        </div>
        <div className="w-1/3 p-4 bg-white border-l border-zinc-200 flex flex-col">
          <div className="flex-grow overflow-auto mb-4 space-y-4">
            {chatHistory.map((msg, idx) => (
              <div key={idx} className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-zinc-100 text-right' : 'bg-blue-50'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            ))}
            {isAiLoading && <div className="p-3 rounded-lg bg-blue-50 text-sm">AI is thinking...</div>}
          </div>
          <div className="relative w-full h-1/2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 z-10 bg-white/50 hover:bg-white"
              onClick={() => { /* Handle close preview */ }}
            >
              <X className="h-4 w-4" />
            </Button>
            <iframe
              title="preview"
              srcDoc={`<html><body><script>${code}</script></body></html>`}
              className="w-full h-full border-none"
            />
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-zinc-200 bg-white">
        <div className="flex gap-2 items-center mb-2">
          <Button variant="outline" size="sm" className="rounded-full">AI Features</Button>
          <Button variant="outline" size="sm" className="rounded-full">Add Generate Button</Button>
          <Button variant="outline" size="sm" className="rounded-full">Improve Workspace</Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="ghost" size="icon"><Plus className="h-5 w-5" /></Button>
          <Input
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Make changes, add new features, ask for anything"
            className="flex-grow rounded-full"
          />
          <Button variant="ghost" size="icon"><Mic className="h-5 w-5" /></Button>
          <Button size="icon" className="rounded-full" onClick={handleSendMessage} disabled={isAiLoading}><Send className="h-5 w-5" /></Button>
        </div>
      </div>
    </div>
  );
};
