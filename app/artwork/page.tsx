
import Image from "next/image";
import Link from "next/link";

const artworks = [
  { file: "art-01.jpeg", title: "Expressive Portrait" },
  { file: "art-02.jpeg", title: "Charcoal Figure Study" },
  { file: "art-03.jpeg", title: "Ink Character Illustration" },
  { file: "art-04.jpeg", title: "A Quiet Window" },
  { file: "art-05.jpeg", title: "Traditional Portrait" },
  { file: "art-06.jpeg", title: "Dark Fantasy" },
  { file: "art-07.jpeg", title: "Warrior Illustration" },
  { file: "art-08.jpeg", title: "Mythical Character" },
  { file: "art-09.jpeg", title: "Bird Study" },
  { file: "art-10.jpeg", title: "Expressive Eyes" },
  { file: "art-11.jpeg", title: "Abstract Ink Art" },
];

export default function ArtworkPage() {
  return (
    <>
      <main className="min-h-screen bg-[#0d0d0c] px-6 pb-24 pt-36 text-white md:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm text-[#99e836] transition-opacity hover:opacity-70"
          >
            ← Back to Home
          </Link>

          <p className="mt-12 text-sm font-semibold tracking-wider text-[#99e836]">
            MY CREATIVE COLLECTION
          </p>

          <h1 className="mt-5 font-[NeueMachina] text-5xl leading-tight md:text-7xl">
            ARTWORK
            <br />
            <span className="text-[#99e836]">WITHOUT LIMITS.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
            A collection of my sketches, illustrations and creative
            experiments. Every piece is displayed in its original proportions.
          </p>

          <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {artworks.map((artwork, index) => (
              <figure
                key={artwork.file}
                className="mb-8 break-inside-avoid"
              >
                <a
                  href={`/artwork/${artwork.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden bg-white/[0.03]"
                  aria-label={`View original ${artwork.title}`}
                >
                  <Image
                    src={`/artwork/${artwork.file}`}
                    alt={artwork.title}
                    width={1200}
                    height={1600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </a>

                <figcaption className="mt-3 flex justify-between gap-3 text-sm">
                  <span>{artwork.title}</span>
                  <span className="text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
