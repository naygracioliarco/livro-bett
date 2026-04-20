import { publicUrl } from '../lib/publicUrl';

function Poster() {
  return (
    <section
      className="flex w-full items-center justify-center px-3 py-4 sm:px-4 sm:py-5 md:h-[371px] md:px-0 md:py-0"
      style={{
        backgroundImage: `url('${publicUrl('images/pattern_branco.png')}')`,
        backgroundRepeat: 'repeat',
        paddingTop: '0px!important',
        backgroundSize: 'contain',
      }}
    >
      <figure className="relative aspect-[533/335] w-full max-w-[533px] overflow-hidden rounded-[20px]">
        <img
          src={publicUrl('images/page_1_img_39_225.png')}
          alt="O mercado de peixe nos degraus da ponte de Rialto, Veneza"
          className="block h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-6 pb-8 pt-16 text-center md:px-12">
          <p
            className="font-myriad-vf"
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              width: '497px',
              maxWidth: '100%',
              margin: '0 auto',
            }}
          >
            Myles Birket Foster/Wikimedia Commons. FOSTER, Myles Birket.
          </p>
          <p
            className="font-myriad-vf"
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              width: '497px',
              maxWidth: '100%',
              margin: '8px auto 0',
            }}
          >
            FOSTER, Myles Birket. O mercado de peixe nos degraus da ponte de
            Rialto, Veneza. 1875. Aquarela realçada com bodycolor, 43 x 67 cm.
            Assinado com monograma.
          </p>
        </div>
      </figure>
    </section>
  );
}

export default Poster;
