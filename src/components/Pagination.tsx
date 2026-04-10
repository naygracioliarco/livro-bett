
interface PaginationProps {
  currentPage: number;
}

function Pagination({ currentPage }: PaginationProps) {
  return (
    <div
      data-page={currentPage}
      className="flex items-center justify-center -mx-8 md:-mx-12 py-1 pl-4 pr-20 md:px-[360px] md:pr-[360px]"
      style={{
        display: 'flex',
        width: '100vw',
        maxWidth: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#FCEFFF',
        marginBottom: '40px',
        marginTop: '40px',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        fontFamily: 'Myriad VF',
      }}
    >
      <span>Página - {currentPage}</span>
      <img
        src="images/seta.svg"
        alt=""
        className="w-3 h-3 object-contain"
      />
      <img
        src="images/bandeiraPag.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 h-9 w-auto -translate-y-1/2 object-contain md:right-8 md:h-11"
      />
    </div>
  );
}

export default Pagination;

