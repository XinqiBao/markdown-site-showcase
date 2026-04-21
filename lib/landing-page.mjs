function renderDemoCard(demo) {
  return `
        <li class="card">
          <a href="${demo.href}" class="card-link">
            <span class="eyebrow">${demo.id}</span>
            <h2>${demo.name}</h2>
            <p>${demo.description}</p>
          </a>
        </li>`
}

export function renderLandingPage({ repoName, demos }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Markdown Site Showcase</title>
    <meta
      name="description"
      content="One shared Markdown source, multiple reading models."
    />
    <style>
      :root {
        color-scheme: light;
        --bg: #f7f4ed;
        --panel: rgba(255, 255, 255, 0.82);
        --text: #221f1b;
        --muted: #6f675c;
        --line: rgba(34, 31, 27, 0.12);
        --accent: #b7663c;
        --accent-strong: #8a4d2c;
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
        color: var(--text);
        background:
          radial-gradient(circle at top, rgba(183, 102, 60, 0.16), transparent 40%),
          linear-gradient(180deg, #f9f7f1 0%, var(--bg) 100%);
      }

      main {
        max-width: 960px;
        margin: 0 auto;
        padding: 72px 24px 96px;
      }

      .hero {
        margin-bottom: 40px;
      }

      .eyebrow {
        display: inline-block;
        margin-bottom: 12px;
        color: var(--accent-strong);
        font-size: 0.78rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }

      h1 {
        margin: 0 0 12px;
        font-size: clamp(2.6rem, 6vw, 4.6rem);
        line-height: 0.94;
      }

      .lede {
        max-width: 680px;
        margin: 0;
        color: var(--muted);
        font-size: 1.15rem;
        line-height: 1.7;
      }

      .cards {
        display: grid;
        gap: 18px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        padding: 0;
        list-style: none;
      }

      .card {
        min-height: 100%;
      }

      .card-link {
        display: block;
        height: 100%;
        padding: 24px;
        border: 1px solid var(--line);
        border-radius: 20px;
        color: inherit;
        text-decoration: none;
        background: var(--panel);
        backdrop-filter: blur(10px);
        transition: transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease;
      }

      .card-link:hover,
      .card-link:focus-visible {
        transform: translateY(-2px);
        border-color: rgba(183, 102, 60, 0.4);
        box-shadow: 0 18px 36px rgba(34, 31, 27, 0.08);
        outline: none;
      }

      .card h2 {
        margin: 0 0 10px;
        font-size: 1.4rem;
      }

      .card p {
        margin: 0;
        color: var(--muted);
        line-height: 1.6;
      }

      footer {
        margin-top: 36px;
        color: var(--muted);
        font-size: 0.95rem;
      }
    </style>
  </head>
  <body>
    <main>
      <section class="hero">
        <span class="eyebrow">${repoName}</span>
        <h1>One shared Markdown source, multiple reading models</h1>
        <p class="lede">
          This repository publishes the same canonical Markdown set through
          multiple documentation and knowledge-site frameworks so the comparison
          stays focused on navigation, defaults, and maintenance cost.
        </p>
      </section>
      <ul class="cards">
${demos.map((demo) => renderDemoCard(demo)).join('\n')}
      </ul>
      <footer>
        Built from one content tree and published as a single GitHub Pages site.
      </footer>
    </main>
  </body>
</html>`
}
