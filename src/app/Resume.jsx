import '../styles/resume.css';

function Resume() {
  return (
    <main>
      <h1 className="page-title">Resume</h1>

      <div className="resume-cat">Education</div>
      <div className="resume-entries">
        <div className="entry-date first">2025 - 2029</div>
        <div className="entry-content first">
          <div className="entry-title">Gordon College</div>
          <div className="entry-sub">
            Bachelor of Science in Computer Science
          </div>
        </div>

        <div className="entry-date last">2023 - 2025</div>
        <div className="entry-content last">
          <div className="entry-title">St. Joseph College Inc.</div>
          <div className="entry-sub">STEM Graduate</div>
        </div>
      </div>
      <hr className="section-divider" />

      <div className="resume-cat">Work Experience</div>
      <div className="resume-entries">
        <div className="entry-date first">Estimated: 2027 </div>
        <div className="entry-content first">
          <div className="entry-title">Internship </div>
          <div className="entry-sub">Coming Soon</div>
        </div>
      </div>
      <hr className="section-divider" />

      <div className="resume-cat">Certifications</div>
      <div className="resume-entries">
        <div className="entry-date first">Estimated: 2029 </div>
        <div className="entry-content first">
          <div className="entry-title">Not Available </div>
          <div className="entry-sub">Coming Soon</div>
        </div>
      </div>
      <hr className="section-divider" />

      <div className="resume-cat">Skills</div>
      <div className="resume-entries">
        <div className="entry-date first">Languages & Frameworks</div>
        <div className="entry-content first">
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Java</span>
          <span className="skill-tag">MySQL</span>
        </div>

        <div className="entry-date last">Tools</div>
        <div className="entry-content last">
          <span className="skill-tag">VS Code</span>
          <span className="skill-tag">Git</span>
          <span className="skill-tag">GitHub</span>
          <span className="skill-tag">Vercel</span>
          <span className="skill-tag">SQLite</span>
        </div>

        <div className="entry-date last">Soft Skills</div>
        <div className="entry-content last">
          <span className="skill-tag">Communication</span>
          <span className="skill-tag">Adaptability</span>
          <span className="skill-tag">Problem Solving</span>
        </div>
      </div>
      <hr className="section-divider" />
    </main>
  );
}

export default Resume;
