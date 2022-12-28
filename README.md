# TODO List App

## To run 
1. <code>npm install</code>
2. <code>npm run dev</code>


## Dependencies
vite\
react-router-dom

## Info
    The app uses localstorage of the browser to store the data.

    -  Endpoints
            
            /completed   ===>  Displays all completed tasks

            /newjob  ===> Allows to create new task
            
            /incomplete  ===>  Displays all incomplete tasks
            
            /desc/:id    ===> Displays description of tasks

            /edit/:id    ===>  Allows to edit the given task 

## Directory Structure
#### public
    Contains all the public files such as images.
#### src
    Contains source code of the application.
       |
       --> Components   
           |
           --> all_jobs 
               |
               --> jobs.css
               --> Jobs.jsx
           |
           --> edit 
               |
               --> edit.css
               --> Edit.jsx
           |
           --> form 
               |
               --> newNoteForm.css
               --> newNoteForm.jsx
           |
           --> job 
               |
               --> job.css
               --> Job.jsx
           |
           --> job_desc 
               |
               --> job_desc.css
               --> JobDesc.jsx
        |
        --> App.css
        --> App.jsx
        --> index.css
        --> index.jsx
        --> .gitignore
        --> index.html
        --> package-lock.json
        --> package.json
        --> README.md
        --> vite.config.js