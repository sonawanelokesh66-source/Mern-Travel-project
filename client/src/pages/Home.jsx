function Home() {
  return (
    <section>
      <div className="page-header">
        <h1>Travel stories from real people</h1>
        <p>Discover honest experiences, practical tips, and places worth visiting.</p>
      </div>

      <div className="home-grid">
        <article className="feature-card">
          <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=900&q=80" alt="Travel scene" />
          <div className="feature-body">
            <span className="tag">Featured</span>
            <h3>Start your next journey with confidence</h3>
            <p>
              Read destination stories shared by travellers like you, with real
              costs, honest moments, and practical planning tips.
            </p>
          </div>
        </article>

        <article className="mini-card hero-strip">
          <h4>New This Week</h4>
          <p>5 fresh stories added from Japan, Nepal, Italy, Peru, and Vietnam.</p>
          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=700&q=80"
            alt="Traveler with camera"
          />
        </article>
      </div>

      <div className="extra-section">
        <h2>Popular This Week</h2>
        <div className="mini-grid">
          <article className="mini-card">
            <h4>Mountain Trails</h4>
            <p>Tips for first-time high-altitude trips and budget planning.</p>
          </article>
          <article className="mini-card">
            <h4>City Walks</h4>
            <p>Best 48-hour plans for quick weekend escapes.</p>
          </article>
          <article className="mini-card">
            <h4>Food Journals</h4>
            <p>Local dishes that are worth trying in every destination.</p>
          </article>
        </div>
      </div>

      <div className="extra-section">
        <h2>Plan Better Trips</h2>
        <div className="split-section">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=900&q=80"
            alt="Map planning"
          />
          <div className="mini-card">
            <h4>Simple planning checklist</h4>
            <p>
              Pick your season, set your budget, shortlist destinations, and
              use story filters to compare real traveler experiences.
            </p>
            <p>
              Our blog pages are designed for quick browsing so you can decide
              faster and travel smarter.
            </p>
          </div>
        </div>
      </div>

      <div className="extra-section">
        <h2>Destination Gallery</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80" alt="Mountains" />
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80" alt="Lake" />
          <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=900&q=80" alt="City" />
          <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=900&q=80" alt="Beach" />
        </div>
      </div>

      <div className="extra-section">
        <div className="cta-banner">
          <h2>Ready to explore more stories?</h2>
          <p>Head to the Blogs page and filter by destination, category, or title.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
