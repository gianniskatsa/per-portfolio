export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  completionDate: string;
  category: ProjectCategory;
}

export type ProjectCategory = 
  | "web"
  | "mobile"
  | "backend"
  | "fullstack"
  | "other";

export interface ProjectFilter {
  category?: ProjectCategory;
  featured?: boolean;
  search?: string;
}
