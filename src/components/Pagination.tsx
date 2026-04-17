interface PaginationProps {
  currentPage: number;
  /** Dentro de `p-8 md:p-12`: estende a faixa até as bordas da coluna branca, como a paginação do topo. */
  expandToBookColumn?: boolean;
}

function Pagination({ currentPage, expandToBookColumn = false }: PaginationProps) {
  /* Mesma largura que a barra do topo: compensar exatamente o p-8 / md:p-12 do miolo */
  const bleedClass = expandToBookColumn
    ? 'w-[calc(100%+4rem)] max-w-none -ml-8 -mr-8 md:w-[calc(100%+6rem)] md:-ml-12 md:-mr-12'
    : 'w-full';

  const page4PlusSpacing = currentPage >= 4 ? 'my-[25px]' : '';

  return (
    <div
      data-page={currentPage}
      data-book-page={expandToBookColumn ? currentPage : undefined}
      className={`relative isolate overflow-visible py-1 pb-1.5 ${bleedClass} ${page4PlusSpacing}`}
      style={{
        backgroundColor: '#FCEFFF',
        fontFamily: 'Myriad VF',
      }}
    >
      {/* Texto centralizado na barra; padding lateral simétrico libera a zona da bandeira à direita */}
      <div className="flex min-h-[2.5rem] items-center justify-center gap-2.5 px-14 sm:px-16 md:min-h-[2.75rem]">
        <span className="shrink-0">Página - {currentPage}</span>
        <img src="images/seta.svg" alt="" className="h-3 w-3 shrink-0 object-contain" />
      </div>
      <img
        src="images/bandeiraPag.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-1 top-1/2 z-10 h-9 w-auto max-w-none -translate-y-1/2 object-contain sm:right-2 md:right-3 md:h-11"
      />
    </div>
  );
}

export default Pagination;
