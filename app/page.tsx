export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-6">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Free The Brave</h1>
        <p className="text-lg text-gray-600">Wellness education aligned to Movement • Touch • Music • Meaning.</p>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Tinana (Body)</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Aroha/Hinengaro (Mind & Love)</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Wairua (Spirit)</span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">Whānau/Hapori (Community)</span>
        </div>
        <a href="/programs" className="mt-4 inline-block px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800">Explore Programs</a>
      </section>
    </main>
  );
}
