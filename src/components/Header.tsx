function Header() {
  return (
    <header
      className="relative text-white py-8 px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(images/Capa-1.png)',
      }}
    >
      {/* Conteúdo do header */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex flex-col">
            <p
              className="font-inter rounded-[20px]"
              style={{
                backgroundColor: '#F4C2FF',
                color: '#80298F',
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '30px', /* 428.571% */
                letterSpacing: '-0.5px',
                width: '108px',
                height: '27px',
              }}
            >
              LIVRO DIGITAL
            </p>
            <h1
              className="font-inter font-bold"
              style={{
                fontWeight: 900,
                fontSize: '48px',
              }}
            >
              <span style={{ color: '#FBB733' }}>7.</span> A vida no campo
            </h1>

          </div>
        </div>
      </div>
    </header >
  );
}

export default Header;

