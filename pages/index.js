
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-800 text-white">
      <h1 className="text-4xl font-bold mb-4">Plataforma Petrobras</h1>
      <p className="mb-6">Faça login para acessar o sistema</p>
      <Link href="/dashboard">
        <button className="bg-yellow-400 text-green-800 font-semibold px-4 py-2 rounded hover:bg-yellow-300">Acessar Dashboard</button>
      </Link>
    </div>
  );
}
