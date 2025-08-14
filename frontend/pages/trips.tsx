import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

type Trip = { title: string; description: string; date: string };

export default function Trips() {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API || ''}/trips`;
    fetch(url).then(r => r.json()).then(setTrips).catch(() => setTrips([]));
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Available Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trips.map((t, i) => (
            <div key={i} className="border rounded p-4">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-sm text-gray-700">{t.description}</p>
              <p className="text-xs text-gray-500 mt-1">Date: {t.date}</p>
              <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded">
                Join
              </button>
            </div>
          ))}
          {!trips.length && (
            <p className="text-gray-600">No trips to show yet.</p>
          )}
        </div>
      </main>
    </>
  );
}
