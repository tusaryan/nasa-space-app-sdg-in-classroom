import React from 'react';
import '../styles/HomePage.css';

const countries = [
    { name: 'United States', flag: 'data:image/png;base64,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' },
    { name: 'Canada', flag: 'data:image/jpeg;base64,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'},
    { name: 'United Kingdom', flag: 'data:image/png;base64,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' },
    { name: 'Germany', flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAD1BMVEUAAAD+zgDeAADoAAD/1wEwWYkWAAAA+ElEQVR4nO3QMQGAMAAEsS/gXzMSbuuUSMgGAAAAAAAAAAAAAAAAAAAAwEUvYQ9BUVKUFCVFSVFSlBQlRUlRUpQUJUVJUVKUFCVFSVFSlBQlRUlRUpQUJUVJUVKUFCVFSVFSlBQlRUlRUpQUJUVJUVKUFCVFSVFSlBQlRUlRUpQUJUVJUVKUFCVFSVFSlBQlRWkfYYegKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSovQDb47JpXSBiCUAAAAASUVORK5CYII=' },
    { name: 'France', flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAARVBMVEX///8AJlPOEScAJlQAFFEAKE0BJVZ2hpjOEiXPAB3TgYTQDyno6OjQECf//f/q6OoGK1gAG1ZsfZDq8O/r7ujPd3vNEyqjTlYkAAABTUlEQVR4nO3TSQ7CMBREQeMwJCTEme9/VCBrtl/IUr0jlLrTNF0iau63eVnLEFPZ9q49ckx9ChE5Ta6PFNWYnl2OMjnqNWmDSHKu2MR3fpi8gqrYpA8iqXQn6TTxHSZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyb/NWkCTcYgkfFjko8gk5ymEJKvybysZYipbHvXRpn0bznrALRzpDS4AAAAAElFTkSuQmCC' },
];
const developers = [
    { name: 'Alice Johnson', role: 'Frontend Developer' },
    { name: 'Bob Smith', role: 'Backend Developer' },
    { name: 'Charlie Brown', role: 'Full Stack Developer' },
    { name: 'Diana Prince', role: 'UI/UX Designer' },
    { name: 'Ethan Hunt', role: 'Project Manager' },
];


const HomePage = () => {
    return (
        <div className="home-page">
            {/* <video autoPlay loop muted className="background-video">
                <source src="nasa-space-app-sdg-in-classroom/src/assets/bgvideo.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video> */}
            <div className="content">
                <h2>Welcome to NASA Space App: SDGs in Classroom</h2>
                <p>
                    In 2015, the United Nations created the 2030 Sustainable Development Goals (SDG) Agenda to address global issues. 
                    Learn how you can engage students in achieving these goals through exciting lesson plans!.
                </p>
                <h3>Top 5 Participating Countries</h3>
                <ul className="country-list">
                    {countries.map((country, index) => (
                        <li key={index} className="country-item">
                            <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
                            <span>{country.name}</span>
                        </li>
                    ))}
                </ul>
                <div className="achievements">
                    <div className="achievement-box">
                        <div className="achievement">
                            <div className="achievement-number-circle">
                                <div className="achievement-number">90%</div>
                            </div>
                            <div className="achievement-description">Over 90% of global population has now access to clean drinking water</div>
                        </div>
                        <div className="divider"></div>
                        <div className="achievement">
                            <div className="achievement-number-circle">
                                <div className="achievement-number">50%</div>
                            </div>
                            <div className="achievement-description">Female Labour force participation has increased to 50% in 2022</div>
                        </div>
                        <div className="divider"></div>
                        <div className="achievement">
                            <div className="achievement-number-circle">
                                <div className="achievement-number">87%</div>
                            </div>
                            <div className="achievement-description">Secondary school enrollment rates have also improved from 84% to 87%</div>
                        </div>
                    </div>
                </div>
                <div class="cards-container">
    <div class="card">
        <h3>Rio Earth Summit (1992): </h3>
        <p>The concept of sustainable development was first introduced on a global scale at the United Nations Conference on Environment and Development in Rio de Janeiro1
        </p>
    </div>
    <div class="card">
        <h3>Millennium Development Goals (MDGs) (2000-2015): </h3>
        <p>The MDGs were a set of eight international development goals established to address poverty, hunger, disease, and education by 20152
.
</p>
    </div>
    <div class="card">
        <h3>Adoption of the SDGs (2015): </h3>
        <p>The 17 Sustainable Development Goals were adopted by all United Nations Member States in 2015 as part of the 2030 Agenda for Sustainable Developmen.</p>
    </div>
    {/* <div class="card">
        <h3>Rio+20 Conference (2012): </h3>
        <p>The United Nations Conference on Sustainable Development, also known as Rio+20, laid the groundwork for the SDGs3
        </p>
    </div> */}
    <div class="card">
        <h3>Implementation (2016-Present):</h3>
        <p>The SDGs came into effect on January 1, 2016, and countries have been working towards achieving these goals through national and international efforts</p>
    </div>
</div>
    <div className="home-container">
        <div className="timeline-container">
            <div className="timeline-event">
                <div className="timeline-content">
                    <h3>UN Ocean Conference 2025: </h3>
                    <p>Scheduled for June 9-13, 2025, in Nice, France, this conference will focus on "Our Ocean, Our Future, Our Responsibility." It aims to address the critical role of oceans in sustainable development1
.
</p>
                </div>
                <div className="timeline-arrow"></div>
            </div>
            <div className="timeline-event">
                <div className="timeline-content">
                    <h3>10th Multi-Stakeholder Forum on Science, Technology, and Innovation for the SDGs: </h3>
                    <p>This event will take place from May 7-8, 2025, and will bring together stakeholders to discuss how science, technology, and innovation can accelerate progress towards the SDGs2
                    </p>
                </div>
                <div className="timeline-arrow"></div>
            </div>
            <div className="timeline-event">
                <div className="timeline-content">
                    <h3>Asia-Pacific GSDR Launch and Workshop: </h3>
                    <p>From October 22-24, 2024, in New Delhi, India, this event will focus on the Global Sustainable Development Report (GSDR), which is produced every four years by an independent group of scientists appointed by the UN Secretary-General</p>
                </div>
            </div>
        </div>
        {/* <div className="image-container">
            <img src="https://via.placeholder.com/300" alt="Placeholder" />
        </div> */}
    </div>
<div class="page-layout">
    <div class="left-section">
        <div class="section">
            <ul>
                <li>First description point.</li>
            </ul>
        </div>
        <div class="section">
            <ul>
                <li>Second description point.</li>
            </ul>
        </div>
        <div class="section">
            <ul>
                <li>Third description point.</li>
            </ul>
        </div>
    </div>
    <div class="right-section">
        <h2><b>Question</b></h2>
        <button onclick="window.location.href='https://example.com'">Go to Site</button>
            </div>
        </div>
         <div className="developer-section">
         <h3>Meet the Developers</h3>
         <div className="developer-cards">
             {developers.map((developer, index) => (
                 <div key={index} className="developer-card">
                     <div className="developer-info">
                         <h4>{developer.name}</h4>
                         <p>{developer.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                </div>
    );
}


export default HomePage;