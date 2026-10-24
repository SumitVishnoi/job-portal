function normalize(value) {
  return String(value ?? "").trim().toLocaleLowerCase();
}

function getSearchableText(job) {
  return normalize(
    [
      job.title,
      job.company,
      job.location,
      job.description,
      job.type,
      job.arrangement,
      job.experience,
      ...(job.skills ?? []),
    ].join(" "),
  );
}

function getRelevanceScore(job, query) {
  const searchableText = getSearchableText(job);
  const title = normalize(job.title);
  const company = normalize(job.company);

  return query
    .split(/\s+/)
    .filter(Boolean)
    .reduce((score, term) => {
      if (title.includes(term)) return score + 5;
      if (company.includes(term)) return score + 3;
      return searchableText.includes(term) ? score + 1 : score;
    }, 0);
}

export function getMatchingJobs(jobs, criteria) {
  const query = normalize(criteria.query);
  const queryTerms = query.split(/\s+/).filter(Boolean);
  const location = normalize(criteria.location);

  const matchingJobs = jobs
    .map((job, index) => ({ job, index }))
    .filter(({ job }) => {
      const searchableText = getSearchableText(job);
      const matchesQuery = queryTerms.every((term) => searchableText.includes(term));
      const matchesLocation = !location || normalize(job.location).includes(location);
      const matchesType = !criteria.type || job.type === criteria.type;
      const matchesArrangement = !criteria.arrangement || job.arrangement === criteria.arrangement;
      const matchesExperience = !criteria.experience || job.experience === criteria.experience;

      return (
        matchesQuery &&
        matchesLocation &&
        matchesType &&
        matchesArrangement &&
        matchesExperience
      );
    });

  matchingJobs.sort((first, second) => {
    const { job: firstJob } = first;
    const { job: secondJob } = second;

    switch (criteria.sort) {
      case "newest":
        return (firstJob.daysAgo ?? Number.MAX_SAFE_INTEGER) -
          (secondJob.daysAgo ?? Number.MAX_SAFE_INTEGER) || first.index - second.index;
      case "salary-high":
        if (firstJob.salaryMax == null) return secondJob.salaryMax == null ? first.index - second.index : 1;
        if (secondJob.salaryMax == null) return -1;
        return secondJob.salaryMax - firstJob.salaryMax || first.index - second.index;
      case "salary-low":
        if (firstJob.salaryMin == null) return secondJob.salaryMin == null ? first.index - second.index : 1;
        if (secondJob.salaryMin == null) return -1;
        return firstJob.salaryMin - secondJob.salaryMin || first.index - second.index;
      default:
        return (
          getRelevanceScore(secondJob, query) - getRelevanceScore(firstJob, query) ||
          (firstJob.daysAgo ?? Number.MAX_SAFE_INTEGER) -
            (secondJob.daysAgo ?? Number.MAX_SAFE_INTEGER) ||
          first.index - second.index
        );
    }
  });

  return matchingJobs.map(({ job }) => job);
}

export function getActiveFilterCount(criteria) {
  return [
    criteria.query,
    criteria.location,
    criteria.type,
    criteria.arrangement,
    criteria.experience,
  ].filter(Boolean).length;
}
