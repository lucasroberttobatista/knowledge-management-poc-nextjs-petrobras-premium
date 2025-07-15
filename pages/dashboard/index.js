
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Dashboard Petrobras</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">Status das Integrações</h2>
            <ul className="list-disc pl-5">
              <li>SAP: ✅ Conectado</li>
              <li>TOTVS: ✅ Conectado</li>
              <li>Oracle: ❌ Desconectado</li>
              <li>Sistema Interno A: ✅ Conectado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
