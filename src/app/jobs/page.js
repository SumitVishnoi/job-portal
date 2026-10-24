import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobsListing from "@/components/jobs/JobsListing";
import { jobs } from "@/data/jobs";

export const metadata = {
  title: "Browse Jobs and Career Opportunities | Surhires",
  description:
    "Explore job opportunities across development, design, marketing, and more. Filter roles by location, employment type, and work arrangement on Surhires.",
  openGraph: {
    title: "Browse Jobs and Career Opportunities | Surhires",
    description:
      "Explore job opportunities across development, design, marketing, and more on Surhires.",
    type: "website",
  },
};

export default function JobsPage() {
  return (
    <>
      <Navbar />
      <JobsListing jobs={jobs} />
      <Footer />
    </>
  );
}
