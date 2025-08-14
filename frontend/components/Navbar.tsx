export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-5xl mx-auto flex justify-between">
        <a href="/" className="font-bold">RoamRaw</a>
        <div>
          <a href="/trips" className="px-3">Trips</a>
          <a href="/profile" className="px-3">Profile</a>
        </div>
      </div>
    </nav>
  );
}
