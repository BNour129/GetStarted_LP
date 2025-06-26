import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <Image src="/next.svg" alt="Logo" width={120} height={30} />
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Next.js</h1>
          <p>Build modern web apps with ease.</p>
          <div className="hero-buttons">
            <button className="button button-primary">Get Started</button>
            <button className="button button-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Our Features</h2>
        <p className="section-subtitle">Everything you need</p>
        <div className="card-grid">
          <div className="card">
            <Image src="/globe.svg" alt="Global" width={48} height={48} />
            <h3 className="card-title">Global Reach</h3>
            <p className="card-text">Serve users anywhere in the world.</p>
          </div>
          <div className="card">
            <Image src="/file.svg" alt="Docs" width={48} height={48} />
            <h3 className="card-title">Documentation</h3>
            <p className="card-text">Comprehensive guides and examples.</p>
          </div>
          <div className="card">
            <Image src="/window.svg" alt="Components" width={48} height={48} />
            <h3 className="card-title">Components</h3>
            <p className="card-text">Reusable UI building blocks.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <input className="input" type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <input className="input" type="email" placeholder="Email" />
          </div>
          <button type="submit" className="button button-primary">Submit</button>
        </form>
      </section>

      <footer className="footer">
        <p className="footer-bottom">© 2024 Example Co.</p>
      </footer>
    </div>
  );
}
