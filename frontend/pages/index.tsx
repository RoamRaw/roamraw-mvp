import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to RoamRaw</h1>
        <p className="mb-6">Discover curated trips and community adventures.</p>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1,2,3].map((i) => (
            <div key={i} className="border rounded p-4">
              <h3 className="font-semibold">Featured Trip #{i}</h3>
              <p className="text-sm text-gray-600">A short teaser for your adventure.</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
