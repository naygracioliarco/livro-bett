function TableOfContents() {
  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className="mb-12 p-6 rounded-lg border border-slate-200"
      style={{
        backgroundColor: '#EEE6D4',
      }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Seção Sumário */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <h2
              className="font-hwtArtz"
              style={{
                color: '#0E3B5D',
                fontSize: '28px',
                fontStyle: 'normal',
                fontWeight: 800,
                lineHeight: 'normal',
              }}
            >
              SUMÁRIO
            </h2>
          </div>
          <ol className="space-y-3">
            <li>
              <button
                onClick={() => scrollToChapter('chapter1')}
                className="text-left w-full font-Ubuntu flex items-center gap-2"
                style={{
                  color: '#144468',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                }}
              >
                <img
                  src="images/Union.svg"
                  alt="Union"
                  className="w-4 h-4 object-contain"
                />
                <span>
                  Capítulo 1:
                </span>{' '}
                <span>
                  Notícias
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToChapter('chapter2')}
                className="text-left w-full font-Ubuntu flex items-center gap-2"
                style={{
                  color: '#144468',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                }}
              >
                <img
                  src="images/Union.svg"
                  alt="Union"
                  className="w-4 h-4 object-contain"
                />
                <span>
                  Capítulo 2:
                </span>{' '}
                <span>
                  Fábulas
                </span>
              </button>
            </li>
          </ol>
        </div>

        {/* Divisor vertical */}
        <div
          className="hidden md:block"
          style={{
            backgroundColor: '#0E3B5D',
            width: '3px',
          }}
        />

        {/* Seção Tutorial */}
        <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Texto e botão */}
          <div className="flex-1 flex flex-col gap-3">
            <p
              className="font-ubuntu text-sm md:text-base"
              style={{
                color: '#0E3B5D',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              Clique no botão abaixo para acessar o tutorial de uso do livro digital
            </p>
            <a
              href="https://go.plataformaconx.com.br/bYxAg7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <button
                type="button"
                style={{
                  padding: '10px 30px',
                  backgroundColor: '#BF3154',
                  boxShadow: '0px 4px 0px #9C2F4B',
                  borderRadius: '30px',
                  color: 'white',
                  fontFamily: 'Ubuntu, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  lineHeight: '1.4em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#9C2F4B';
                  e.currentTarget.style.boxShadow = '0px 2px 0px #7A2440';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#BF3154';
                  e.currentTarget.style.boxShadow = '0px 4px 0px #9C2F4B';
                }}
              >
                TUTORIAL
              </button>
            </a>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center self-center md:self-auto">
            <a
              href="https://go.plataformaconx.com.br/bYxAg7"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="images/qrCode.svg"
                alt="QR Code Tutorial"
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
              />
            </a>
            <span
              className="mt-2 text-xs md:text-sm"
              style={{
                color: '#0E3B5D',
                fontSize: '14px',
              }}
            >
              se preferir, leia o QR
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TableOfContents;
