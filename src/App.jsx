import './App.css'

function App() {
  return (
    <div className="App">
      <div className="hero">
        <h1>Built Entirely from an iPhone 📱</h1>
        <p className="subtitle">Yes, you read that right!</p>
      </div>

      <div className="content">
        <section className="tech-stack">
          <h2>The Mobile Dev Setup</h2>
          <div className="tech-cards">
            <a href="https://apps.apple.com/us/app/webssh-pro/id497714887" target="_blank" rel="noopener noreferrer" className="tech-card">
              <h3>📱 WebSSH</h3>
              <p>iOS app providing terminal access from my iPhone</p>
            </a>
            <a href="https://tailscale.com" target="_blank" rel="noopener noreferrer" className="tech-card">
              <h3>🔗 Tailscale</h3>
              <p>Secure connection to my Mac Studio at home</p>
            </a>
            <a href="https://github.com/anthropics/claude-code" target="_blank" rel="noopener noreferrer" className="tech-card">
              <h3>🤖 Claude Code</h3>
              <p>AI pair programmer that wrote this entire app</p>
            </a>
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="tech-card">
              <h3>⚡ Vite + React</h3>
              <p>Lightning fast development with modern tooling</p>
            </a>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="tech-card">
              <h3>▲ Vercel</h3>
              <p>Deployed instantly from the command line</p>
            </a>
          </div>
        </section>

        <section className="story">
          <h2>The Story</h2>
          <p>
            This entire React application was created without touching a traditional computer. 
            Using WebSSH on my iPhone, I connected to my Mac Studio at home through Tailscale's 
            secure network. Then, with Claude Code as my AI assistant, I built, styled, and 
            deployed this app—all from my phone!
          </p>
          <p>
            It's a testament to how far mobile development has come. With the right tools, 
            you can code from anywhere, even from your pocket.
          </p>
        </section>

        <section className="workflow">
          <h2>The Workflow</h2>
          <ol>
            <li>Open WebSSH on iPhone</li>
            <li>Connect to Mac Studio via Tailscale</li>
            <li>Launch Claude Code in terminal</li>
            <li>Use AI to generate and modify code</li>
            <li>Deploy to Vercel with a single command</li>
          </ol>
        </section>

        <section className="contact">
          <h2>Created by Sebastian Korfmann</h2>
          <div className="contact-links">
            <a href="mailto:sebastian@korfmann.net" className="contact-link">
              <span className="icon">✉️</span>
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/skorfmann" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://bsky.app/profile/skorfmann.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">🦋</span>
              <span>Bluesky</span>
            </a>
            <a href="https://github.com/skorfmann/hello-react-iphone" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">💻</span>
              <span>Source Code</span>
            </a>
          </div>
        </section>
      </div>

      <footer>
        <p>Built with ❤️ from an iPhone • Powered by Claude Code</p>
      </footer>
    </div>
  )
}

export default App
