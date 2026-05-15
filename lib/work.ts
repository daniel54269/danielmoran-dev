import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type WorkMeta = {
  slug: string;
  title: string;
  client: string;
  domain: string;
  role: string;
  year: string;
  headline: string;
  metric: { label: string; value: string }[];
  stack: string[];
  order: number;
  featured?: boolean;
  description: string;
};

export type WorkEntry = WorkMeta & { content: string };

const WORK_DIR = path.join(process.cwd(), "content", "work");

export async function getAllWork(): Promise<WorkEntry[]> {
  const files = await fs.readdir(WORK_DIR);
  const mdx = files.filter((f) => f.endsWith(".mdx"));
  const entries = await Promise.all(
    mdx.map(async (file): Promise<WorkEntry> => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = await fs.readFile(path.join(WORK_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return { ...(data as Omit<WorkMeta, "slug">), slug, content };
    })
  );
  entries.sort((a, b) => a.order - b.order);
  return entries;
}

export async function getWorkBySlug(slug: string): Promise<WorkEntry | null> {
  try {
    const raw = await fs.readFile(path.join(WORK_DIR, `${slug}.mdx`), "utf8");
    const { data, content } = matter(raw);
    return { ...(data as Omit<WorkMeta, "slug">), slug, content };
  } catch {
    return null;
  }
}

export async function getFeaturedWork(): Promise<WorkEntry[]> {
  const all = await getAllWork();
  return all.filter((w) => w.featured);
}
