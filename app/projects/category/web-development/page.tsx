import type { Metadata } from "next";
import ProjectCategoryPage from "@/components/home/ProjectCategoryPage";

export const metadata: Metadata = {
  title: "Web Development Projects | Portfolio",
  description:
    "Explore web development projects, full-stack applications and backend systems.",
};

export default function WebDevelopmentPage() {
  return <ProjectCategoryPage categoryId="web-development" />;
}