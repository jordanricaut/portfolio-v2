import $ from 'jquery'

export default function Footer() {

    const goToTop = () => {
        document.body.scrollIntoView({
          behavior: "smooth",
        });
      };


  return (
    <section className="footer">
      <div className="container container--1280">
        <div className="footer__wrapper">
          <p>© 2023 Jordan RICAUT</p>
          <button onClick={goToTop} className="footer__top" aria-label="Bouton retour en haut du site">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="48"
              viewBox="0 0 44 48"
              fill="none"
            >
              <path
                d="M18.5 1.02083C20.6658 -0.229599 23.3342 -0.2296 25.5 1.02083L40.1506 9.47938C42.3164 10.7298 43.6506 13.0407 43.6506 15.5416V32.4586C43.6506 34.9595 42.3164 37.2704 40.1506 38.5208L25.5 46.9794C23.3342 48.2298 20.6658 48.2298 18.5 46.9794L3.84937 38.5208C1.68356 37.2704 0.349365 34.9595 0.349365 32.4587V15.5416C0.349365 13.0407 1.68356 10.7298 3.84937 9.47938L18.5 1.02083Z"
                fill="#D9D9D9"
              />
              <path
                d="M12.2666 25.1358L11.1826 24.0519C10.7236 23.5929 10.7236 22.8507 11.1826 22.3966L20.6699 12.9044C21.1289 12.4454 21.8711 12.4454 22.3252 12.9044L31.8125 22.3917C32.2715 22.8507 32.2715 23.5929 31.8125 24.047L30.7285 25.131C30.2646 25.5948 29.5078 25.5851 29.0537 25.1114L23.4531 19.2325V33.2657C23.4531 33.9151 22.9307 34.4376 22.2812 34.4376H20.7188C20.0693 34.4376 19.5469 33.9151 19.5469 33.2657V19.2325L13.9414 25.1163C13.4873 25.5948 12.7305 25.6046 12.2666 25.1358Z"
                fill="#505050"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
