import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMax" },
    { name: "description", content: "Smart Feedback for you dream job" },
  ];
}

export default function Home() {
  return (
    <main>
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Rating</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>
      </section>
    </main>
  );
}
