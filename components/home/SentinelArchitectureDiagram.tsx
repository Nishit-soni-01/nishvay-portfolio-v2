"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function SentinelArchitectureDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const diagram = `
flowchart TD
    A["Financial Transaction Data"] --> B["Data Preprocessing"]
    B --> C["Class Imbalance Analysis"]
    C --> D["Cost-Sensitive Logistic Regression"]
    D --> E["Fraud Probability Prediction"]
    E --> F["Classification Threshold: 0.22"]
    F --> G{"Fraud Probability >= 0.22?"}
    G -->|Yes| H["Flag as Fraud"]
    G -->|No| I["Classify as Legitimate"]
    H --> J["Fraud Detection Result"]
    I --> J
    J --> K["Docker Deployment"]
    K --> L["AWS EC2"]
`;

    const renderDiagram = async () => {
      try {
        const id = "sentinel-architecture-" + Date.now();
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
          svgElement.style.display = "block";
          svgElement.style.margin = "0 auto";
        }
      } catch (error) {
        console.error("Sentinel architecture rendering failed:", error);
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
    <section className="my-16">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-widest text-purple-500">
          Machine Learning Architecture
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          Fraud Detection Pipeline
        </h2>

        <p className="mt-2 text-muted-foreground">
          Transaction processing, cost-sensitive classification,
          threshold optimization, and cloud deployment.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card p-2">
        <div
          ref={diagramRef}
          className="mx-auto w-full max-w-xl"
        />
      </div>
    </section>
  );
}