"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import Reveal from "@/components/ui/Reveal";

export default function VideTubeDatabaseDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const diagram = `
erDiagram
    USER ||--o{ VIDEO : uploads
    USER ||--o{ COMMENT : writes
    USER ||--o{ LIKE : creates
    USER ||--o{ SUBSCRIPTION : subscribes
    VIDEO ||--o{ COMMENT : receives
    VIDEO ||--o{ LIKE : receives

    USER {
        ObjectId _id
        string username
        string email
        string fullname
        string avatar
    }

    VIDEO {
        ObjectId _id
        string title
        string description
        string videoFile
        string thumbnail
        ObjectId owner
    }

    COMMENT {
        ObjectId _id
        string content
        ObjectId video
        ObjectId owner
    }

    LIKE {
        ObjectId _id
        ObjectId likedBy
        ObjectId video
    }

    SUBSCRIPTION {
        ObjectId _id
        ObjectId subscriber
        ObjectId channel
    }
`;

    const renderDiagram = async () => {
      try {
        const id = "videotube-database-" + Date.now();

        const { svg } = await mermaid.render(id, diagram);

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
      } catch (error) {
        console.error("VideTube database diagram failed:", error);
      }
    };

    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "strict",
      er: {
        useMaxWidth: true,
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
          Database Design
        </p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
          MongoDB Data Model Relationships
        </h2>
      </div>

      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        An illustrative overview of the core Mongoose models
        and their relationships in VideTube.
      </p>

      <div className="mt-8 overflow-x-auto rounded-3xl border border-border/80 bg-card/40 p-6 backdrop-blur-xl md:p-10">
        <div ref={diagramRef} className="min-w-[650px]" />
      </div>
    </Reveal>
  );
}