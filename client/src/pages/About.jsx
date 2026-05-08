function About() {
  return (
    <section>
      <div className="page-header">
        <h1>About Wanderlog</h1>
        <p>Travel writing that respects your time.</p>
      </div>

      <div className="about-hero">
        <div>
          <h2>Every journey deserves a great story</h2>
          <p>
            Wanderlog is a community-driven travel blog where real travellers
            share honest, first-person stories from around the world.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=80" alt="Traveller" />
      </div>

      <div className="stats-row">
        <div className="stat"><span className="number">48+</span><span className="label">Stories</span></div>
        <div className="stat"><span className="number">28</span><span className="label">Countries</span></div>
        <div className="stat"><span className="number">12k</span><span className="label">Monthly readers</span></div>
      </div>

      <div className="extra-section">
        <h2>Our Values</h2>
        <div className="mini-grid">
          <article className="mini-card">
            <h4>Honest writing</h4>
            <p>We share what worked and what did not, so readers can plan better.</p>
          </article>
          <article className="mini-card">
            <h4>Real perspectives</h4>
            <p>Stories come from different types of travelers and different budgets.</p>
          </article>
          <article className="mini-card">
            <h4>Community first</h4>
            <p>Readers and writers help each other through shared experiences.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
