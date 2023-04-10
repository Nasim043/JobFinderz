import { toast } from "react-toastify";

export const addToStorage = id => {
  const jobList = localStorage.getItem('job_list');
  if (jobList) {
    const job_item = JSON.parse(jobList);
    const existItem = job_item.find(job_id => job_id === id);
    if (existItem) {
      toast('You have already applied for this job')
    } else {
      job_item.push(id);
      localStorage.setItem('job_list', JSON.stringify(job_item))
      toast('Job Applied successfully')
    }
  } else {
    const jobIdArray = [id];
    localStorage.setItem('job_list', JSON.stringify(jobIdArray))
    toast('Job Applied successfully')
  }
}