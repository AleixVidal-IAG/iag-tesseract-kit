import { useEffect, useState } from 'react';

export type Engine = {
  id: string;
  name: string;
};

export const useEngines = (): { engines: Engine[]; loading: boolean; error: Error | null } => {
  const [engines, setEngines] = useState<Engine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEngines = async (): Promise<void> => {
      try {
        const res = await fetch('/api/engines');
        if (!res.ok) throw new Error('Error fetching engines');
        const data: Engine[] = await res.json();
        setEngines(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchEngines();
  }, []);

  return { engines, loading, error };
};
