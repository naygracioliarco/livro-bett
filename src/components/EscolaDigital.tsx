import { publicUrl } from '../lib/publicUrl';
import GameModal from './GameModal';

function EscolaDigital() {
  return (
    <section className="my-6">
      <div className="mb-4 flex items-center gap-3">
        <img
          src={publicUrl('images/escolaDigital.svg')}
          alt="Conversa vai"
          className="object-contain"
        />
        <h2
          style={{
            color: '#00000',
            fontFamily: "'Filson Soft', sans-serif",
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            textTransform: 'uppercase',
          }}
        >
          Escola Digital
        </h2>
      </div>

      <div className="flex w-full justify-center">
        <GameModal
          thumbnailSrc="images/thumbEscolaDigital.svg"
          thumbnailAlt="Abrir vídeo Escola Digital"
          introHint="Clique para assistir a videoaula."
        >
          <video
            controls
            playsInline
            preload="metadata"
            className="h-full w-full bg-black object-contain"
          >
            <source src={publicUrl('images/SAE26_AI43_HIS_C07_VA1.mp4')} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </GameModal>
      </div>
    </section>
  );
}

export default EscolaDigital;