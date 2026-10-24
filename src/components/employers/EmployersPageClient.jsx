"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EmployersHero from "@/components/employers/EmployersHero";
import EmployerBenefits from "@/components/employers/EmployerBenefits";
import HiringSteps from "@/components/employers/HiringSteps";
import PricingSection from "@/components/employers/PricingSection";
import EmployerJobForm from "@/components/employers/EmployerJobForm";
import JobListingPreview from "@/components/employers/JobListingPreview";
import EmployerFAQ from "@/components/employers/EmployerFAQ";
import EmployerFinalCTA from "@/components/employers/EmployerFinalCTA";
import { useEmployerForm } from "@/hooks/useEmployerForm";

export default function EmployersPageClient() {
  const {
    formValues,
    errors,
    selectedPlan,
    status,
    previewData,
    isPreviewVisible,
    isSubmitting,
    updateField,
    handlePlanSelect,
    handleSubmit,
    handleEdit,
    handleReset,
  } = useEmployerForm();

  const handlePlanSelection = (planId) => {
    handlePlanSelect(planId);
    if (typeof document !== "undefined") {
      document.getElementById("job-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-warm-white)] text-[var(--color-navy)]">
        <EmployersHero />
        <EmployerBenefits />
        <HiringSteps />
        <PricingSection
          selectedPlan={selectedPlan}
          onSelectPlan={handlePlanSelection}
        />
        <EmployerJobForm
          formValues={formValues}
          errors={errors}
          selectedPlan={selectedPlan}
          status={status}
          isSubmitting={isSubmitting}
          onChange={updateField}
          onPlanSelect={handlePlanSelection}
          onSubmit={handleSubmit}
        />
        {isPreviewVisible && previewData ? (
          <JobListingPreview
            preview={previewData}
            onEdit={handleEdit}
            onReset={handleReset}
          />
        ) : null}
        <EmployerFAQ />
        <EmployerFinalCTA />
      </main>
      <Footer />
    </>
  );
}
