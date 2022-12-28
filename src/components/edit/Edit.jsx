import React, {useEffect, useState} from 'react'
import {Link,  useLocation } from 'react-router-dom';
import './edit.css'


export const Edit = () => {

   let location = useLocation();
   let url = location.pathname;
   const id = url.split("/")[2];
   let DATA = JSON.parse(localStorage.getItem(id));
    const original = DATA

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const [datetime, setDateTime] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

      
if (title === "") {
    setTitle(original.title);
}
if (status === "") {
    setStatus(original.status);
}
if (datetime === "") {
    setDateTime(original.datetime);
}
if (desc === "") {
    setDesc(original.desc);
}

localStorage.removeItem(id)
        localStorage.setItem(
            Date.now(),
            
            JSON.stringify({
                title: title,
                status: status,
                datetime: datetime,
                desc: desc,
                id: Date.now(),
            })
        );
       
        window.location = "/"
    };


    useEffect(() => {
        DATA.title = title;
        DATA.status = status;
        DATA.datetime = datetime;
        DATA.desc = desc;
        DATA.id = id;
    }, [title, status, datetime, desc, id]);


    return (
        <>
            <Link to="/" className="back">
                <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div className="new-note">
                <div className="new-note-card">
                    <div className="new-note-title">Edit Task</div>
                    <form
                        className="new-note-form"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className="form-group">
                            <label
                                htmlFor="editjobTitle"
                                className="input-title"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="editjobTitle"
                                id="editjobTitle"
                                defaultValue={DATA.title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-grp-flex">
                            <div>
                                <label
                                    htmlFor="editsalary"
                                    className="input-title"
                                >
                                    Status
                                </label>
                                <input
                                    type="text"
                                    name="editsalary"
                                    id="editsalary"
                                    defaultValue={DATA.status}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="editdatetime"
                                    className="input-title"
                                >
                                    Date - Time
                                </label>
                                <input
                                    type="date"
                                    name="editdatetime"
                                    id="editdatetime"
                                    defaultValue={DATA.datetime}
                                    onChange={(e) =>
                                        setDateTime(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="editdesc" className="input-title">
                                Description
                            </label>
                            <textarea
                                name="editdesc"
                                id="desc"
                                cols="30"
                                rows="10"
                                defaultValue={DATA.desc}
                                onChange={(e) => setDesc(e.target.value)}
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
};
