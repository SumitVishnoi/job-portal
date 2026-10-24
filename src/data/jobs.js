const featuredJobs = [
  {
    id: "northstar-frontend-developer",
    company: "Northstar Studio",
    title: "Frontend Developer",
    location: "Austin, TX",
    type: "Full-time",
    arrangement: "Hybrid",
    experience: "Mid-level",
    salaryMin: 110000,
    salaryMax: 140000,
    salary: "$110k–$140k",
    daysAgo: 2,
    tag: "Design Systems",
    skills: ["React", "TypeScript", "Accessibility"],
    description:
      "Build thoughtful, accessible product experiences and evolve the design system alongside a close-knit product team.",
  },
  {
    id: "harbor-works-full-stack-developer",
    company: "Harbor Works",
    title: "Full Stack Developer",
    location: "Remote — US",
    type: "Full-time",
    arrangement: "Remote",
    experience: "Mid-level",
    salaryMin: 120000,
    salaryMax: 155000,
    salary: "$120k–$155k",
    daysAgo: 1,
    tag: "Product Engineering",
    skills: ["React", "Node.js", "PostgreSQL"],
    description:
      "Shape product features from the first interface sketch through reliable APIs, working with a collaborative distributed team.",
  },
  {
    id: "lattice-product-designer",
    company: "Lattice & Co.",
    title: "Product Designer",
    location: "New York, NY",
    type: "Full-time",
    arrangement: "On-site",
    experience: "Senior",
    salaryMin: 95000,
    salaryMax: 130000,
    salary: "$95k–$130k",
    daysAgo: 4,
    tag: "UX Strategy",
    skills: ["Figma", "Prototyping", "Research"],
    description:
      "Turn customer insight into clear product journeys, prototypes, and polished experiences across web and mobile.",
  },
  {
    id: "aster-labs-software-engineer",
    company: "Aster Labs",
    title: "Software Engineer",
    location: "Seattle, WA",
    type: "Full-time",
    arrangement: "Hybrid",
    experience: "Senior",
    salaryMin: 125000,
    salaryMax: 165000,
    salary: "$125k–$165k",
    daysAgo: 3,
    tag: "Platform",
    skills: ["Python", "AWS", "Distributed systems"],
    description:
      "Improve the foundations behind a growing platform, from service reliability to developer tooling and observability.",
  },
  {
    id: "bloom-avenue-marketing-specialist",
    company: "Bloom Avenue",
    title: "Marketing Specialist",
    location: "Chicago, IL",
    type: "Contract",
    arrangement: "Hybrid",
    experience: "Entry-level",
    salaryMin: 68000,
    salaryMax: 84000,
    salary: "$68k–$84k",
    daysAgo: 6,
    tag: "Growth Marketing",
    skills: ["Campaigns", "Analytics", "Content"],
    description:
      "Plan campaigns and create useful content that helps new audiences discover a growing consumer brand.",
  },
  {
    id: "summit-reach-business-development-executive",
    company: "Summit Reach",
    title: "Business Development Executive",
    location: "Remote — EMEA",
    type: "Full-time",
    arrangement: "Remote",
    experience: "Mid-level",
    salaryMin: 82000,
    salaryMax: 104000,
    salary: "$82k–$104k",
    daysAgo: 5,
    tag: "Partnerships",
    skills: ["Partnerships", "Sales", "Negotiation"],
    description:
      "Build trusted relationships with prospective partners and turn promising conversations into long-term collaborations.",
  },
];

