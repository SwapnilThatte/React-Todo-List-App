import React from 'react'
import { useState } from 'react'
import './newNoteForm.css'
import { Link, useLocation } from 'react-router-dom'
export const NewNoteForm = ({ addVaccency }) => {
    
    // const [company, setCompany] = useState("")
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("")
    const [datetime, setDateTime] = useState("")
    const [desc, setDesc] = useState("")

    
    const handleSubmit = (e) => {
        e.preventDefault()
        addVaccency({
            title : title,
            status : status,
            datetime : datetime,
            desc : desc,
            id : Date.now()
        })
        
        
    } 

  return (
      <>
          <Link to="/" className="back">
              <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="new-note">
              <div className="new-note-card">
                  <div className="new-note-title">Add New Task</div>
                  <form
                      className="new-note-form"
                      onSubmit={(e) => handleSubmit(e)}
                  >
                      <div className="form-group">
                          <label htmlFor="jobTitle" className="input-title">
                              Title
                          </label>
                          <input
                              type="text"
                              name="status"
                              id="status"
                              value={title}
                              onInput={(e) => setTitle(e.target.value)}
                          />
                      </div>

                      <div className="form-grp-flex">
                          <div>
                              <label htmlFor="salary" className="input-title">
                                  Status
                              </label>
                              Completed
                              <input
                                  type="radio"
                                  name="status"
                                  id="status"
                                  value={status}
                                  onInput={(e) => setStatus(true)}
                              />
                              Incompleted
                              <input
                                  type="radio"
                                  name="status"
                                  id="status"
                                  value={status}
                                  onInput={(e) => setStatus(false)}
                              />
                          </div>
                          <div>
                              <label htmlFor="datetime" className="input-title">
                                  Date - Time
                              </label>
                              <input
                                  type="date"
                                  name="datetime"
                                  id="datetime"
                                  value={datetime}
                                  onInput={(e) => setDateTime(e.target.value)}
                              />
                          </div>
                      </div>

                      <div className="form-group">
                          <label htmlFor="desc" className="input-title">
                              Description
                          </label>
                          <textarea
                              name="desc"
                              id="desc"
                              cols="30"
                              rows="10"
                              value={desc}
                              onInput={(e) => setDesc(e.target.value)}
                          ></textarea>
                      </div>
                      <button type="submit" className="btn">
                          Submit
                      </button>
                  </form>
              </div>
          </div>
      </>
  );
}
