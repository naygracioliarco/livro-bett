import { useEffect, useId, useState, type ReactNode } from 'react';

interface GameModalProps {
  /** Texto do botão quando não há miniatura */
  buttonLabel?: string;
  /** Caminho público da miniatura (ex.: images/thumbODA.png) — se definido, substitui o botão de texto */
  thumbnailSrc?: string;
  /** Texto acima da miniatura */
  introTitle?: string;
  /** Texto abaixo da miniatura */
  introHint?: string;
  /** Atributo alt da imagem */
  thumbnailAlt?: string;
  /** Conteúdo do jogo: iframe, componente React, etc. */
  children: ReactNode;
}

function GameModal({
  buttonLabel = 'Abrir jogo',
  thumbnailSrc,
  introTitle,
  introHint = 'Clique para jogar',
  thumbnailAlt,
  children,
}: GameModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const altText =
    thumbnailAlt ?? introTitle ?? 'Abrir atividade interativa';

  return (
    <>
      {thumbnailSrc ? (
        <div className="flex max-w-[min(100%,520px)] flex-col items-center gap-3 text-center">
          {introTitle && (
            <p className="font-myriad-vf text-base font-semibold text-black md:text-lg">{introTitle}</p>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative w-full max-w-[480px] overflow-hidden rounded-[5px] border-0 p-0 shadow-md ring-2 ring-transparent transition hover:ring-[#80298F] focus:outline-none focus:ring-2 focus:ring-[#80298F] focus:ring-offset-2"
            aria-label={altText}
          >
            <img
              src={thumbnailSrc}
              alt={altText}
              className="h-auto w-full rounded-[5px] object-contain"
            />
          </button>
          {introHint && (
            <p className="mt-2 text-[10px] text-slate-600" style={{ fontSize: '10px' }}>{introHint}</p>
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center rounded-full border-2 border-[#80298F] bg-white px-4 py-2 text-sm font-semibold text-[#80298F] shadow-sm transition hover:bg-[#F9DDFF] focus:outline-none focus:ring-2 focus:ring-[#80298F] focus:ring-offset-2 md:text-base"
        >
          {buttonLabel}
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col" role="presentation">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex h-[100dvh] min-h-0 w-full flex-col overflow-hidden bg-black"
          >
            <span id={titleId} className="sr-only">
              Atividade interativa
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-[max(12px,env(safe-area-inset-right))] top-[max(12px,env(safe-area-inset-top))] z-[70] flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[46px] border-[3px] border-solid border-white bg-[#80298F] shadow-md transition hover:bg-[#6b2178] focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Fechar atividade"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                className="aspect-[1/1] h-[14px] w-[14px] shrink-0"
                aria-hidden
              >
                <path
                  fill="#FFF"
                  d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              </svg>
            </button>
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden [&_iframe]:h-full [&_iframe]:min-h-0 [&_iframe]:max-h-none [&_iframe]:rounded-none">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GameModal;
