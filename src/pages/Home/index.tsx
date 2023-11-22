import photoAssets from "./photo.json";
import Footer from "../../components/Footer";
export default function Home() {
  const photos = photoAssets;
  return (
    <>
      <section>
        <div >
          <img />
          <div />
          <div >
            <div>
              Me chamo Lucas Shtorache sou fotográfo e videomaker baseado em
              Santos/SP.
            </div>
            <div>
              Já trabalhei com diversos artistas como: Bayside Kings, Gloria,
              Black Pantera, Sepultura, Ghostmane, While She Sleeps, Surra,
              Bullet Bane dentre outros do cenário nacional e internacional.
            </div>
            <div>
              Trabalho não apenas na area da musicas mas também em outros
              seguimentos, como gastronomia e marcas.
            </div>
          </div>
        </div>
      </section>
      <section >
        <Footer />
      </section>
    </>
  );
}
