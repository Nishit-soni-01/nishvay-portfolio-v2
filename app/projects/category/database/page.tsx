import type { Metadata } from "next";
import ProjectCategoryPage from "@/components/home/ProjectCategoryPage";

export const metadata: Metadata = {
  title: "Database Projects | Portfolio",
  description:
    "Explore SQL database design, relational data modelling and database-driven projects.",
};

export default function DatabasePage() {
  return <ProjectCategoryPage categoryId="database" />;
}