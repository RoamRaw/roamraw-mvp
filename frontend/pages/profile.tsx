import Navbar from '../components/Navbar';

export default function Profile() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
        <p>This is a placeholder profile page.</p>
      </main>
    </>
  );
}
