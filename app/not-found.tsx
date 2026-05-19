import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <div className="text-xs uppercase tracking-widest text-ink-400">404</div>
      <h1 className="mt-3 font-serif italic font-normal text-5xl text-ink-50 tracking-tight">Page not found.</h1>
      <p className="mt-3 text-ink-300">The link's broken or the page moved.</p>
      <Link href="/" className="inline-block mt-8 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-ink-900">
        Back home →
      </Link>
    </Container>
  );
}
