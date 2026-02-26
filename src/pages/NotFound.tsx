import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
    <main className="grid min-h-full place-items-center bg-[#05080F]/5 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-primary">404</h1>
        <p className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">Oops! Página não encontrada</p>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Desculpe, não conseguimos encontrar a página que você está procurando.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/" className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Retornar para a página inicial
          </a>
        </div>
      </div>
    </main>

    </>
  );
};

export default NotFound;
