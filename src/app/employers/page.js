import EmployersPageClient from "@/components/employers/EmployersPageClient";

export const metadata = {
  title: "Recruitment Solutions for Employers | Surhires",
  description:
    "Discover a simpler way to prepare job listings and explore hiring options with Surhires. Create a job preview and explore plans for your team.",
  openGraph: {
    title: "Recruitment Solutions for Employers | Surhires",
    description:
      "Discover a simpler way to prepare job listings and explore hiring options with Surhires.",
    type: "website",
  },
};

export default function EmployersPage() {
  return <EmployersPageClient />;
}
