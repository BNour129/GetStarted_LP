import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <span className="brand">GetStarted</span>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Your Partner in Turning Ideas into Future-Shaping Startups</h1>
          <p>
            Embark on your path to success with our expertise and strategic
            mentorship.
          </p>
          <div className="hero-buttons">
            <button className="button button-primary">Get Started</button>
            <button className="button button-secondary">Contact Us</button>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="section-title">Bringing Ideas To Life</h2>
        <p>
          At GetStarted, we are a dynamic and forward-thinking organization
          committed to empowering entrepreneurs and innovators. Specializing in
          launching and nurturing startups, we provide the expertise, resources
          and mentorship needed to transform groundbreaking ideas into thriving
          companies.
        </p>
      </section>

      <section id="services" className="features">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">Perfect Solution for Your Business</p>
        <div className="card-grid">
          <div className="card">
            <Image src="/globe.svg" alt="Strategy" width={48} height={48} />
            <h3 className="card-title">Startup Strategy</h3>
            <p className="card-text">Tailored strategies to refine your business model.</p>
          </div>
          <div className="card">
            <Image src="/file.svg" alt="Development" width={48} height={48} />
            <h3 className="card-title">Business Development</h3>
            <p className="card-text">Build scalable processes for long-term growth.</p>
          </div>
          <div className="card">
            <Image src="/window.svg" alt="Branding" width={48} height={48} />
            <h3 className="card-title">Marketing & Branding</h3>
            <p className="card-text">Create a strong brand identity and reach customers.</p>
          </div>
        </div>
        </section>

        <section className="cta">
          <h2 className="section-title">Are you ready to take the next step?</h2>
          <p className="section-subtitle">
            Connect with us to turn your ideas into reality.
          </p>
          <button className="button button-primary">Contact Us</button>
        </section>

        <section id="contact" className="contact">
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
        <div className="footer-col">
          <h3>GetStarted</h3>
          <p>At GetStarted we are more than a business incubator.</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
        <p className="footer-bottom">All rights reserved | GetStarted 2025</p>
      </footer>
    </div>
  );
}
