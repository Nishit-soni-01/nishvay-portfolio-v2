
import type { Metadata } from "next";

import BeyondCode, {
  BeyondCodeArtwork,
  BeyondCodePlatforms,
} from "@/components/home/BeyondCode";
import Poetry from "@/components/home/Poetry";

export const metadata: Metadata = {
  title: "Beyond Code | Nishit Soni",
  description:
    "Explore my creative side through art, sketching, guitar, poetry, and content creation.",
};

export default function BeyondCodePage() {
  return (
    <>
      <main className="ryen-snap-container ryen-creative-container">
        <div className="ryen-page ryen-creative-intro">
          <BeyondCode />
        </div>

        <div className="ryen-page ryen-artwork-page">
          <BeyondCodeArtwork />
        </div>

        <div className="ryen-page ryen-platforms-page">
          <BeyondCodePlatforms />
        </div>

        <div className="ryen-page ryen-poetry-page">
          <Poetry />
        </div>
      </main>
    </>
  );
}
