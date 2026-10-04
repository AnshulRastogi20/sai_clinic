import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/icons";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Wordmark />
      <p className="mt-14 font-display text-8xl font-medium text-clay">404</p>
      <h1 className="mt-4 text-3xl font-medium text-ink">This page doesn't exist.</h1>
      <p className="mt-3 text-ink/60">The link may be old or mistyped.</p>
      <a href="/" className="btn-primary mt-8">
        <ArrowLeft size={17} /> Back to Sai Clinic
      </a>
    </main>
  );
};

export default NotFound;
