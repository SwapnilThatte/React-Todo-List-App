import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './job_desc.css'
export const JobDesc = () => {
    const location = useLocation();
    const url = location.pathname;
    const id = url.split("/")[2];
    let DATA = localStorage.getItem(id);
    DATA = JSON.parse(DATA)
    return (
        <>
            <Link to="/" className="back">
                <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div className="job_desc">
                <div className="title">
                    <div className="job-title-heading">Title</div>
                    <div className="job-title">{DATA.title}</div>
                </div>
               
                <div className="desc">
                    <div className="desc-heading">Description</div>
                    <div className="desc-title">
                        {DATA.desc}
                    </div>
                </div>
                <div className="job-data">
                    <div className="job-salary"> Status : {DATA.status}</div>
                    <div className="job-joining-date">
                        Date & Time : {DATA.datetime}
                    </div>
                </div>
            </div>
        </>
    );
}
