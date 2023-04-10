export const addToStorage = id => {
  console.log('Dont worry i am here');
  const jobList = localStorage.getItem('job_list');
  if (jobList) {

  } else {
    const jobIdArray = [id];
    localStorage.setItem('job_list', JSON.stringify(jobIdArray))
  }
}