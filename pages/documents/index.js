import Header from '../../components/Header';

export default function Documents() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Gestão de Documentos</h1>
        <p>Visualize, faça upload e gerencie documentos.</p>
      </div>
    </div>
  );
}
