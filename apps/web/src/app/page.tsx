import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gold-primary">
          Welcome to HAR2LoliCode
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          The ultimate tool for converting HAR files into OpenBullet 2 scripts.
        </p>
        <div className="mt-8">
          <Link href="/dashboard">
            <span className="rounded-md bg-gold-primary px-6 py-3 text-lg font-semibold text-black shadow-lg shadow-gold-primary/20 transition hover:bg-gold-secondary">
              Go to Dashboard
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
