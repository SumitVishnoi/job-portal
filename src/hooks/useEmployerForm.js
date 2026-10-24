"use client";

import { useState } from "react";
import { submitEmployerForm } from "@/services/employerService";

export const defaultEmployerForm = {
  companyName: "",
  workEmail: "",
  jobTitle: "",
  department: "Product",
  location: "",
  workArrangement: "Remote",
  employmentType: "Full-time",
  experienceLevel: "Mid-level",
  salaryRange: "",
  description: "",
  requiredSkills: "",
  selectedPlan: "Starter",
};

export function useEmployerForm() {
  const [formValues, setFormValues] = useState(defaultEmployerForm);
  const [selectedPlan, setSelectedPlan] = useState("Starter");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [previewData, setPreviewData] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));

    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setFormValues((current) => ({
      ...current,
      selectedPlan: planId,
    }));

    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const result = submitEmployerForm(formValues, selectedPlan);

    if (!result.ok) {
      setErrors(result.errors);
      setStatus({
        type: "error",
        message: result.message,
      });
      setIsPreviewVisible(false);
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    setPreviewData(result.preview);
    setIsPreviewVisible(true);
    setStatus({
      type: "success",
      message: result.message,
    });
    setIsSubmitting(false);
  };

  const handleEdit = () => {
    setIsPreviewVisible(false);
    setStatus({ type: "idle", message: "" });
  };

  const handleReset = () => {
    setFormValues(defaultEmployerForm);
    setSelectedPlan("Starter");
    setErrors({});
    setPreviewData(null);
    setIsPreviewVisible(false);
    setStatus({ type: "idle", message: "" });
  };

  return {
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
  };
}
