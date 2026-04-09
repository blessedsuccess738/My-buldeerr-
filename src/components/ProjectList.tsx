import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';

interface Project {
  id: string;
  name: string;
  description: string;
}

export const ProjectList = ({ onSelectProject }: { onSelectProject: (project: Project) => void }) => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'projects'), where('ownerUid', '==', user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(projectsData);
    });
    return unsubscribe;
  }, [user]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Card key={project.id} className="bg-zinc-900 border-zinc-800 cursor-pointer" onClick={() => onSelectProject(project)}>
          <CardHeader>
            <CardTitle className="text-zinc-50">{project.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-400">{project.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
