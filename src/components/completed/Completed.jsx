import React from 'react'
import './completed.css'
import {Job}  from '../job/Job'
import {Jobs}  from '../all_jobs/Jobs'
import { Link } from 'react-router-dom'
import {NewNoteForm} from '../form/NewNoteForm'
import {Incomplete} from '../incomplete/Incomplete'
export const Completed = () => {
    const getJOBS = () => {
        let arr = [];

        if (localStorage.length === 0) {
            return arr;
        } else {
            const jobs = Object.keys(localStorage);

            for (let key of jobs) {
                let job = localStorage.getItem(key);
                const jsonJob = JSON.parse(job);
                if (jsonJob.status) {
                    arr.push(jsonJob);
                }
            }
        }
        return arr;
    };

    let all_jobs = getJOBS();

  return (
      <>
          <div className="all-jobs">
              <div className="jobs-top">
                  <span>
                      <h1>Completed Tasks</h1>
                  </span>
                  <Link to="/" exact componet={<Jobs />} className="jobs-btn">
                      All Tasks
                  </Link>

                  <Link
                      to="/newjob"
                      exact
                      componet={<NewNoteForm />}
                      className="jobs-btn"
                  >
                      Add New Task
                  </Link>
                  <Link
                      to="/completed"
                      exact
                      componet={<Completed />}
                      className="jobs-btn"
                  >
                      Completed Tasks
                  </Link>
                  <Link
                      to="/incomplete"
                      exact
                      componet={<Incomplete />}
                      className="jobs-btn"
                  >
                      Incomplete Tasks
                  </Link>
              </div>
              <div className="job-container">
                  {all_jobs.map((job) => (
                      <Job key={job.id} job={job} />
                  ))}
              </div>
          </div>
      </>
  );
}
