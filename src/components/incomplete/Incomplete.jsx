import React from "react";
import "./incomplete.css";
import { Job } from "../job/Job";
import { Link } from "react-router-dom";
import { Jobs } from '../all_jobs/Jobs'
import { NewNoteForm } from "../form/NewNoteForm";
import { Completed } from "../completed/Completed";

export const Incomplete = () => {
    const getJOBS = () => {
        let arr = [];

        if (localStorage.length === 0) {
            return arr;
        } else {
            const jobs = Object.keys(localStorage);

            for (let key of jobs) {
                let job = localStorage.getItem(key);
                const jsonJob = JSON.parse(job);
                if (!jsonJob.status) {
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
                        <h1>Incomplete Tasks</h1>
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
};
