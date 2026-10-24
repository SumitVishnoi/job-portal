const fieldClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-[var(--color-navy)] outline-none transition placeholder:text-slate-400 focus-visible:border-[var(--color-teal)] focus-visible:ring-2 focus-visible:ring-[var(--color-teal)]/20";

const planOptions = ["Startup", "Growth", "Scale"];

function Field({ label, name, type = "text", value, onChange, error, required, placeholder, options, helperText, ...props }) {
  const fieldId = name;
  const describedBy = error ? `${fieldId}-error` : undefined;

  return (
    <div>
      <label htmlFor={fieldId} className="text-sm font-medium text-[var(--color-navy)]">
        {label}
        {required ? <span className="ml-1 text-[var(--color-teal)]">*</span> : null}
      </label>
      {type === "select" ? (
        <select
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={fieldClassName}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          placeholder={placeholder}
          className={`${fieldClassName} min-h-[140px] resize-y`}
          {...props}
        />
      ) : (
        <input
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          placeholder={placeholder}
          className={fieldClassName}
          {...props}
        />
      )}
      {helperText && !error ? (
        <p className="mt-2 text-xs text-[var(--color-body)]">{helperText}</p>
      ) : null}
      {error ? (
        <p id={`${fieldId}-error`} className="mt-2 text-sm font-medium text-[#b42318]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function EmployerJobForm({
  formValues,
  errors,
  selectedPlan,
  status,
  isSubmitting,
  onChange,
  onPlanSelect,
  onSubmit,
}) {
  return (
    <section id="job-form" className="bg-[var(--color-warm-white)] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
            Job posting demo
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[var(--color-navy)] sm:text-4xl">
            Tell us about the role you&apos;re hiring for.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-body)]">
            Add a few details to preview how your opportunity could appear to candidates.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_50px_rgba(18,35,63,0.05)] sm:p-8 lg:p-10">
          <form onSubmit={onSubmit} noValidate className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Company name"
                name="companyName"
                value={formValues.companyName}
                onChange={onChange}
                error={errors.companyName}
                required
                placeholder="Northstar Labs"
              />

              <Field
                label="Work email"
                name="workEmail"
                type="email"
                value={formValues.workEmail}
                onChange={onChange}
                error={errors.workEmail}
                required
                placeholder="hiring@northstarlabs.com"
              />

              <Field
                label="Job title"
                name="jobTitle"
                value={formValues.jobTitle}
                onChange={onChange}
                error={errors.jobTitle}
                required
                placeholder="Senior Product Designer"
              />

              <Field
                label="Department"
                name="department"
                type="select"
                value={formValues.department}
                onChange={onChange}
                options={[
                  { value: "Product", label: "Product" },
                  { value: "Engineering", label: "Engineering" },
                  { value: "Design", label: "Design" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Operations", label: "Operations" },
                ]}
              />

              <Field
                label="Location"
                name="location"
                value={formValues.location}
                onChange={onChange}
                error={errors.location}
                required
                placeholder="Remote — US"
              />

              <Field
                label="Work arrangement"
                name="workArrangement"
                type="select"
                value={formValues.workArrangement}
                onChange={onChange}
                options={[
                  { value: "Remote", label: "Remote" },
                  { value: "Hybrid", label: "Hybrid" },
                  { value: "On-site", label: "On-site" },
                ]}
              />

              <Field
                label="Employment type"
                name="employmentType"
                type="select"
                value={formValues.employmentType}
                onChange={onChange}
                options={[
                  { value: "Full-time", label: "Full-time" },
                  { value: "Part-time", label: "Part-time" },
                  { value: "Contract", label: "Contract" },
                  { value: "Internship", label: "Internship" },
                ]}
              />

              <Field
                label="Experience level"
                name="experienceLevel"
                type="select"
                value={formValues.experienceLevel}
                onChange={onChange}
                options={[
                  { value: "Entry-level", label: "Entry-level" },
                  { value: "Mid-level", label: "Mid-level" },
                  { value: "Senior", label: "Senior" },
                ]}
              />

              <Field
                label="Salary range"
                name="salaryRange"
                value={formValues.salaryRange}
                onChange={onChange}
                placeholder="₹18L – ₹24L"
                helperText="Optional. Add a salary range if helpful for candidates."
              />

              <div className="md:col-span-2">
                <Field
                  label="Required skills"
                  name="requiredSkills"
                  value={formValues.requiredSkills}
                  onChange={onChange}
                  placeholder="Figma, user research, product strategy"
                  helperText="Optional. Add comma-separated skill tags for the role."
                />
              </div>

              <div className="md:col-span-2">
                <Field
                  label="Job description"
                  name="description"
                  type="textarea"
                  value={formValues.description}
                  onChange={onChange}
                  error={errors.description}
                  required
                  placeholder="Describe the role, responsibilities, and what success looks like."
                />
              </div>

              <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-medium text-[var(--color-navy)]">Selected hiring plan</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {planOptions.map((plan) => (
                    <button
                      key={plan}
                      type="button"
                      onClick={() => onPlanSelect(plan)}
                      className={`inline-flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 ${
                        selectedPlan === plan
                          ? "bg-[var(--color-navy)] text-white"
                          : "border border-slate-200 bg-white text-[var(--color-navy)] hover:bg-slate-100"
                      }`}
                    >
                      {plan}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-[var(--color-body)]">
                  This selection is connected to the pricing cards above and will be used in the preview.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div aria-live="polite" role="status" className="min-h-[1.5rem] text-sm font-medium text-[var(--color-body)]">
                {status.message ? status.message : ""}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1d2d4a] disabled:cursor-not-allowed disabled:bg-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
              >
                {isSubmitting ? "Preparing preview..." : "Preview job listing"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
