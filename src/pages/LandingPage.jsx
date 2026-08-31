import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  FileText,
  HeartPulse,
  LockKeyhole,
  Mail,
  Package,
  Plus,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import Header from "../components/Header";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import CareOrbit from "../components/CareOrbit";
import styles from "../App.module.css";

gsap.registerPlugin(ScrollTrigger);
const features = [
  [
    Stethoscope,
    "Doctor management",
    "Keep every provider, shift, and specialty organized in one calm workspace.",
  ],
  [
    UsersRound,
    "Patient database",
    "A complete, accessible patient story from first visit to follow-up.",
  ],
  [
    CalendarDays,
    "Appointment scheduling",
    "Make booking effortless for your team and your patients.",
  ],
  [
    FileText,
    "Billing & invoices",
    "Accurate, transparent billing that keeps your practice moving.",
  ],
  [
    BarChart3,
    "Reports & insights",
    "Turn everyday activity into decisions that improve care.",
  ],
  [
    Package,
    "Inventory control",
    "Know what you have, what you need, and when to reorder.",
  ],
  [
    ClipboardList,
    "Lead tracking",
    "Give every enquiry a clear next step, without the spreadsheet chase.",
  ],
];
const steps = [
  ["01", "Login", "A secure home for your whole team."],
  ["02", "Register", "Set up your practice in minutes."],
  ["03", "Schedule", "Fill your day with clarity."],
  ["04", "Consult", "Spend more time with patients."],
  ["05", "Bill", "Close the loop, effortlessly."],
  ["06", "Report", "See what is changing."],
];
const testimonials = [
  [
    "Dr. Ananya Mehta",
    "Medical Director, Olive Clinic",
    "“Medivardaan gave our team back the time we thought we had lost to admin. The clinic feels lighter, and our patients notice.”",
    "AM",
  ],
  [
    "Dr. Rohan Shah",
    "Founder, Northstar Dental",
    "“We went from scattered notes and spreadsheets to one shared source of truth in under a week.”",
    "RS",
  ],
];
const workflowVideoUrl = "https://www.youtube.com/embed/fyUDjJH6Zm8";

