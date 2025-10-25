export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Program Detail</h1>
      <p>Details for program {params.slug} go here.</p>
    </main>
  );
}
