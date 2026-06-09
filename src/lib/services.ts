// Service catalogue — drives /services listing and /services/[slug] detail pages.
// Keep `slug` stable — it's used in URLs and structured data.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  result: string; // one-line metric headline
};

export type Service = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  photo: string;
  painPoints: { title: string; detail: string }[];
  solution: string;
  included: string[];
  outcomes: { metric: string; detail: string }[];
  quality: string;
  security?: string;
  turnaround?: string;
  testimonial: Testimonial;
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  // ─── TRANSCRIPTION ────────────────────────────────────────────────────────
  {
    slug: "transcription",
    name: "Transcription",
    headline: "Transcription that's ready to use, not ready to re-edit",
    summary:
      "Medical, legal and business transcription with multi-pass QA and SLA-backed turnaround — so your team focuses on practice, not paperwork.",
    metaTitle: "Medical & Legal Transcription Services",
    metaDescription:
      "Accurate medical, legal and business transcription — multi-pass QA, 99%+ accuracy, HIPAA-aware, 12–24 h turnaround. Outsource to Indus Valley Inc.",
    photo: "/images/service-transcription.jpg",
    intro:
      "Every hour a physician, attorney or analyst spends transcribing is an hour not spent on the work only they can do. Indus Valley takes the audio off your plate and sends back clean, formatted documents on a schedule you can plan around.",
    painPoints: [
      {
        title: "Clinicians losing 2–3 hours a day to dictation",
        detail:
          "Doctors, lawyers and business professionals routinely spend 30–40 % of their working day on transcription — time that could generate billable hours or serve more patients.",
      },
      {
        title: "In-house staff can't keep up with volume spikes",
        detail:
          "Hiring, training and retaining transcription staff is expensive. When volume surges — end of quarter, filing deadlines, discharge peaks — an internal team simply can't flex fast enough.",
      },
      {
        title: "Errors and inconsistent formatting create compliance risk",
        detail:
          "A wrong medication dosage, a mis-transcribed legal term, or an inconsistent date format can cause re-work, complaints or regulatory exposure. Single-pass in-house transcription misses more than you'd expect.",
      },
    ],
    solution:
      "We assign dedicated specialist transcriptionists — medical, legal or general — to your account. Every file goes through a two-pass QA review before delivery. Turnaround is agreed up front and backed by an SLA.",
    included: [
      "Medical transcription — clinical notes, discharge summaries, referral letters, operative reports",
      "Legal transcription — hearings, depositions, contracts, court records",
      "Business & interview transcription formatted to your templates",
      "Verbatim and clean-read options",
      "Speaker identification and time-stamping on request",
    ],
    outcomes: [
      { metric: "35 % more patient appointments", detail: "Physicians reclaim 2+ hours/day previously spent on dictation." },
      { metric: "99%+ accuracy", detail: "Multi-pass QA catches errors before the document reaches you." },
      { metric: "12–24 h standard turnaround", detail: "Rush 4–6 h option available for urgent files." },
    ],
    quality:
      "Every transcript goes through a two-pass review: the original transcriptionist plus a dedicated QA editor. Accuracy is tracked per account and shared with you monthly. SLA breaches are credited.",
    security:
      "Files are transferred over encrypted channels. Our team operates under NDAs and follows healthcare-grade access controls. We are HIPAA-aware and will execute a Business Associate Agreement before handling protected health information.",
    turnaround: "Standard 12–24 h · Rush 4–6 h",
    testimonial: {
      quote:
        "Our lead physician was spending nearly three hours a day on transcription. Since partnering with Indus Valley, that time is back. We have grown our appointment capacity by 35 % without hiring a single additional person.",
      name: "Dr. Meera Nair",
      role: "Practice Manager",
      company: "Apex Multi-Specialty Clinic",
      industry: "Healthcare",
      result: "35% more patient capacity · zero new hires",
    },
    faq: [
      { q: "How do I send audio files for transcription?", a: "We support secure file transfer, SFTP, encrypted email and your preferred cloud storage. We work around your existing workflow." },
      { q: "What is your transcription accuracy rate?", a: "We target and consistently achieve 99%+ accuracy through our two-pass QA process. Accuracy rates are reported back to you monthly." },
      { q: "Can you handle medical terminology and specialty-specific formats?", a: "Yes. We assign transcriptionists who specialise in your field — cardiology, orthopaedics, legal, finance — and follow your existing templates and formatting rules." },
      { q: "Do you sign NDAs and Business Associate Agreements?", a: "Yes. We execute NDAs before starting and can sign BAAs for protected health information under HIPAA." },
    ],
  },

  // ─── DATA ENTRY ───────────────────────────────────────────────────────────
  {
    slug: "data-entry",
    name: "Data Entry & Processing",
    headline: "Accurate data entry at the volume your team cannot absorb",
    summary:
      "High-volume forms, records, catalogues and claims — entered accurately, processed on schedule, and off your team's plate permanently.",
    metaTitle: "Data Entry & Processing Outsourcing Services",
    metaDescription:
      "Outsource high-volume data entry to Indus Valley Inc. Forms, claims, catalogues, EMR/EHR — double-keyed for accuracy with daily throughput SLAs.",
    photo: "/images/service-data-entry.jpg",
    intro:
      "Repetitive, high-volume data entry is the silent tax on your operations. It ties up skilled people, creates backlogs when volumes spike, and produces errors that cost far more to fix downstream than to prevent at source.",
    painPoints: [
      {
        title: "Skilled staff trapped in repetitive keying work",
        detail:
          "When account managers, nurses or analysts spend hours entering data, you are paying premium-rate salaries for commodity work — and burning out the people you need most.",
      },
      {
        title: "Backlogs that compound over time",
        detail:
          "A fixed internal team cannot absorb seasonal spikes. Backlogs grow, SLAs slip, and catching up requires expensive overtime or temporary staff who introduce their own errors.",
      },
      {
        title: "Errors generating expensive downstream rework",
        detail:
          "A 2 % error rate on 50,000 records means 1,000 records to find and fix — at a cost typically 5–10× higher than preventing the error in the first place.",
      },
    ],
    solution:
      "We scope daily throughput targets with you, deploy a dedicated team, and apply double-key verification on critical fields. You get a consistent daily output with error rates reported back — not hidden.",
    included: [
      "Form and document data entry",
      "Claims and EOB processing",
      "EMR / EHR data entry and updates",
      "Product catalogue and listing management",
      "Document indexing and digitisation",
      "Insurance and healthcare claim processing",
    ],
    outcomes: [
      { metric: "< 0.5 % error rate", detail: "Double-key verification on critical fields; errors reported monthly." },
      { metric: "4-day backlog cleared in 2 weeks", detail: "Scalable team absorbs volume surges that a fixed internal headcount cannot." },
      { metric: "60 % cost saving vs in-house", detail: "No recruitment, training, benefits or turnover costs." },
    ],
    quality:
      "Double-key verification on critical fields. Sampling-based QA across all batches. Error rates are tracked per project and shared in a monthly report — we do not hide the numbers.",
    turnaround: "Daily throughput targets agreed up front",
    testimonial: {
      quote:
        "We were processing 50,000 insurance claims a month manually — four days behind schedule and with an 8 % error rate. Indus Valley cleared the backlog in two weeks and now handles ongoing processing. Our error rate is under 0.5 % and we never fell behind again.",
      name: "Rajesh Verma",
      role: "Operations Director",
      company: "Horizon Insurance Partners",
      industry: "Insurance",
      result: "Error rate: 8% → 0.5% · Backlog cleared in 2 weeks",
    },
    faq: [
      { q: "How do you ensure data entry accuracy?", a: "We use double-key verification on critical fields: two separate operators enter the same data independently and the results are reconciled. Error rates are logged and shared with you monthly." },
      { q: "Can you handle high-volume seasonal spikes?", a: "Yes. Our model is built for exactly this. We can scale a data entry team up in days — no recruiting, no training lag." },
      { q: "What formats and systems do you work with?", a: "We work in your system directly (web portal, EHR, CRM) or from structured templates and deliver back in Excel, CSV, JSON or your required format." },
      { q: "How is sensitive data protected during entry?", a: "Operators work under NDAs, access is role-limited, and no data leaves our secure environment. We can also work inside your own hosted system over a VPN." },
    ],
  },

  // ─── DATA CLEANUP ─────────────────────────────────────────────────────────
  {
    slug: "data-cleanup",
    name: "Data Cleanup & Cleansing",
    headline: "Turn a messy database into one you can actually trust",
    summary:
      "Large-scale de-duplication, standardisation and enrichment — for CRMs, catalogues and records — so your systems run on clean data, not assumptions.",
    metaTitle: "Data Cleanup & De-duplication Services",
    metaDescription:
      "De-duplicate, standardise and enrich large databases for CRM, e-commerce and healthcare. Before/after metrics guaranteed. Free sample audit available.",
    photo: "/images/service-data-cleanup.jpg",
    intro:
      "Dirty data is not a minor inconvenience — it is a direct business cost. Duplicate records inflate marketing spend. Stale contacts trigger spam filters. Inconsistent formats block system integrations. The longer it goes uncleaned, the worse it gets.",
    painPoints: [
      {
        title: "CRM duplicates inflating marketing spend",
        detail:
          "A database with 30–40 % duplication means you are paying to contact the same person multiple times, inflating your cost-per-acquisition and damaging your sender reputation.",
      },
      {
        title: "Inconsistent formats blocking integrations",
        detail:
          "When phone numbers, addresses and dates are formatted in five different ways across your database, automated integrations break, reports mismatch, and developers waste days writing workaround code.",
      },
      {
        title: "No one has time to clean it — it just grows",
        detail:
          "Data cleanup is everyone's lowest-priority task. It compounds silently: the dirtier the data, the lower the trust in it, and the less useful your CRM, analytics and reporting become.",
      },
    ],
    solution:
      "We define the cleaning rules with you, run a pilot batch to validate the approach, then process the full dataset in phases with before/after metrics at every stage. You see exactly what changed and why.",
    included: [
      "De-duplication and fuzzy-match record consolidation",
      "Standardisation and formatting to a defined schema",
      "Validation against reference sources (postal codes, phone formats, company registries)",
      "Enrichment and gap-filling from verified sources",
      "Before/after quality metrics and a sample audit on completion",
    ],
    outcomes: [
      { metric: "3× campaign response rate", detail: "Clean, de-duplicated contacts means every message reaches a real, unique person." },
      { metric: "$150K+ saved annually", detail: "Eliminating wasted outreach to duplicate and stale records cuts marketing waste immediately." },
      { metric: "40 % duplicate rate eliminated", detail: "Typical large CRM arrives with 30–45 % duplication; we eliminate it systematically." },
    ],
    quality:
      "Cleaning rules are agreed and documented before we start. We run a pilot batch first — you review the output before we process the full dataset. On completion, you receive a before/after metrics report and a sample audit you can spot-check.",
    turnaround: "Phased: pilot batch first, then full dataset at an agreed cadence",
    testimonial: {
      quote:
        "Our CRM had 1.8 million records with over 40 % duplicates and stale data. After Indus Valley cleaned it, our email campaign response rate tripled and we saved over $150,000 a year in wasted outreach. The ROI was visible within the first campaign.",
      name: "Priya Sharma",
      role: "Head of Marketing",
      company: "StyleForward Direct",
      industry: "D2C E-commerce",
      result: "3× email response rate · $150K annual saving",
    },
    faq: [
      { q: "How do you handle duplicates without losing important records?", a: "We use fuzzy matching to identify likely duplicates and apply a merge strategy agreed with you — keeping the most recent, most complete or a merged version of each record. No records are deleted without your approval." },
      { q: "Can you clean data inside our CRM without exporting it?", a: "Yes. For many CRMs we can work directly inside the platform. Alternatively, we work from a secure export and reimport the cleaned dataset." },
      { q: "What if our data has custom fields and non-standard formats?", a: "We start with a data profiling exercise to understand your schema, then define the cleaning rules together. Custom fields are handled as part of the scope." },
      { q: "How long does a large data cleanup project take?", a: "It depends on volume and complexity. A pilot batch of 10,000 records typically takes 2–3 business days. We then project the full timeline and agree milestones before proceeding." },
    ],
  },

  // ─── DATA VISUALISATION ───────────────────────────────────────────────────
  {
    slug: "data-visualization",
    name: "Data Visualisation",
    headline: "Make your numbers say something — at a glance, every day",
    summary:
      "Dashboards and recurring reports that turn raw data into clear, decision-ready visuals — built once, maintained and refreshed on your schedule.",
    metaTitle: "Data Visualisation & Dashboard Development",
    metaDescription:
      "Dashboards and recurring reports that turn raw data into clear visuals. Executives get live visibility — no more week-old spreadsheets. Faster decisions.",
    photo: "/images/service-data-visualization.jpg",
    intro:
      "Data that cannot be read at a glance is data that does not get used. When executives wait days for reports and analysts spend hours reformatting spreadsheets, decisions slip and opportunities are missed. We build the visuals that make data legible — and keep them current.",
    painPoints: [
      {
        title: "Decisions based on week-old spreadsheets",
        detail:
          "When the latest report was assembled five days ago, decisions are made on outdated signals — and by the time you act, the opportunity or the problem has already shifted.",
      },
      {
        title: "Analysts burning hours on recurring reports instead of analysis",
        detail:
          "Pulling the same data, applying the same formatting, and emailing the same PDF every Monday is not analysis — it is expensive, error-prone manual assembly that should be automated.",
      },
      {
        title: "No single source of truth across departments",
        detail:
          "When Sales has one version of the numbers, Finance has another, and Operations has a third, the weekly meeting starts with 20 minutes of reconciling whose figures are correct.",
      },
    ],
    solution:
      "We design dashboards to your brief, build them in your preferred tool (Power BI, Tableau, Looker, Google Data Studio), connect them to your data sources, and hand off a live view your team can use without touching a spreadsheet.",
    included: [
      "Dashboard design and build (Power BI, Tableau, Looker, Data Studio)",
      "Recurring report production and distribution",
      "Chart and report design to your brand guidelines",
      "Data preparation and transformation feeding the visuals",
      "Maintenance, refresh and iterative improvement",
    ],
    outcomes: [
      { metric: "Decision latency: days → hours", detail: "Live dashboards replace week-old spreadsheets as the operational source of truth." },
      { metric: "12 analyst hours saved per week", detail: "Recurring manual reports replaced by automated refreshes." },
      { metric: "Single source of truth", detail: "Departments aligned on one shared view — no more reconciliation debates in meetings." },
    ],
    quality:
      "Every visual traces back to a verified data source — no unexplained numbers. We walk through the dashboard logic with your stakeholders before publishing and build in a review cycle agreed with your team.",
    turnaround: "Initial build scoped per project; recurring reports on a fixed automated schedule",
    testimonial: {
      quote:
        "We were making weekly business decisions based on spreadsheets that were five days old. The live dashboards Indus Valley built cut our decision lag from days to hours. We also stopped paying two analysts to compile the same Monday report every week.",
      name: "Arjun Mehta",
      role: "VP Operations",
      company: "FastTrack Logistics",
      industry: "Logistics & Supply Chain",
      result: "Decision lag: 5 days → same day · 12 analyst hours/week reclaimed",
    },
    faq: [
      { q: "Which BI tools do you work with?", a: "Power BI, Tableau, Looker, Google Data Studio, and custom web-based dashboards. We can also build in Excel or Google Sheets if that is your team's preferred tool." },
      { q: "Can you connect to our existing databases and systems?", a: "Yes. We connect to SQL/NoSQL databases, cloud warehouses (BigQuery, Snowflake, Redshift), spreadsheets, CRMs and most APIs. We document every data connection." },
      { q: "Who maintains the dashboards after they are built?", a: "We do — unless you prefer to take them over. We offer ongoing maintenance contracts that cover schema changes, new data sources and iterative improvements." },
      { q: "How do you ensure the data in dashboards is accurate?", a: "Every metric traces to a defined, verified source. We build in data validation checks and alert you to upstream data quality issues before they appear as wrong numbers in a dashboard." },
    ],
  },

  // ─── DATA MAPPING ─────────────────────────────────────────────────────────
  {
    slug: "data-mapping",
    name: "Data Mapping & Migration",
    headline: "Move data between systems — without losing its meaning",
    summary:
      "Field-level mapping, migration and transformation between formats, schemas and platforms — with reconciliation at every step so nothing is lost in translation.",
    metaTitle: "Data Mapping, Migration & Transformation",
    metaDescription:
      "Complex data migrations with field-level mapping, pilot runs and full reconciliation. Zero data loss. On-time delivery for healthcare, finance and enterprise.",
    photo: "/images/service-data-mapping.jpg",
    intro:
      "Data migrations are where projects fail quietly: a field mapped to the wrong column, a date format that breaks a validation rule, a lookup table that does not survive the move. The risk is not in the transfer — it is in the mapping. We own the mapping logic from definition through to post-migration reconciliation.",
    painPoints: [
      {
        title: "Migration projects stalling on mapping complexity",
        detail:
          "Every system has its own schema, terminology and edge cases. When the mapping document sits in a spreadsheet owned by one developer, the project stalls every time that person has competing priorities.",
      },
      {
        title: "Post-migration data loss discovered too late",
        detail:
          "Many migrations are declared complete before a full reconciliation is run. By the time the data loss surfaces — a missing patient record, a broken inventory link — the original source system has been decommissioned.",
      },
      {
        title: "Formats and standards changing mid-project",
        detail:
          "A healthcare client changing EHR vendors, a retailer moving to a new PIM, a finance team switching ERPs — the target schema inevitably changes. Without documented mapping logic, the whole exercise restarts.",
      },
    ],
    solution:
      "We document every field-level mapping rule before touching production data. A pilot migration validates the logic on a representative sample. The full migration runs in phases with row-count and field-level reconciliation at each step. You sign off before we proceed.",
    included: [
      "Field-level mapping documentation and review",
      "Format and schema conversion (XML, JSON, CSV, SQL, HL7, EDI)",
      "Pilot migration with reconciliation before full cutover",
      "Platform-to-platform migration with audit trail",
      "Post-migration validation and gap reporting",
    ],
    outcomes: [
      { metric: "Zero data loss", detail: "Row-count and field-level reconciliation before and after every migration phase." },
      { metric: "10-week migration vs 18-month estimate", detail: "Structured mapping and phased delivery compresses timelines compared to ad-hoc attempts." },
      { metric: "Full audit trail", detail: "Every change is documented — critical for healthcare, finance and regulated industries." },
    ],
    quality:
      "Mapping is documented and signed off before migration begins. We run a pilot batch on a representative sample, share reconciliation metrics, and only proceed to the full dataset with your approval. Row-count and field-level checks run on completion.",
    turnaround: "Scoped per project; pilot run before full cutover",
    testimonial: {
      quote:
        "We had twelve years of patient records in a legacy system. Our new EHR vendor told us migration would take eighteen months. Indus Valley mapped every field, ran a pilot in the first two weeks, and completed the full migration in ten weeks — with a full audit trail and zero data loss.",
      name: "Dr. Suresh Bhat",
      role: "Chief Technology Officer",
      company: "PrimeCare Health Network",
      industry: "Healthcare",
      result: "12 years of records migrated in 10 weeks · zero data loss",
    },
    faq: [
      { q: "What is data mapping and why does it matter in a migration?", a: "Data mapping is the process of defining which field in your source system corresponds to which field in the target system — including how the values need to be transformed. Without it, data either does not move or moves to the wrong place." },
      { q: "Can you migrate data from legacy systems with no documentation?", a: "Yes. We start with a discovery phase to reverse-engineer the source schema, interview the people who know the system, and produce a mapping document before any migration work begins." },
      { q: "How do you handle data that does not have a direct match in the target system?", a: "We flag it during the mapping review phase and agree a handling rule with you — whether to map to the closest equivalent, create a custom field, archive separately, or flag for manual review." },
      { q: "What industries do you specialise in for data migration?", a: "Healthcare (EHR/EMR migrations), insurance, finance, e-commerce (product data, order history) and enterprise ERP migrations. We understand the compliance requirements specific to each." },
    ],
  },

  // ─── BACK OFFICE ──────────────────────────────────────────────────────────
  {
    slug: "back-office",
    name: "Back-Office Support",
    headline: "Steady hands on the work that keeps your business running",
    summary:
      "Managed back-office and BPO support — order processing, document handling, account admin, research — handled by a dedicated team you never have to recruit.",
    metaTitle: "Back-Office Support & BPO Outsourcing",
    metaDescription:
      "Outsource back-office operations — order processing, account admin, research, document handling. Dedicated team, agreed SLAs, Bangalore, India.",
    photo: "/images/service-back-office.jpg",
    intro:
      "Your best people are generalists who can sell, solve problems and build relationships. Every hour they spend on order processing, record admin or list-building is an hour they are not doing what you hired them for. We take the back office off their hands — permanently.",
    painPoints: [
      {
        title: "High-value staff performing low-value tasks",
        detail:
          "When your account managers spend 60 % of their day on order entry and admin, you are paying a sales premium for commodity work — and leaving revenue on the table every single day.",
      },
      {
        title: "Processing delays creating customer SLA breaches",
        detail:
          "Backlogs in order processing, document handling or account updates translate directly into broken customer commitments. One delayed order becomes a complaint; a persistent backlog becomes a churn risk.",
      },
      {
        title: "Operational knowledge locked inside 1–2 people",
        detail:
          "When the person who knows how to process a specific order type takes a holiday or leaves, the work stops. Centralising knowledge in a small internal team is a business continuity risk.",
      },
    ],
    solution:
      "We document your processes, assign a managed team, agree SLAs and provide a single named point of accountability on our side. The work runs continuously — not just when your office is open.",
    included: [
      "Order and purchase order processing",
      "Document handling, filing and retrieval",
      "Account and records administration",
      "Research, list-building and data collection",
      "Email and ticket queue management",
      "Vendor and supplier coordination support",
    ],
    outcomes: [
      { metric: "28 % revenue growth in year one", detail: "Sales team freed from admin focuses entirely on client acquisition and expansion." },
      { metric: "3 FTEs redeployed to revenue-generating work", detail: "Existing staff redirected from processing to selling — no new headcount." },
      { metric: "Zero SLA breaches since go-live", detail: "Agreed daily throughput targets consistently met, eliminating processing backlogs." },
    ],
    quality:
      "Processes are documented and agreed before go-live. SLAs are set, monitored and reported weekly. You have a single point of accountability on our side — one named manager responsible for your account.",
    turnaround: "Ongoing operations with agreed daily throughput and response SLAs",
    testimonial: {
      quote:
        "Three of our best account managers were spending over 60 % of their day on order processing and admin. We outsourced that to Indus Valley. Those three now focus entirely on sales and our revenue grew 28 % in the first year — from the same headcount.",
      name: "Vikram Nair",
      role: "Managing Director",
      company: "Cornerstone Industrial Supplies",
      industry: "B2B Distribution",
      result: "28% revenue growth · 3 FTEs freed to sell · zero SLA breaches",
    },
    faq: [
      { q: "How do you learn our internal processes?", a: "We run a structured onboarding: process documentation workshops, shadowing your existing team, and a pilot phase where we process a small batch under your supervision before going fully live." },
      { q: "What if our processes change?", a: "Process changes are a normal part of operations. We update the documentation and retrain the team. Our SLA includes a change management clause." },
      { q: "Who is my point of contact?", a: "You get a named account manager on our side who attends your weekly review, owns the SLA and escalates anything that needs it." },
      { q: "Can you work in our internal systems?", a: "Yes. We work in your CRM, ERP, order management system or any web-based tool. Operators are on your system, under your access policies." },
    ],
  },

  // ─── CALL CENTRE ──────────────────────────────────────────────────────────
  {
    slug: "call-centre",
    name: "Call Centre",
    headline: "Every call answered — inbound support and outbound campaigns",
    summary:
      "Trained, managed agents handling inbound customer support and outbound campaigns — with the coverage hours, languages and scripts your customers expect.",
    metaTitle: "Inbound & Outbound Call Centre Services",
    metaDescription:
      "Inbound customer support and outbound calling from Bangalore, India. 24/7 coverage, trained agents, monitored quality — without the infrastructure cost.",
    photo: "/images/service-call-centre.jpg",
    intro:
      "Every unanswered call outside business hours is a lead lost to a competitor who picked up. Every support call routed to an undertrained agent is a customer relationship at risk. We provide trained, monitored agents at the coverage hours your customers demand — without the fixed-cost infrastructure of an internal call centre.",
    painPoints: [
      {
        title: "After-hours calls going unanswered",
        detail:
          "Customers and prospects do not call on your schedule. Every enquiry that hits voicemail after 6 PM is a warm lead that will call the next vendor on their list — or simply not call back.",
      },
      {
        title: "Undertrained agents damaging customer relationships",
        detail:
          "An agent who cannot answer a product question, escalates badly or uses the wrong tone does more damage than no agent at all. Training and quality monitoring are expensive to maintain in-house.",
      },
      {
        title: "Fixed infrastructure costs for a variable call volume",
        detail:
          "An in-house call centre means paying for seats, telephony, supervisors and QA staff whether your volume is 10 calls or 300 calls that day. Variable demand with fixed cost is a margin problem.",
      },
    ],
    solution:
      "We hire to your scripts, train to your product knowledge, and monitor call quality against your standards. Coverage hours are agreed per contract — including evenings, weekends and peak periods.",
    included: [
      "Inbound customer support and helpdesk",
      "Outbound calling — lead follow-up, appointment setting, surveys",
      "Appointment scheduling and reminder calls",
      "Chat and email support alongside voice",
      "Quality monitoring, call scoring and regular reporting",
      "Escalation path design and live escalation handling",
    ],
    outcomes: [
      { metric: "Lead conversion: 18 % → 31 %", detail: "24/7 coverage captures after-hours leads that previously went to voicemail." },
      { metric: "40 % lower per-call cost vs in-house", detail: "No infrastructure, no supervisory overhead, no off-peak fixed cost." },
      { metric: "< 30 s average answer time", detail: "Consistent against your agreed service level targets." },
    ],
    quality:
      "Every call is recorded and a sample is scored against your quality criteria each week. Scripts and escalation paths are agreed before go-live. QA scores are shared in a monthly report.",
    turnaround: "Coverage hours set to your requirements including evenings, weekends and extended hours",
    testimonial: {
      quote:
        "We were losing after-hours leads because nobody was available to respond. Indus Valley extended our coverage to 24/7. Our lead conversion rate went from 18 % to 31 % — and the entire difference came from after-hours callbacks that we were previously missing.",
      name: "Anita Rao",
      role: "Founder",
      company: "Prestige Realty Group",
      industry: "Real Estate",
      result: "Lead conversion 18% → 31% · 24/7 coverage from Day 1",
    },
    faq: [
      { q: "How quickly can you start handling our calls?", a: "Typically 2–3 weeks from contract signing: one week for script review and agent training, one week for a supervised pilot, then fully live. Rush onboarding in 7 days is possible for simpler use cases." },
      { q: "Can agents handle product-specific or technical queries?", a: "Yes. We train agents on your product documentation, common queries and escalation paths. For complex technical queries, we design an escalation workflow to your in-house specialists." },
      { q: "Are calls recorded?", a: "Yes. All calls are recorded and stored securely. Recordings are available to you for review and quality scoring." },
      { q: "What languages can your agents support?", a: "English (neutral and regional accents), Hindi, Kannada and several other Indian languages. For other languages, please enquire — we assess case by case." },
    ],
  },

  // ─── WEB & IT ─────────────────────────────────────────────────────────────
  {
    slug: "web-it",
    name: "Web & IT Development",
    headline: "Build the systems behind your operations — and keep them running",
    summary:
      "Website design, e-commerce, SEO and application development — delivered in milestones, maintained long-term, and built to perform in search.",
    metaTitle: "Web Design, E-Commerce & IT Development",
    metaDescription:
      "Websites, e-commerce stores and custom applications built SEO-first, performance-optimised, delivered in milestones. India-based team, global clients.",
    photo: "/images/service-web-it.jpg",
    intro:
      "A slow website costs you Google rankings before it costs you sales. An e-commerce store with poor UX converts at 1 % when it should convert at 3 %. A business system that the team fears touching because it might break is a liability, not an asset. We build for performance, maintain for longevity, and optimise for search from day one.",
    painPoints: [
      {
        title: "Slow websites losing Google rankings and customer patience",
        detail:
          "Google's Core Web Vitals directly influence search rankings. A page that loads in 8 seconds loses ranking positions to a competitor loading in 2 — and 53 % of mobile visitors abandon a page that takes over 3 seconds to load.",
      },
      {
        title: "E-commerce stores bleeding conversion rate",
        detail:
          "A 1 % improvement in checkout conversion rate on a $2M revenue store is $20,000 in recovered sales with no extra marketing spend. Poor UX, slow load times and broken mobile experiences are all fixable — if someone is watching.",
      },
      {
        title: "Legacy systems that nobody dares to change",
        detail:
          "When the team avoids touching a business system because the last update broke something, that system becomes a ceiling on your growth. The answer is not always a rewrite — often it is structured refactoring with test coverage.",
      },
    ],
    solution:
      "We scope in writing, deliver in reviewable milestones, and do not disappear after launch. SEO, performance and mobile responsiveness are built into every project from the start — not retrofitted at the end.",
    included: [
      "Website design and development (responsive, performance-optimised)",
      "E-commerce build and management (Shopify, WooCommerce, custom)",
      "Search engine optimisation (on-page, technical, content)",
      "Custom web application development",
      "Maintenance, hosting support and performance monitoring",
      "Core Web Vitals and page speed optimisation",
    ],
    outcomes: [
      { metric: "85 % organic traffic growth in 6 months", detail: "Combined technical SEO and content improvements compound over time." },
      { metric: "Page load: 8 s → under 2 s", detail: "Core Web Vitals improvements directly recovered lost Google ranking positions." },
      { metric: "Conversion rate doubled", detail: "Mobile UX and checkout flow improvements applied without any increase in ad spend." },
    ],
    quality:
      "Scope is agreed in writing. Deliverables are reviewed in milestones before we proceed to the next phase. Code is documented. Performance benchmarks and SEO targets are agreed before development starts.",
    turnaround: "Project-based with milestone delivery; maintenance on monthly retainer",
    testimonial: {
      quote:
        "Our website's Core Web Vitals were terrible — pages loaded in 8 seconds and we had dropped off Google's first page for our main keywords. Indus Valley rebuilt the front end and fixed the technical SEO. Load time dropped to under 2 seconds and organic traffic grew 85 % in 6 months.",
      name: "Kavitha Shetty",
      role: "Chief Marketing Officer",
      company: "NatureCraft Retail",
      industry: "Specialty Retail",
      result: "85% organic traffic growth · page load 8s → under 2s",
    },
    faq: [
      { q: "How do you approach SEO in web development projects?", a: "SEO is built in from the start — semantic HTML, structured data (Schema.org), Core Web Vitals targets, sitemap, canonical URLs and meta tags are all part of the baseline delivery, not an add-on." },
      { q: "Do you offer website maintenance after launch?", a: "Yes. We offer monthly maintenance retainers covering security updates, performance monitoring, content updates and priority support. Most clients opt in — an unmaintained site degrades quickly." },
      { q: "Can you improve an existing website without a full rebuild?", a: "Often, yes. We start with a technical audit to identify the highest-impact issues — often it is a combination of image optimisation, server configuration and a few code changes that deliver 80 % of the performance gain." },
      { q: "Do you build for mobile?", a: "Every project is mobile-first by default. We test on a range of actual devices and screen sizes, not just browser simulators, before delivery." },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
