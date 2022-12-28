import React from 'react'
import './job.css'

import { Link, useLocation } from "react-router-dom";

export const Job = ({ job }) => {

    let statusofTask = "Incomplete"

    let location = useLocation()
    const handleDelete = event => {
        localStorage.removeItem(job.id) 
        location.redirect("/")
    }


    const handleEdit = (event) => {
        window.location = `/edit/${job.id}`
    }
    let color = "red"
    if (job.status === true || job.status === true) {
        color = "green"
        statusofTask = "Completed"
    }

  return (
      <div className="job-card">
          <div className="job-top">
              <div
                  className="job-title"
                  style={{ color: `${color}` }}
              >
                  {job.title}
              </div>
              <div className="job-actions w3-dropdown-hover">
                  <span className="material-symbols-outlined">more_vert</span>
                  <div className="w3-dropdown-content w3-bar-block w3-border">
                      <Link
                          to="/"
                          className="w3-bar-item w3-button list-item"
                          onClick={(e) => handleDelete(e)}
                      >
                          <span className="material-symbols-outlined">
                              delete
                          </span>
                          Delete
                      </Link>
                      <div
                          onClick={(e) => handleEdit(e)}
                          className="w3-bar-item w3-button list-item"
                      >
                          <span className="material-symbols-outlined">
                              edit
                          </span>
                          Edit
                      </div>
                  </div>
              </div>
          </div>
          <Link to={`/desc/${job.id}`}>
              <div className="job-data">
                  <div className="job-salary">{statusofTask}</div>
                  <div className="job-joining-date">
                      Date & Time : {job.datetime}
                  </div>
              </div>
              <div className="job-desc">{job.desc}</div>
          </Link>
      </div>
  );
}
