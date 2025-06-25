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

      <footer className="footer">
        <p className="footer-bottom">© 2024 Example Co.</p>
      </footer>
    </div>
  );
}
