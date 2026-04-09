/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { signInWithPopup } from "firebase/auth";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { auth, googleProvider } from "./firebase";
import { ProjectList } from "./components/ProjectList";
import { Templates } from "./components/Templates";
import { CreateProjectModal } from "./components/CreateProjectModal";
import { Workspace } from "./components/Workspace";
import { ResourceMonitor } from "./components/dashboard/ResourceMonitor";
import { LayoutDashboard, FolderKanban, Settings, HelpCircle, Search, Sparkles, Mic, Plus, Clock, Key, Bell, User, Send } from "lucide-react";

function LandingPage() {
  const handleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Build apps with the power of AI.
        </h1>
        <p className="text-xl text-zinc-400">
          Describe your idea, and watch it come to life in seconds.
        </p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="What would you like to build?"
            className="flex-grow bg-zinc-900 border-zinc-800 text-zinc-50"
          />
          <Button onClick={handleLogin} className="bg-zinc-50 text-zinc-950 hover:bg-zinc-200">
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="w-64 border-r border-zinc-800 bg-zinc-950 p-4 flex flex-col h-screen text-zinc-300">
      <div className="text-xl font-bold mb-8 px-2 text-white">Google AI Studio</div>
      <nav className="space-y-2 flex-grow">
        <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white"><LayoutDashboard className="mr-2 h-4 w-4" /> Start</Button>
        <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white"><FolderKanban className="mr-2 h-4 w-4" /> Gallery</Button>
        <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white"><FolderKanban className="mr-2 h-4 w-4" /> Your Apps</Button>
        <div className="pt-4">
          <div className="text-xs font-semibold text-zinc-500 px-2 mb-2">Recently viewed</div>
          <div className="space-y-1 text-sm text-zinc-400 px-2">
            <div>AI App Builder</div>
            <div>DPay Clone</div>
            <div>Financial Dashboard</div>
          </div>
        </div>
      </nav>
      <div className="space-y-2 border-t border-zinc-800 pt-4">
        <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white"><Search className="mr-2 h-4 w-4" /> Search</Button>
        <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white"><Bell className="mr-2 h-4 w-4" /> What's new</Button>
        <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white" onClick={async () => {
          const response = await fetch('/api/auth/url');
          const { url } = await response.json();
          const authWindow = window.open(url, 'oauth_popup', 'width=600,height=700');
          window.addEventListener('message', (event) => {
            if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
              console.log('GitHub Auth Success');
            }
          });
        }}><Key className="mr-2 h-4 w-4" /> Connect GitHub</Button>
        <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white"><Settings className="mr-2 h-4 w-4" /> Settings</Button>
        <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white"><User className="mr-2 h-4 w-4" /> blessedsuccess738...</Button>
      </div>
    </div>
  );
}

import { DashboardHero } from "./components/dashboard/DashboardHero";

function Dashboard() {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  if (selectedProject) {
    return <Workspace project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <DashboardHero />
      {isModalOpen && <CreateProjectModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

function AppContent() {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? <Dashboard /> : <LandingPage />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
