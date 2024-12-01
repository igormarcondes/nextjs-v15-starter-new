import Link from 'next/link';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const params = await searchParams;
  const query = params.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resultados da Pesquisa</h1>
      {query ? (
        <p className="mb-4">
          Você pesquisou por: <strong>{query}</strong>
        </p>
      ) : (
        <p className="mb-4">Nenhuma consulta de pesquisa fornecida.</p>
      )}
      {/* Aqui você normalmente exibiria os resultados da pesquisa */}
      <p className="mb-8 max-w-[380px]">
        Neste componente, estamos acessando os searchParams de forma assíncrona.
      </p>
      <div className="flex gap-4">
        <Link
          href="/form-showcase"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Voltar para Pesquisa
        </Link>
        <Link
          href="/"
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          Ir para Home
        </Link>
      </div>
    </div>
  );
}
