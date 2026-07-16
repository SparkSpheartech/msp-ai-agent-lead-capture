import ITAuditsClient from "./ITAuditsClient";

export const metadata = {
  title: "Master Business Audit | SparkSphear Tech",
  description: "A unified infrastructure audit of your web, marketing, AI, and brand systems. Find the exact levers for growth before you spend a dollar.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/services/it-audits",
  },
  openGraph: {
    title: "Master Business Audit | SparkSphear Tech",
    description: "A unified infrastructure audit of your web, marketing, AI, and brand systems. Find the exact levers for growth before you spend a dollar.",
    url: "https://sparkspheartechsolutions.com/services/it-audits",
  },
};

export default function Page() {
  return <ITAuditsClient />;
}