const roleTemplates = [
  {
    title: "Backend Engineer",
    category: "Engineering",
    description:
      "Design dependable services and APIs, improve data flows, and help the team ship secure, maintainable software.",
    skills: ["Node.js", "API design", "PostgreSQL"],
    experience: "Mid-level",
    salaryMin: 105000,
    salaryMax: 145000,
    type: "Full-time",
  },
  {
    title: "UX Researcher",
    category: "Design",
    description:
      "Plan customer interviews and usability studies, then translate findings into practical product opportunities.",
    skills: ["User research", "Usability testing", "Synthesis"],
    experience: "Mid-level",
    salaryMin: 85000,
    salaryMax: 118000,
    type: "Full-time",
  },
  {
    title: "Content Marketing Manager",
    category: "Marketing",
    description:
      "Develop an editorial strategy and create helpful stories that build an engaged audience across key channels.",
    skills: ["Content strategy", "SEO", "Editorial"],
    experience: "Senior",
    salaryMin: 90000,
    salaryMax: 125000,
    type: "Full-time",
  },
  {
    title: "Operations Coordinator",
    category: "Operations",
    description:
      "Keep day-to-day operations running smoothly by improving team processes, coordinating vendors, and tracking details.",
    skills: ["Process improvement", "Coordination", "Reporting"],
    experience: "Entry-level",
    salaryMin: 58000,
    salaryMax: 76000,
    type: "Full-time",
  },
  {
    title: "People Operations Partner",
    category: "Operations",
    description:
      "Support an inclusive employee experience through thoughtful people programs, clear guidance, and reliable operations.",
    skills: ["People programs", "Communication", "HRIS"],
    experience: "Mid-level",
    salaryMin: 78000,
    salaryMax: 108000,
    type: "Full-time",
  },
  {
    title: "Data Analyst",
    category: "Business",
    description:
      "Turn business questions into useful analysis and dashboards that help teams make confident, evidence-based decisions.",
    skills: ["SQL", "Data visualization", "Analytics"],
    experience: "Mid-level",
    salaryMin: 82000,
    salaryMax: 112000,
    type: "Full-time",
  },
  {
    title: "Product Manager",
    category: "Product",
    description:
      "Set a clear product direction, align partners around customer needs, and guide valuable improvements from idea to launch.",
    skills: ["Roadmapping", "Discovery", "Stakeholder management"],
    experience: "Senior",
    salaryMin: 115000,
    salaryMax: 155000,
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    category: "Customer",
    description:
      "Help customers reach their goals through proactive guidance, product education, and trusted long-term relationships.",
    skills: ["Customer success", "Communication", "Enablement"],
    experience: "Mid-level",
    salaryMin: 76000,
    salaryMax: 105000,
    type: "Full-time",
  },
  {
    title: "Visual Designer",
    category: "Design",
    description:
      "Create a consistent visual language across digital campaigns, product touchpoints, and brand storytelling.",
    skills: ["Visual design", "Figma", "Brand systems"],
    experience: "Mid-level",
    salaryMin: 78000,
    salaryMax: 106000,
    type: "Contract",
  },
  {
    title: "Finance Associate",
    category: "Business",
    description:
      "Support planning and reporting with careful analysis, clear forecasts, and useful financial insights for team leads.",
    skills: ["Financial modeling", "Excel", "Forecasting"],
    experience: "Entry-level",
    salaryMin: 65000,
    salaryMax: 88000,
    type: "Full-time",
  },
  {
    title: "QA Automation Engineer",
    category: "Engineering",
    description:
      "Build maintainable test coverage and partner with engineers to make releases more reliable and accessible.",
    skills: ["Playwright", "Test automation", "CI/CD"],
    experience: "Mid-level",
    salaryMin: 92000,
    salaryMax: 128000,
    type: "Full-time",
  },
  {
    title: "Partnerships Associate",
    category: "Business Development",
    description:
      "Research potential collaborators and support thoughtful outreach, partner onboarding, and shared growth plans.",
    skills: ["Partnerships", "Research", "Relationship building"],
    experience: "Entry-level",
    salaryMin: 62000,
    salaryMax: 86000,
    type: "Full-time",
  },
  {
    title: "Frontend Engineering Intern",
    category: "Engineering",
    description:
      "Learn with a supportive product team while contributing to accessible interfaces, small features, and quality improvements.",
    skills: ["JavaScript", "React", "CSS"],
    experience: "Entry-level",
    salaryMin: 48000,
    salaryMax: 62000,
    type: "Internship",
  },
  {
    title: "Community Manager",
    category: "Marketing",
    description:
      "Grow a welcoming community by listening to members, hosting useful events, and sharing their feedback with the team.",
    skills: ["Community building", "Events", "Writing"],
    experience: "Mid-level",
    salaryMin: 70000,
    salaryMax: 96000,
    type: "Part-time",
  },
];

const demoCompanies = [
  { name: "Cedar & Coast", locations: ["Portland, OR", "Denver, CO", "Remote — US"] },
  { name: "Meridian Health", locations: ["Boston, MA", "Atlanta, GA", "Remote — US"] },
  { name: "Orbit & Co.", locations: ["San Diego, CA", "Toronto, Canada", "Remote — North America"] },
];

const generatedJobs = roleTemplates.flatMap((role, roleIndex) =>
  demoCompanies.map((company, companyIndex) => {
    const arrangementOptions = ["Hybrid", "On-site", "Remote"];
    const arrangement = arrangementOptions[(roleIndex + companyIndex) % arrangementOptions.length];
    const location =
      arrangement === "Remote"
        ? company.locations[2]
        : company.locations[(roleIndex + companyIndex) % 2];
    const salaryMin = role.salaryMin + companyIndex * 2500;
    const salaryMax = role.salaryMax + companyIndex * 3500;
    const daysAgo = ((roleIndex * 3 + companyIndex * 5) % 27) + 1;
    const slug = `${role.title}-${company.name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    return {
      id: slug,
      company: company.name,
      title: role.title,
      location,
      type: role.type,
      arrangement,
      experience: role.experience,
      salaryMin,
      salaryMax,
      salary: `$${Math.round(salaryMin / 1000)}k–$${Math.round(salaryMax / 1000)}k`,
      daysAgo,
      tag: role.category,
      skills: role.skills,
      description: role.description,
    };
  }),
);

export const jobs = [...featuredJobs, ...generatedJobs];