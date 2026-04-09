import { useState } from 'react';
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Cpu, Database, Globe, Zap } from "lucide-react";

export const ResourceMonitor = () => {
  const [resources] = useState({
    cpu: "12%",
    memory: "450MB",
    storage: "12GB / 100GB",
    agentStatus: "Connected (Global)"
  });

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      <Card className="bg-zinc-900 border-zinc-800 text-zinc-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
          <Cpu className="h-4 w-4 text-zinc-400" />
        </CardHeader>
        <CardContent><div className="text-2xl font-bold">{resources.cpu}</div></CardContent>
      </Card>
      <Card className="bg-zinc-900 border-zinc-800 text-zinc-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Memory</CardTitle>
          <Database className="h-4 w-4 text-zinc-400" />
        </CardHeader>
        <CardContent><div className="text-2xl font-bold">{resources.memory}</div></CardContent>
      </Card>
      <Card className="bg-zinc-900 border-zinc-800 text-zinc-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Storage</CardTitle>
          <Database className="h-4 w-4 text-zinc-400" />
        </CardHeader>
        <CardContent><div className="text-2xl font-bold">{resources.storage}</div></CardContent>
      </Card>
      <Card className="bg-zinc-900 border-zinc-800 text-zinc-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Agent Network</CardTitle>
          <Globe className="h-4 w-4 text-zinc-400" />
        </CardHeader>
        <CardContent><div className="text-sm font-bold text-green-400">{resources.agentStatus}</div></CardContent>
      </Card>
    </div>
  );
};
