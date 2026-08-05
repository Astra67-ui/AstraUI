import '../styles/contact.css';

function Contact() {
  const API_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:8080/api/contact';

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('.contact-submit');
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    btn.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.background = '#555';

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok) {
        btn.textContent = 'Sent! ✓';
        btn.style.background = '#1a9e75';
        form.reset();
      } else {
        btn.textContent = json.message || 'Something went wrong.';
        btn.style.background = '#e8402a';
      }
    } catch {
      btn.textContent = 'Could not reach server.';
      btn.style.background = '#e8402a';
    } finally {
      btn.disabled = false;
      setTimeout(() => {
        btn.textContent = 'Send message →';
        btn.style.background = '';
      }, 3500);
    }
  }

  return (
    <main>
      <h1 className="page-title">Contact</h1>

      <div className="contact-grid">
        <div>
          <p className="contact-intro">
            Open to internships, freelance projects, and collaborations. Drop me
            a message or reach out on any of these platforms.
          </p>
          <div className="contact-links">
            <a
              className="contact-chip"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              GitHub
            </a>
            <a
              className="contact-chip"
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a className="contact-chip" href="mailto:your@email.com">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <button className="contact-submit" type="submit">
            Send message →
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
