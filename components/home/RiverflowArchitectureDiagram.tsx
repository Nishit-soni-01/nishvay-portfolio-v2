"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import Reveal from "@/components/ui/Reveal";

export default function RiverflowArchitectureDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const renderDiagram = async () => {
      const diagram = `
flowchart TD
    A["User"] --> B["Next.js Frontend"]
    B --> C["Authentication"]

    C --> D["Email and Password"]
    C --> E["Google OAuth"]
    C --> F["GitHub OAuth"]

    D --> G["Appwrite Authentication"]
    E --> G
    F --> G

    G --> H["Authenticated Session"]
    H --> I["Q and A Application"]

    I --> J["Questions"]
    I --> K["Answers"]
    I --> L["Comments"]
    I --> M["Voting"]
    I --> N["Reputation System"]
    I --> O["Search and Markdown Editor"]

    J --> P["Appwrite TablesDB"]
    K --> P
    L --> P
    M --> P
    N --> P
`;

      try {
        const id = "riverflow-diagram-" + Date.now();

        const { svg, bindFunctions } = await mermaid.render(
          id,
          diagram
        );

        if (cancelled || !diagramRef.current) return;

        diagramRef.current.innerHTML = svg;

        const svgElement = diagramRef.current.querySelector("svg");

        if (svgElement) {
          svgElement.removeAttribute("height");
          svgElement.setAttribute("width", "100%");
          svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svgElement.style.maxWidth = "100%";
          svgElement.style.height = "auto";
        }

        bindFunctions?.(diagramRef.current);
      } catch (error) {
        console.error("Riverflow Mermaid rendering failed:", error);
      }
    };

    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "strict",
      flowchart: {
        useMaxWidth: true,
        htmlLabels: false,
      },
    });

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Reveal className="my-16">
      <div className="border-l-2 border-accent pl-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          System Design
        </p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
          Application Architecture
        </h2>
      </div>

      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        An overview of Riverflow Q&A authentication,
        application features, and Appwrite data management.
      </p>

      <div className="mt-8 overflow-x-auto rounded-3xl border border-border/80 bg-card/40 p-6 backdrop-blur-xl md:p-10">
        <div ref={diagramRef} className="min-w-[650px]" />
      </div>
    </Reveal>
  );
}