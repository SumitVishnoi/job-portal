"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getMatchingJobs } from "@/services/jobsService";

export const JOBS_PAGE_SIZE = 9;

const initialCriteria = {
  query: "",
  location: "",
  type: "",
  arrangement: "",
  experience: "",
  sort: "relevance",
};

export function useJobsListing(jobs) {
  const [criteria, setCriteria] = useState(initialCriteria);
  const [criteriaVersion, setCriteriaVersion] = useState(0);
  const [visibleCount, setVisibleCount] = useState(JOBS_PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);
  const visibleCountRef = useRef(JOBS_PAGE_SIZE);
  const isLoadingRef = useRef(false);
  const criteriaVersionRef = useRef(0);
  const animationFrameRef = useRef(null);

  const matchingJobs = useMemo(
    () => getMatchingJobs(jobs, criteria),
    [jobs, criteria],
  );
  const visibleJobs = useMemo(
    () => matchingJobs.slice(0, visibleCount),
    [matchingJobs, visibleCount],
  );
  const hasMore = visibleCount < matchingJobs.length;

  const resetPagination = useCallback(() => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    isLoadingRef.current = false;
    visibleCountRef.current = JOBS_PAGE_SIZE;
    setIsLoading(false);
    setVisibleCount(JOBS_PAGE_SIZE);
    criteriaVersionRef.current += 1;
    setCriteriaVersion(criteriaVersionRef.current);
  }, []);

  const updateFilter = useCallback(
    (field, value) => {
      resetPagination();
      setCriteria((current) => ({ ...current, [field]: value }));
    },
    [resetPagination],
  );

  const clearAll = useCallback(() => {
    resetPagination();
    setCriteria(initialCriteria);
  }, [resetPagination]);

  const loadMore = useCallback(() => {
    if (
      isLoadingRef.current ||
      visibleCountRef.current >= matchingJobs.length ||
      criteriaVersionRef.current !== criteriaVersion
    ) {
      return;
    }

    isLoadingRef.current = true;
    setIsLoading(true);
    const nextCount = Math.min(
      visibleCountRef.current + JOBS_PAGE_SIZE,
      matchingJobs.length,
    );
    const requestVersion = criteriaVersion;

    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = null;
      if (criteriaVersionRef.current !== requestVersion) return;

      visibleCountRef.current = nextCount;
      setVisibleCount(nextCount);
      isLoadingRef.current = false;
      setIsLoading(false);
    });
  }, [criteriaVersion, matchingJobs.length]);

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    },
    [],
  );

  return {
    criteria,
    matchingJobs,
    visibleJobs,
    visibleCount: visibleJobs.length,
    hasMore,
    isLoading,
    updateFilter,
    clearAll,
    loadMore,
  };
}
