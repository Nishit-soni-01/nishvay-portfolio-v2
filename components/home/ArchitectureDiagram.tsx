"use client";

import { useEffect, useId, useRef } from "react";
import mermaid from "mermaid";
import Reveal from "@/components/ui/Reveal";

const diagram = `
flowchart TD
    A["User"] --> B["Next.js Application"]

    B --> C["Registration"]
    B --> D["Login"]
    B --> E["Email Verification"]
    B --> F["Password Reset"]

    C --> G["Authentication Logic"]
    E --> G
    F --> G
    D --> G

    G <--> H[("MongoDB")]

    G --> I["Nodemailer"]
    I --> J["Mailtrap"]
    J --> K["Verification / Reset Email"]
    K --> A

    A --> L["Open Email Link"]
    L --> E

    classDef frontend fill:#1e1b4b,stroke:#818cf8,color:#fff
    classDef backend fill:#082f49,stroke:#22d3ee,color:#fff
    classDef database fill:#052e16,stroke:#4ade80,color:#fff
    classDef email fill:#422006,stroke:#facc15,color:#fff

    class A,B frontend
    class C,D,E,F,G backend
    class H database
    class I,J,K email
`;

export default function ArchitectureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    let cancelled = false;

    const renderDiagram = async () => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "strict",
          flowchart: {
            curve: "basis",
            useMaxWidth: true,
          },
        });

        const { svg } = await mermaid.render(
          `authify-architecture-${id}`,
          diagram
        );

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error("Architecture diagram rendering failed:", error);
      }
    };

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <Reveal className="mt-16">
      <div className="border-l-2 border-accent pl-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          System design
        </p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
          Application Architecture
        </h2>
      </div>

      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        An overview of how the Next.js application, authentication
        logic, MongoDB and email delivery work together in harmony.
      </p>

      <div className="mt-8 overflow-x-auto rounded-3xl border border-border/80 bg-card/40 p-6 backdrop-blur-xl md:p-10">
        <div
          ref={containerRef}
          className="mx-auto min-w-[650px] [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
        />
      </div>
    </Reveal>
  );
}