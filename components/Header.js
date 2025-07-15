
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão do Conhecimento Petrobras</h1>
        <nav className="space-x-4">
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/documents" className="hover:underline">Documentos</Link>
          <Link href="/analytics" className="hover:underline">Analytics</Link>
          <Link href="/settings" className="hover:underline">Configurações</Link>
        </nav>
      </div>
    </header>
  );
}
