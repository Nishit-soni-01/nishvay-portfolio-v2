"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

const diagram = `
flowchart TD
    A["Customer Data"] --> D["SQL Server"]
    B["Account Data"] --> D
    C["Transaction Data"] --> D

    D --> E["Data Cleaning"]
    E --> F["Date Standardization"]
    F --> G["Combined Banking Dataset"]
    G --> H["Power BI Data Model"]
    H --> I["DAX Measures"]
    I --> J["Interactive Dashboard"]
    J --> K["Financial Risk Insights"]
`;

export default function LoanDefaultArchitectureDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "strict",
      flowchart: {
        useMaxWidth: true,
        htmlLabels: false,
      },
    });

    const renderDiagram = async () => {
      try {
        const id = `loan-default-${Date.now()}`;
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
        console.error("Loan Default diagram error:", error);
      }
    };

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl overflow-x-auto rounded-xl border border-border bg-card p-3">
      <div ref={diagramRef} className="flex justify-center" />
    </div>
  );
}