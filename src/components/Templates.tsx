import { Button } from "@/src/components/ui/button";
import { Sparkles } from "lucide-react";

export function Templates() {
  const templates = [
    { name: "Chatbot", description: "A simple AI chatbot" },
    { name: "Image Generator", description: "Generate images with Gemini" },
    { name: "Code Assistant", description: "Get help with coding" },
  ];

  return (
    <div className="mt-12 w-full">
      <h2 className="text-xl font-semibold text-zinc-50 mb-4">Templates</h2>
      <div className="grid grid-cols-3 gap-4">
        {templates.map((t) => (
          <div key={t.name} className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 cursor-pointer">
            <h3 className="font-semibold text-zinc-50">{t.name}</h3>
            <p className="text-sm text-zinc-400">{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
