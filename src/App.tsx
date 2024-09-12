import React, { useState } from 'react';
import './App.css'; // Assuming you're using App.css for styling
import model01 from './image/model01.png'; // Image for Model 1
import model02 from './image/model02.png'; // Image for Model 2
import model03 from './image/model03.png'; // Image for Model 3

const App: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<number>(1);

  const showContent = (modelNumber: number) => {
    setSelectedModel(modelNumber);
  };

  return (
    <div className="main-container scrollable">
      <div className="first-row">
        <h1>International Internship Program - SPRINT</h1>
        <div className="model-buttons">
          <button className="model-button model1" onClick={() => showContent(1)}>
            Model 1: Graduate Students
          </button>
          <button className="model-button model2" onClick={() => showContent(2)}>
            Model 2: 7th & 8th Semester Students
          </button>
          <button className="model-button model3" onClick={() => showContent(3)}>
            Model 3: 4th to 6th Semester Students
          </button>
        </div>

        <p>
          Transform Your Career with Global Internship Opportunities. Step into a world of opportunities with the SPRINT Program, a unique internship initiative designed to provide undergraduates and graduates with unparalleled international exposure.
        </p>
      </div>

      <div className="second-row">
        <div className="content-column">
          {selectedModel === 1 && (
            <div id="content-1" className="content-grid">
              <div className="column-content">
                <h2>Program Highlights</h2>
                <ul>
                  <li>Collaborate with international companies on live projects.</li>
                  <li>Gain hands-on experience under the guidance of industry leaders.</li>
                  <li>Work part-time or full-time with a stipend ranging from ₹30,000 to ₹50,000 per month.</li>
                </ul>
                <h2>Model 1: For the Passed out Students</h2>
                <ul>
                  <li>Total Fee: ₹85,000</li>
                  <ul>
                    <li>Student Fee: ₹15,000</li>
                    <li>Council Scholarship: ₹70,000</li>
                  </ul>
                </ul>
                <h3>Structure:</h3>
                <ul>
                  <li>Month 1: Soft Skill Training</li>
                  <li>Month 2: Work with Industry (Stipend: ₹5,000)</li>
                  <li>Month 3 Onwards: Paid Position as per Industry Standards</li>
                </ul>
                <button>Enroll Now</button>
              </div>
            </div>
          )}

          {selectedModel === 2 && (
            <div id="content-2" className="content-grid">
              <div className="column-content">
                <h2>Program Highlights</h2>
                <ul>
                  <li>Collaborate with international companies on live projects.</li>
                  <li>Gain hands-on experience under the guidance of industry leaders.</li>
                  <li>Work part-time or full-time with a stipend ranging from ₹30,000 to ₹50,000 per month.</li>
                </ul>
                <h2>Model 2: For 7th & 8th Semester Unddergraduate Students</h2>
                <ul>
                  <li>Total Fee: ₹85,000</li>
                  <ul>
                    <li>Student Fee: ₹13,500</li>
                    <li>Council Scholarship: ₹71,500</li>
                  </ul>
                </ul>
                <h3>Structure:</h3>
                <ul>
                  <li>Month 1: Soft Skill Training</li>
                  <li>Month 2: Work with Industry (Unpaid)</li>
                  <li>Month 3 & 4: Industry Stipend (Optional)</li>
                  <li>Month 5 Onwards: Paid Position as per Industry Standards</li>
                </ul>
                <button>Enroll Now</button>
              </div>
            </div>
          )}

          {selectedModel === 3 && (
            <div id="content-3" className="content-grid">
              <div className="column-content">
                <h2>Program Highlights</h2>
                <ul>
                  <li>Collaborate with international companies on live projects.</li>
                  <li>Gain hands-on experience under the guidance of industry leaders.</li>
                  <li>Work part-time or full-time with a stipend ranging from ₹30,000 to ₹50,000 per month.</li>
                </ul>
                <h2>Model 3: 4th & 6th Semester Students </h2>
                <ul>
                  <li>Total Fee: ₹85,000</li>
                  <ul>
                    <li>Student Fee: ₹8,500</li>
                    <li>Council Scholarship: ₹77,500</li>
                  </ul>
                </ul>
                <h3>Structure:</h3>
                <ul>
                <li>Month 1: Soft Skill Training</li>
                  <li>Month 2: Work with Industry (Unpaid)</li>
                  <li>Month 3 & 4: Industry Stipend (Optional)</li>
                  <li>Month 5 Onwards: Paid Position as per Industry Standards</li>
                </ul>
                <button>Enroll Now</button>
              </div>
            </div>
          )}
        </div>

        {/* Three separate image containers for different contents */}
        <div className="image-column">
          {selectedModel === 1 && (
            <div id="image-container-1" className="image-grid">
              <img src={model01} alt="Model 1 Image" />
            </div>
          )}
          {selectedModel === 2 && (
            <div id="image-container-2" className="image-grid">
              <img src={model02} alt="Model 2 Image" />
            </div>
          )}
          {selectedModel === 3 && (
            <div id="image-container-3" className="image-grid">
              <img src={model03} alt="Model 3 Image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
