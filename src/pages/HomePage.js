import React from 'react';
import '../styles/HomePage.css';

const countries = [
    { name: 'United States', flag: 'path/to/flags/us.png' },
    { name: 'Canada', flag: 'path/to/flags/ca.png' },
    { name: 'United Kingdom', flag: 'path/to/flags/uk.png' },
    { name: 'Germany', flag: 'path/to/flags/de.png' },
    { name: 'France', flag: 'path/to/flags/fr.png' },
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
    <div class="card">
        <h3>Card Title 4</h3>
        <p></p>
    </div>
    <div class="card">
        <h3>Card Title 5</h3>
        <p>Description for card 5.</p>
    </div>
</div>
            </div>
        </div>
    );
}

export default HomePage;