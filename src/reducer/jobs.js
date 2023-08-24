const jobsReducer = (
  state = {
    jobsData: null,
    searchJobs: null,
    message: null,
    jobsError: null,
    allJobsData: null,
    individualJobs: null,
  },
  action
) => {
  switch (action.type) {
    case "JOBPOST":
      return { ...state, jobsData: action.data };

    case "JOBERROR":
      return { ...state, jobsError: action.data };

    case "INDIVIDUALJOBS":
      return { ...state, individualJobs: action.data };

    case "SEARCHJOB":
      return { ...state, searchJobs: action.data };

    case "CLEARERRORSAVEDITEM":
      return { ...state, jobsError: null };

    case "GETJOBSPOSTS":
      localStorage.setItem("jobs", JSON.stringify({ ...action?.data }));

      return { ...state, allJobsData: action.data };

    default:
      return state;
  }
};

export default jobsReducer;
