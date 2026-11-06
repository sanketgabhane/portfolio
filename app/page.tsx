import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile, numbers, jobs, projects, toolbox } from "@/data/content";
import Chips from "@/components/Chips";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Motion from "@/components/Motion";

const links = [
  ["Career", "#career"],
  ["Work", "#work"],
  ["Toolbox", "#toolbox"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <>
      <Motion />
      <header className="site-header">
        <nav className="container site-header__nav" aria-label="Primary">
          <a href="#top" className="logo">
            Sanket Gabhane
          </a>
          <div className="site-header__links">
            {links.map(([t, h]) => (
              <a key={h} href={h}>
                {t}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn btn--outline btn--sm">
            Hire me
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="hero-in label hero__status">
              <span className="pulse" /> Immediate joiner · Pune, India
            </p>
            <h1 className="hero__name hero-in">
              Sanket
              <br />
              Gabhane<span className="accent">.</span>
            </h1>
            <div className="hero__row hero-in">
              <p className="hero__lead">
                Node.js full stack developer. I build React front ends, Express
                APIs and MongoDB models that go from screen to database in
                production, with 4+ years in Agile teams.
              </p>
              <div className="hero__actions">
                <a href="#work" className="btn btn--solid">
                  See my work
                </a>
                <a href={`mailto:${profile.email}`} className="btn btn--ghost">
                  Email me
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="numbers">
          <dl className="container numbers__grid">
            {numbers.map((n) => (
              <div key={n.label} className="reveal">
                <dt>{n.value}</dt>
                <dd>{n.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="career" className="section container">
          <SectionHeading no="01 / changelog">
            Where I&apos;ve shipped
          </SectionHeading>
          <ol className="jobs">
            {jobs.map((j) => (
              <li key={j.role + j.when} className="job reveal">
                <div>
                  <p className="job__when">{j.when}</p>
                  <h3>{j.role}</h3>
                  <p className="muted">{j.org}</p>
                </div>
                <div>
                  <ul className="job__points">
                    {j.points.map((p) => (
                      <li key={p}>
                        <span className="dash" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Chips items={j.stack} />
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="section section--panel">
          <div className="container">
            <SectionHeading no="02 / projects">
              Things I&apos;ve built
            </SectionHeading>
            {projects.map((p, i) => (
              <article key={p.name} className="project reveal">
                <span className="project__no">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{p.name}</h3>
                  <p className="muted">{p.kind}</p>
                  <span className="tag">{p.tag}</span>
                </div>
                <div>
                  <p className="muted">{p.text}</p>
                  <Chips items={p.stack} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="toolbox" className="section container">
          <SectionHeading no="03 / toolbox">What I work with</SectionHeading>
          <div className="toolbox">
            {toolbox.map((t) => (
              <div key={t.group} className="toolbox__cell reveal">
                <h3 className="label">{t.group}</h3>
                <p>{t.items.join("  ·  ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="background">
          <div className="container background__grid">
            <div className="reveal">
              <p className="label">04 / background</p>
              <h2>Education</h2>
              <ul>
                <li>
                  <strong>B.E. Computer Science and Engineering</strong>
                  <span className="muted">
                    Dr. Babasaheb Ambedkar College of Engineering and Research,
                    Nagpur ·
                  </span>
                </li>
                <li>
                  <strong>Diploma in Computer Technology</strong>
                  <span className="muted">
                    Shri Datta Meghe Polytechnic, Nagpur ·
                  </span>
                </li>
              </ul>
            </div>
            <div className="reveal">
              <p className="label" aria-hidden="true">
                &nbsp;
              </p>
              <h2>Achievements</h2>
              <ul className="muted">
                <li>
                  Participated in Smart India Hackathon 2018, organised by the
                  Ministry of Human Resource Development.
                </li>
                <li>
                  Published research paper “Parse NTFS File System Through
                  Android Device”, IJSRSET, March 2019.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact">
          <div className="reveal">
            <p className="label">05 / say hello</p>
            <h2>Have a role or project in mind?</h2>
            <p className="muted contact__lead">
              I&apos;m available to join immediately. Send a note and I&apos;ll
              reply quickly.
            </p>
            <ul className="contact__list">
              <li>
                <Mail size={18} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>

              <li>
                <Phone size={18} />
                <a href={profile.phoneHref}>{profile.phone}</a>
              </li>
              <li>
                <MapPin size={18} />
                {profile.location}
              </li>
            </ul>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copy">© 2026 Sanket Gabhane · Pune, IN</p>

        <ul className="footer__social">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
