import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile, numbers, jobs, projects, toolbox } from "@/data/content";
import Chips from "@/components/Chips";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Motion from "@/components/Motion";
import Header from "@/components/Header";
import Typewriter from "@/components/Typewriter";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const TITLE = "Sanket Gabhane | Node.js & React Full Stack Developer, Pune";
const DESCRIPTION =
  "Full stack developer in Pune with 4+ years of Agile experience in Node.js, React, Express and MongoDB. Available to join immediately. View projects and get in touch.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Sanket Gabhane",
    "Full Stack Developer Pune",
    "Node.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Express.js",
    "MongoDB",
    "Immediate joiner",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Home() {
  // Google ko structured data: "ye ek Person hai, Pune ka full stack developer"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: "Full Stack Developer",
    description: DESCRIPTION,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Node.js",
      "React",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "REST APIs",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Dr. Babasaheb Ambedkar College of Engineering and Research, Nagpur",
      },
      {
        "@type": "EducationalOrganization",
        name: "Shri Datta Meghe Polytechnic, Nagpur",
      },
    ],
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Motion />
      <Header />

      <main id="top">
        {/* ------------------------------------- HERO START ------------------ */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <p className="hero-in label hero__status">
              <span className="pulse" /> Available immediately · Pune, India
            </p>

            <h1 id="hero-title" className="hero__name hero-in">
              Sanket Gabhane<span className="accent">.</span>
            </h1>

            <p className="hero__role hero-in">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Node.js Developer",
                  "React Developer",
                ]}
              />
            </p>

            <div className="hero__row hero-in">
              <p className="hero__lead">
                Full stack developer in Pune with 4+ years in Agile teams. I
                build React front ends, Express APIs and MongoDB models, and
                take features from screen to database in production. Ready to
                join immediately.
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
        {/* --------------------------------------- HERO END ---------------------------------- */}

        <section className="numbers" aria-label="Career highlights">
          <dl className="container numbers__grid">
            {numbers.map((n) => (
              <div key={n.label} className="reveal">
                <dt>{n.value}</dt>
                <dd>{n.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------------------------------- 01 / experience ------------------------------ */}
        <section id="career" className="section container">
          <SectionHeading no="01 / experience">Work experience</SectionHeading>
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
              Projects I&apos;ve built
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
          <SectionHeading no="03 / skills">
            Skills and tech stack
          </SectionHeading>
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
                    Nagpur
                  </span>
                </li>
                <li>
                  <strong>Diploma in Computer Technology</strong>
                  <span className="muted">
                    Shri Datta Meghe Polytechnic, Nagpur
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
            <p className="label">05 / contact</p>
            <h2>Hiring a full stack developer?</h2>
            <p className="muted contact__lead">
              I&apos;m available to join immediately. Send a note about the role
              or project and I&apos;ll reply quickly.
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
        <p className="footer__copy">
          © 2026 Sanket Gabhane · Full Stack Developer · Pune, IN
        </p>

        <ul className="footer__social">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Sanket Gabhane on GitHub"
            >
              <Github size={18} />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Sanket Gabhane on LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
