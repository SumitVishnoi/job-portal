const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmployerForm(values = {}) {
  const normalized = {
    companyName: String(values.companyName ?? "").trim(),
    workEmail: String(values.workEmail ?? "").trim(),
    jobTitle: String(values.jobTitle ?? "").trim(),
    department: String(values.department ?? "").trim(),
    location: String(values.location ?? "").trim(),
    workArrangement: String(values.workArrangement ?? "Remote").trim(),
    employmentType: String(values.employmentType ?? "Full-time").trim(),
    experienceLevel: String(values.experienceLevel ?? "Mid-level").trim(),
    salaryRange: String(values.salaryRange ?? "").trim(),
    description: String(values.description ?? "").trim(),
    requiredSkills: String(values.requiredSkills ?? "").trim(),
    selectedPlan: String(values.selectedPlan ?? "Starter").trim() || "Starter",
  };

  return normalized;
}

export function validateEmployerForm(values = {}) {
  const normalized = normalizeEmployerForm(values);
  const errors = {};

  if (!normalized.companyName) {
    errors.companyName = "Company name is required.";
  }

  if (!normalized.workEmail) {
    errors.workEmail = "Work email is required.";
  } else if (!emailPattern.test(normalized.workEmail)) {
    errors.workEmail = "Enter a valid work email address.";
  }

  if (!normalized.jobTitle) {
    errors.jobTitle = "Job title is required.";
  }

  if (!normalized.location) {
    errors.location = "Location is required.";
  }

  if (!normalized.description) {
    errors.description = "Job description is required.";
  }

  return errors;
}

export function submitEmployerForm(values = {}, overridePlan) {
  const selectedPlan = overridePlan || values.selectedPlan || "Starter";
  const normalized = normalizeEmployerForm({ ...values, selectedPlan });
  const errors = validateEmployerForm(normalized);

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      errors,
      message: "Please correct the highlighted fields before previewing the role.",
    };
  }

  const skills = normalized.requiredSkills
    ? normalized.requiredSkills
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  return {
    ok: true,
    message: "Your job listing preview is ready.",
    preview: {
      company: normalized.companyName,
      title: normalized.jobTitle,
      location: normalized.location,
      type: normalized.employmentType,
      arrangement: normalized.workArrangement,
      experience: normalized.experienceLevel,
      salary: normalized.salaryRange || "Salary not listed",
      tag: normalized.department || "Hiring",
      skills,
      description: normalized.description,
      plan: normalized.selectedPlan,
    },
    normalized,
  };
}
