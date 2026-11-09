import type { Metadata } from "next";
import ProjectCategoryPage from "@/components/home/ProjectCategoryPage";

export const metadata: Metadata = {
  title: "Data Analytics Projects | Portfolio",
  description:
    "Explore data analytics, interactive dashboards, business intelligence and visualization projects.",
};

export default function DataAnalyticsPage() {
  return <ProjectCategoryPage categoryId="data-analytics" />;
}