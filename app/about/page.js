import AboutClient from "./AboutClient";

export const metadata = {
  title: "About SparkSphear Tech | Fort Wayne AI & IT",
  description: "SparkSphear Tech Solutions is Fort Wayne's premier AI services and business automation company, helping local businesses work smarter.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/about",
  },
  openGraph: {
    title: "About SparkSphear Tech | Fort Wayne AI & IT",
    description: "SparkSphear Tech Solutions is Fort Wayne's premier AI services and business automation company, helping local businesses work smarter.",
    url: "https://sparkspheartechsolutions.com/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
