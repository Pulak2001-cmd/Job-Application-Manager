import React, { useState } from 'react';
import '../style/HomePage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HomePage(props) {
  const navigate = useNavigate();
  const [option, setOption] = useState('');
  const logout = () => {
    localStorage.removeItem('token');
    props.setLoggedIn(false);
    navigate('/');
  }
  const [speciality, setSpeciality] = useState([
    'Software Development',
    'Backend Development',
    'UI/UX Design',
    'Database Development',
  ]);
  const salaryType = ['Hourly wage', 'Monthly', 'Yearly'];
  const employment = ["Full time", "Senior level", "Remote", "Contract"];
  const job_list = [
    {
        id: 1,
        company_name: "PWC India",
        location: "Kolkata, India",
        time: "1 hour ago",
        tags: ['Fulltime', 'Freshers', 'Software'],
        logo: 'https://m.economictimes.com/thumb/msid-75798602,width-1200,height-900,resizemode-4,imgsize-302579/election-at-pwc-india-5-candidates-in-fray-for-the-top-job.jpg'
    },
    {
        id: 1,
        company_name: "PWC India",
        location: "Kolkata, India",
        time: "1 hour ago",
        tags: ['Fulltime', 'Freshers', 'Software'],
        logo: 'https://m.economictimes.com/thumb/msid-75798602,width-1200,height-900,resizemode-4,imgsize-302579/election-at-pwc-india-5-candidates-in-fray-for-the-top-job.jpg'
    },
  ];
  return (
    <div className="d-flex flex-column">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">JobTrackr</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Your Jobs</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Add a Job</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">About us</a>
                    </li>
                </ul>
                    <div class="d-flex dropdown">
                        <div class="nav-link d-flex flex-row" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={process.env.PUBLIC_URL+"/profile.png"} height="60px" width="60px" class="profile-img" alt='profile'/>
                            <p className='m-3'>Aritra Majumder</p>
                        </div>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li class="dropdown-item" onClick={logout} style={{cursor: 'pointer'}}>Logout</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </nav>
        <div className="container justify-content-center align-items-center d-flex">
            <div className="search-container d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                    <div className="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                    <div className="search-input">
                        <input type="text" placeholder='Job Title or keyword' />
                    </div>
                </div>
                <div className="search-btn">Submit</div>
            </div>
        </div>
        <div className="m-lg-4 d-flex flex-column flex-lg-row align-items-center">
            <div className="col-lg-3 d-flex flex-column align-items-center justify-content-center m-lg-4 align-items-lg-start">
                <h4 className="mt-3">Filter</h4>
                <input type="text" placeholder="Company, skill, tags..." className='skill-input'/>
                <div className="m-2 m-lg-4">
                    <h5 onClick={()=> setOption('speciality')}>Speciality 
                        {option !== 'speciality' ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg> : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>}
                    </h5>
                    <div className="align-items-start">
                    {option === 'speciality' && speciality.map((i, index)=> (
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                {i}
                            </label>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="m-4">
                    <h5 onClick={()=> setOption('employment')}>Employment 
                        {option !== 'employment' ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg> : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>}
                    </h5>
                    <div className="align-items-start">
                    {option === 'employment' && employment.map((i, index)=> (
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                {i}
                            </label>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="m-lg-4">
                    <h5 onClick={()=> setOption('salaryType')}>Salary type 
                        {option !== 'salaryType' ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg> : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>}
                    </h5>
                    <div className="align-items-start">
                    {option === 'salaryType' && salaryType.map((i, index)=> (
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                {i}
                            </label>
                        </div>
                    ))}
                    </div>
                </div>
                
            </div>
            <div className="col-lg-7">
                {job_list.map((job, index) =>(
                    <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center job">
                        <div className="img">
                            <img src={job.logo} alt="Logo" width="40px" height="40px" />
                        </div>
                        <div className="name">
                            <h6>{job.company_name}</h6>
                        </div>
                        <div className="skills flex-row d-flex">
                            {job.tags.map((tag, index) =>(
                                <div className='tag'>
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="location">
                            <p>{job.location}</p>
                        </div>
                        <div className="time">
                            <p>{job.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomePage