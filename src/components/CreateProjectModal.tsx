import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';

export const CreateProjectModal = ({ onClose }: { onClose: () => void }) => {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = async () => {
    if (!user || !name) return;
    await addDoc(collection(db, 'projects'), {
      ownerUid: user.uid,
      name,
      description,
      createdAt: serverTimestamp(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <Card className="bg-zinc-900 border-zinc-800 w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-zinc-50">Create New App</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="App Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-zinc-900 border-zinc-800 text-zinc-50"
          />
          <Input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-zinc-900 border-zinc-800 text-zinc-50"
          />
          <div className="flex gap-2 justify-end">
            <Button onClick={onClose} variant="ghost" className="text-zinc-400">
              Cancel
            </Button>
            <Button onClick={handleCreate} className="bg-zinc-50 text-zinc-950 hover:bg-zinc-200">
              Create
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