export default function LandingPage() {
  const pageRef = useRef(null);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".heroReveal", {
        y: 32,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.from(".reveal", {
        scrollTrigger: { trigger: ".reveal", start: "top 82%" },
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
      });
      gsap.from(".featureCard", {
        scrollTrigger: { trigger: ".featureGrid", start: "top 78%" },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });
      gsap.to(".orbitDot", {
        rotate: 360,
        transformOrigin: "50% 50%",
        duration: 18,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".orbitRing", {
        rotate: 360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".orbitHalo", {
        scale: 1.08,
        opacity: 0.7,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".nodePulse", {
        y: -12,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".nodeShield", {
        y: 10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4,
      });
      gsap.to(".nodeActivity", {
        y: -8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8,
      });
      const orbit = document.querySelector(".careOrbit");
      const moveOrbit = (event) => {
        if (!orbit) return;
        const box = orbit.getBoundingClientRect();
        gsap.to(orbit, {
          rotateY: (event.clientX - box.left - box.width / 2) / 18,
          rotateX: -(event.clientY - box.top - box.height / 2) / 18,
          duration: 0.55,
          ease: "power2.out",
        });
      };
      const resetOrbit = () =>
        orbit &&
        gsap.to(orbit, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      orbit?.addEventListener("mousemove", moveOrbit);
      orbit?.addEventListener("mouseleave", resetOrbit);
      return () => {
        orbit?.removeEventListener("mousemove", moveOrbit);
        orbit?.removeEventListener("mouseleave", resetOrbit);
      };
    }, pageRef);
    return () => context.revert();
  }, []);

  return (
    <main ref={pageRef} id="top" className={styles.page}>
      <Header />
      <CareOrbit />
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={`${styles.logoTarget} ${styles.logoTargetStart}`} data-logo-target="start" aria-hidden="true">
          <span>care connected</span>
        </div>
        <div className={styles.heroContent}>
          <div className="heroReveal">
    <span className={styles.statusDot} /> 
    <span style={{ color: "var(--lime)" }}>Built for better care</span>{" "}
    <span className={styles.statusLine} />
  </div>
          <h1 className="heroReveal">
            Digitize your clinic.
            <br />
            <em>Empower patient care.</em>
          </h1>
          <p className={`heroReveal ${styles.heroCopy}`}>
            Medivardaan automates appointments, billing, patient records, and
            follow-ups — all from one secure platform.
          </p>
          <div className={`heroReveal ${styles.heroActions}`}>
            <a href="#contact" className={styles.primaryButton}>
              Book a demo <ArrowRight size={17} />
            </a>
            <a href="#platform" className={styles.textButton}>
              Explore platform <ArrowRight size={17} />
            </a>
          </div>
          <div className={`heroReveal ${styles.trustLine}`}>
            <span>Trusted by modern clinics</span>
            <div>◈ 24/7 support</div>
            <div>
              <ShieldCheck size={14} /> Secure by design
            </div>
          </div>
        </div>
        <div className={`${styles.heroVisual} heroReveal`}>
          <div className={styles.dashboardHeader}>
            <span>
              <span className={styles.liveDot} /> Clinic overview
            </span>
            <span className={styles.datePill}>
              Today, 18 Jun <ChevronRight size={13} />
            </span>
          </div>
          <div className={styles.metricRow}>
            <div>
              <small>Appointments</small>
              <strong style={{ fontSize: "14px" }}>24,680</strong>

              <span className={styles.greenText}>+12.5%</span>
            </div>
            <div>
              <small>Patients</small>
              <strong style={{ fontSize: "14px" }}>93,568</strong>
              <span className={styles.greenText}>+8.2%</span>
            </div>
            <div>
              <small>Procedures</small>
              <strong style={{ fontSize: "14px" }}>1,22,590</strong>
              <span className={styles.greenText}>+18.4%</span>
            </div>
            <div>
              <small>Total revenue</small>
              <strong style={{ fontSize: "14px" }}>₹65.81 Cr</strong>
              <span className={styles.greenText}>+14.6%</span>
            </div>
            <div>
              <small style={{ fontSize: "10px" }}>Revenue/ patient</small>
              <strong style={{ fontSize: "14px" }}>₹7,033</strong>
              <span className={styles.greenText}>+5.8%</span>
            </div>
          </div>
          <div className={styles.dashboardBody}>
            <div className={styles.chartBox}>
              <div className={styles.chartLabels}>
                <small>Patient flow</small>
                <span>
                  Last 7 days <ChevronRight size={12} />
                </span>
              </div>
              <svg
                viewBox="0 0 500 135"
                role="img"
                aria-label="Patient flow chart"
              >
                <path
                  className={styles.chartGrid}
                  d="M0 35H500M0 75H500M0 115H500"
                />
                <path
                  className={`${styles.pulseTrace} pulseTrace`}
                  d="M0 96 C30 94 32 45 54 65 S83 106 103 86 S130 82 148 89 S174 25 191 53 S211 91 228 72 S249 55 269 76 S291 105 311 87 S335 42 351 60 S379 94 399 80 S425 48 444 61 S473 80 500 53"
                />
              </svg>
              <div className={styles.chartAxis}>
                <span>12 Jun</span>
                <span>14 Jun</span>
                <span>16 Jun</span>
                <span>18 Jun</span>
              </div>
            </div>
            <div className={styles.upcoming}>
              <div className={styles.chartLabels}>
                <small>Confirmed appointments</small>
                <a href="#contact">
                  View all <ArrowRight size={12} />
                </a>
              </div>
              <div className={styles.appointment}>
                <span className={styles.avatar}>SK</span>
                <span>
                  <b>Dr. Sana Kapoor</b>
                  <small>General consultation</small>
                </span>
                <time>10:30 AM</time>
              </div>
              <div className={styles.appointment}>
                <span className={`${styles.avatar} ${styles.avatarBlue}`}>
                  AR
                </span>
                <span>
                  <b>Arjun Rao</b>
                  <small>Follow-up appointment</small>
                </span>
                <time>11:15 AM</time>
              </div>
            </div>
            <div className={styles.treatmentPanel}>
              <div className={styles.chartLabels}>
                <small>Ongoing treatments</small>
                <span>Live</span>
              </div>
              <div className={styles.treatmentRow}><b>SCALING</b><span>9,887 patients</span><i>Active</i></div>
              <div className={styles.treatmentRow}><b>CONSULTATION</b><span>9,604 patients</span><i>Active</i></div>
            </div>
          </div>
          <span className={`${styles.orbitDot} orbitDot`}>
            <HeartPulse size={15} />
          </span>
        </div>
        <div className={styles.heroFoot}>
          <span>01 — 08</span>
          <span className={styles.scrollHint}>
            Scroll to explore <ArrowRight size={14} />
          </span>
        </div>
      </section>
      <section id="platform" className={`${styles.section} ${styles.platform}`}>
        <div className={`${styles.logoTarget} ${styles.logoTargetEnd}`} data-logo-target="end" aria-hidden="true">
          <span>care connected</span>
        </div>
        <div className="reveal">
          <SectionHeading
            eyebrow="The platform"
            title={
              <>
                Everything your clinic needs.
                <br />
                <span>Nothing it doesn't.</span>
              </>
            }
            description="A thoughtful operating system for the everyday work of care — from first hello to final follow-up."
          />
        </div>
        <div className={`${styles.featureGrid} featureGrid`}>
          {features.map(([icon, title, text], index) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              text={text}
              number={`0${index + 1}`}
            />
          ))}
        </div>
      </section>
      <section
        id="how-it-works"
        className={`${styles.section} ${styles.workflow}`}
      >
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Six steps. <span>One smoother day.</span>
            </>
          }
          description="Medivardaan connects the moments in between, so your team can focus on the moment that matters most."
        />
        {/* <div className={styles.workflowVideo}>
          <h3>How Medivardaan Works</h3>
          <p>A seamless digital workflow for clinics — from registration to billing.</p>
          <div className={styles.responsiveVideo}>
            <iframe
              src={workflowVideoUrl}
              title="How Medivardaan digitizes patient management, appointments, and billing"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <span className={styles.videoCaption}>
            Watch how Medivardaan digitizes patient management, appointments, and billing.
          </span>
        </div> */}
        <div className={styles.steps}>
          {steps.map(([number, title, text], index) => (
            <div className={`${styles.step} reveal`} key={number}>
              <span className={styles.stepNumber}>{number}</span>
              <div className={styles.stepIcon}>
                {index === 0 ? (
                  <LockKeyhole />
                ) : index === 1 ? (
                  <Plus />
                ) : index === 2 ? (
                  <CalendarDays />
                ) : index === 3 ? (
                  <Stethoscope />
                ) : index === 4 ? (
                  <FileText />
                ) : (
                  <BarChart3 />
                )}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              {index < 5 && <span className={styles.stepConnector}>→</span>}
            </div>
          ))}
        </div>
      </section>
      <section
        id="security"
        className={`${styles.trustSection} ${styles.section}`}
      >
        <div className={styles.trustCopy}>
          <SectionHeading
            light
            eyebrow="Security & trust"
            title={
              <>
                Your data deserves
                <br />
                <span>deep respect.</span>
              </>
            }
            description="Strong protection should feel invisible. We build it into every layer, so you can get on with care."
          />
          <a className={styles.lightButton} href="#contact">
            Our approach <ArrowRight size={16} />
          </a>
        </div>
        <div className={styles.securityList}>
          {[
            [
              "Encryption",
              "Your data is protected in transit and at rest.",
              LockKeyhole,
            ],
            [
              "Role-based access",
              "The right people see the right information.",
              UsersRound,
            ],
            [
              "Automatic backups",
              "Your practice history is always close at hand.",
              ShieldCheck,
            ],
          ].map(([title, text, Icon]) => (
            <div className={styles.securityItem} key={title}>
              <span className={styles.securityIcon}>
                <Icon />
              </span>
              <span>
                <h3>{title}</h3>
                <p>{text}</p>
              </span>
              <Check size={17} />
            </div>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.testimonials}`}>
        <SectionHeading
          eyebrow="From the people who use it"
          title={
            <>
              A better system makes room
              <br />
              <span>for better conversations.</span>
            </>
          }
        />
        <div className={styles.quoteGrid}>
          {testimonials.map(([name, role, quote, initials]) => (
            <blockquote className="reveal" key={name}>
              <div className={styles.quoteMark}>“</div>
              <p>{quote}</p>
              <footer>
                <span className={styles.quoteAvatar}>{initials}</span>
                <span>
                  <strong>{name}</strong>
                  <small>{role}</small>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      {/* <section id="pricing" className={`${styles.section} ${styles.pricing}`}>
        <SectionHeading
          eyebrow="Simple, transparent pricing"
          title={
            <>
              Choose the plan that fits
              <br />
              <span>your clinic.</span>
            </>
          }
        />
        <div className={styles.priceGrid}>
          {[
            [
              "Starter",
              "For practices taking their first digital step.",
              "₹999",
              [
                "Appointments & patient records",
                "Basic billing & invoices",
                "Email support",
              ],
            ],
            [
              "Professional",
              "For growing practices ready to move faster.",
              "₹2,499",
              [
                "Everything in Starter",
                "Reports & inventory",
                "Priority support",
              ],
            ],
            [
              "Enterprise",
              "For multi-location care teams at scale.",
              "Let’s talk",
              [
                "Everything in Professional",
                "Custom workflows & roles",
                "Dedicated success team",
              ],
            ],
          ].map(([name, text, price, items], index) => (
            <article
              className={`${styles.priceCard} ${index === 1 ? styles.featuredPrice : ""}`}
              key={name}
            >
              {index === 1 && (
                <span className={styles.popular}>Most popular</span>
              )}
              <span className={styles.priceIndex}>0{index + 1}</span>
              <h3>{name}</h3>
              <p>{text}</p>
              <strong className={styles.price}>
                {price}
                {price[0] === "₹" && <small>/month</small>}
              </strong>
              <a
                href="#contact"
                className={
                  index === 1 ? styles.primaryButton : styles.outlineButton
                }
              >
                {index === 2 ? "Talk to us" : "Get started"}{" "}
                <ArrowRight size={15} />
              </a>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <Check size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section> */}
      <section className={`${styles.about} ${styles.section}`}>
        <div className={styles.aboutNumber}>
          02<span>/</span>03
        </div>
        <div>
          <SectionHeading
            eyebrow="A note from Medivardaan"
            title={
              <>
                Healthcare is human.
                <br />
                <span>Technology should be too.</span>
              </>
            }
            description="We started Medivardaan with a simple belief: the best technology doesn't ask healthcare teams to become technologists. It quietly takes care of the complexity, giving people more time for people."
          />
          <a href="#contact" className={styles.textButton}>
            Read our story <ArrowRight size={16} />
          </a>
        </div>
      </section>
      <section id="contact" className={styles.contact}>
        <div className={styles.contactIntro}>
          <span className={styles.eyebrow}>Let's make time for care</span>
          <h2>
            Ready to give your
            <br />
            <em>clinic a clearer day?</em>
          </h2>
          <p>
            Tell us a little about your practice. We’ll show you what a calmer
            workflow could look like.
          </p>
          <div className={styles.contactDetails}>
            <span>
              <Mail size={15} /> info@infintrixglobal.com
            </span>
            <span>+91 22 4003 7275</span>
            <div className={styles.contactAddresses}>
              <div>
                <strong>India (HQ)</strong>
                <div>B-402, Kemp Plaza, Chincholi Bunder Road, Mindspace, Malad West, Mumbai - 400064</div>
              </div>
              <div>
                <strong>USA</strong>
                <div>2675 Bellingham, Troy, Michigan - 48083, United States of America</div>
              </div>
            </div>
          </div>
        </div>
        <form
          className={styles.contactForm}
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Clinic
            <input type="text" placeholder="Clinic or hospital name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@clinic.com" required />
          </label>
          <label>
            Message
            <textarea placeholder="Tell us about your practice" rows="3" />
          </label>
          <button className={styles.primaryButton} type="submit">
            Book my demo <ArrowRight size={16} />
          </button>
        </form>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span>
            medivardaan<span className={styles.brandDot}>.</span>
          </span>
          <small>Good care, better systems.</small>
        </div>
        <div className={styles.footerLinks}>
          <a href="#platform">Platform</a>
          <a href="#pricing">Pricing</a>
          <a href="#security">Security</a>
          <a href="#contact">Contact</a>
        </div>
        <small>© 2024 Medivardaan</small>
      </footer>
    </main>
  );
}
