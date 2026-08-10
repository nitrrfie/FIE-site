

export default function EntryExitPolicy() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <header className="section-header section-header--center">
        <span className="section-eyebrow">Incubation Guidelines</span>
        <h1 className="section-title">Entry & Exit Policy</h1>
        <hr className="section-divider section-divider--center" />
      </header>

      <div style={{ maxWidth: '900px', margin: '40px auto 0', display: 'flex', flexDirection: 'column', gap: '40px' }} className="policy-document">
        
        {/* Intro */}
        <section>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dark)', lineHeight: '1.8' }}>
            The Innovation and Start-up Policy 2021 for National Institute of Technology Raipur (IISP) enables the institute to actively engage students, alumni, faculty/staff and other stakeholders in innovation and entrepreneurship related activities. This policy has been derived from the IISP of NIT Raipur, and any other details not covered here will be governed by IISP- NIT Raipur.
          </p>
        </section>

        {/* ISC Section */}
        <section style={{ padding: '30px', background: 'var(--color-bg)', borderRadius: 'var(--radius-card)' }}>
          <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.35rem', color: 'var(--color-secondary)', marginBottom: '16px' }}>
            Institute Startup Committee (ISC) of NIT Raipur
          </h2>
          <p style={{ marginBottom: '14px' }}>
            An Institute Startup Committee (ISC) provides the essential guidelines, screening criteria, and other norms for startups to be incubated and supported. The committee consists of:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>President:</strong> Head, CDC, NIT Raipur (Ex-officio)</li>
            <li>Dean Academics (or Representative), NIT Raipur (Ex-officio)</li>
            <li>Dean Faculty Welfare (or Representative), NIT Raipur (Ex-officio)</li>
            <li>Faculty In-Charge, Innovation Cell</li>
            <li>Faculty In-Charge, Entrepreneurship Cell</li>
            <li>Alumni Startup Founder</li>
            <li>Representative from Local Entrepreneurial/Startup Ecosystem Enabler</li>
          </ul>
        </section>

        {/* Eligibility & Admissibility */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '14px' }}>
            Start-up Eligibility & Admissibility
          </h2>
          <p>
            Applicants are eligible for start-up facility at NIT Raipur Foundation for Innovation and Entrepreneurship (NITRR-FIE) provided its stakeholders or partners are from one of the following categories:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', margin: '20px 0' }}>
            {['Student of NIT Raipur', 'Alumni of NIT Raipur', 'Faculty Member of NIT Raipur', 'Non-teaching staff of NIT Raipur', 'Outside Applicant (with relevant ideas)'].map((category, idx) => (
              <div key={idx} style={{ padding: '16px', background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', textAlign: 'center', boxShadow: 'var(--shadow-card)' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px', color: 'var(--color-primary)' }}>✓</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-secondary)' }}>{category}</span>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '1.1rem', margin: '20px 0 10px', color: 'var(--color-secondary)' }}>Selection Steps:</h3>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Business Plan Submission:</strong> Must cover Startup description, value proposition, products and services, market and competition analysis, revenue model, milestones/timelines, risk analysis, funding requirements, and projected financials.</li>
            <li><strong>Presentation:</strong> Meeting and pitch deck presentation before experts.</li>
            <li><strong>Clearance:</strong> Human subject related research in startup should get clearance from the ethics committee of NIT Raipur.</li>
            <li><strong>Incubation Agreement:</strong> Entering into a formal agreement with NITRR-FIE.</li>
          </ol>
        </section>

        {/* Equity & Revenue Sharing */}
        <section style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '20px' }}>
          <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '10px' }}>
            Equity and Service Charge Model
          </h2>
          <p style={{ lineHeight: '1.8' }}>
            In lieu of support, utilities, and services provided, the incubated companies will be charged in the form of equity and/or revenue sharing:
          </p>
          <ul style={{ listStyleType: 'square', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
            <li><strong>2% Equity:</strong> If the incubatee stays for the initial two years.</li>
            <li><strong>5% Equity:</strong> If the company stays beyond two years.</li>
          </ul>
        </section>

        {/* Exit Criteria */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '14px' }}>
            Tenure and Exit
          </h2>
          <p>
            Startups are permitted to stay in the incubation center for a period of <strong>24 months</strong>, extendable up to <strong>36 months (24 + 6 + 6)</strong> after reviews. A nominal monthly rent charge will be levied for the office space.
          </p>
          <p style={{ marginTop: '10px' }}>Exits occur under the following conditions:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
            <li>Completion of stay for 36 months (unless special extension of 12 additional months is granted).</li>
            <li>Underperformance of the startup as evaluated by the Board of Directors of NITRR-FIE.</li>
            <li>Voluntary exit by the startup with a prior notice of 3 months.</li>
          </ul>
        </section>

        {/* IPR & Product Ownership */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '12px' }}>
            Intellectual Property & Product Ownership
          </h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>
              <strong>Jointly Owned IPR:</strong> When institute facilities/funds are used substantially, or when IPR is developed as part of curriculum/academic/pre-incubation activity, IPR is to be jointly owned by inventors and the institute.
            </li>
            <li>
              <strong>Inventor Owned IPR:</strong> If product/IPR is developed by innovators without using institute resources and facilities, and outside of office hours (for staff and faculty), the IPR is fully owned by the inventors.
            </li>
          </ul>
        </section>

        {/* Action Call / Annexure */}
        <section style={{ border: '2px dashed var(--color-primary)', padding: '30px', borderRadius: 'var(--radius-card)', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.3rem', color: 'var(--color-secondary)', marginBottom: '10px' }}>
            Incubation Application Form
          </h3>
          <p style={{ marginBottom: '20px' }}>
            Ready to incubate your ideas? Review the business plan requirements in the policy and submit your application directly on the incubation platform.
          </p>
          <a 
            href="https://nitrfie.accubate.app/ext/form/1466/1/apply" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn--primary"
          >
            Apply for Incubation
          </a>
        </section>
      </div>
    </div>
  );
}
