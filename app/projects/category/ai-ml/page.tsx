import type { Metadata } from "next";
import ProjectCategoryPage from "@/components/home/ProjectCategoryPage";

export const metadata: Metadata = {
  title: "AI & Machine Learning Projects | Portfolio",
  description:
    "Explore AI, machine learning, predictive modelling and intelligent applications.",
};

export default function AIMLPage() {
  return <ProjectCategoryPage categoryId="ai-ml" />;
}