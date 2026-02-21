# TROUVE LABS — AGENT REFERENCE GUIDE
> For use by the Antigravity agent. Defines brand identity, content rules, site structure, and ecosystem context for the Trouve Labs website (v1 rebuild).

---

## 1. WHO IS TROUVE LABS?

**Trouve Labs is an AI SDK Infrastructure Platform** focused on mobility, intelligence, and movement-driven efficiency. It is part of the broader **AHOY ecosystem**.

| ✅ IS | ❌ IS NOT |
|---|---|
| AI infrastructure platform | SaaS dashboard tool |
| SDK-first, developer-oriented | Consumer-facing application |
| Mobility intelligence domain | Transport or navigation app |
| Research-driven | Consulting or services agency |
| Public-facing, platform-positioned | Login-based product |

> **Hard rule:** Trouve Labs will never have a dashboard. Do not reference, imply, or design for one.

---

## 2. ECOSYSTEM CONTEXT — AHOY & AMS

This is critical background the agent must understand before making any content or structural decisions.

### The AHOY Ecosystem
**Trouve Labs is an AHOY venture.** AHOY is a MENA-based movement tech group that incubates and operates multiple independent platforms. Trouve Labs is one of those ventures — specifically the AI SDK infrastructure arm.

Other AHOY ventures include AMS, Comet, Fly+, IITS, and others. These are **separate platforms**, not sub-products of Trouve Labs.

### What is AMS?
**AMS = AHOY Movement Studio.**
AMS is a **separate AHOY platform** — independent from Trouve Labs. It is a developer platform offering APIs, SDKs, and libraries for building movement-related solutions (maps, routing, navigation, dispatching, logistics).

Think of the relationship like this:
- **AHOY** = the parent group / ecosystem
- **Trouve Labs** = AHOY's AI SDK infrastructure venture
- **AMS** = AHOY's movement infrastructure platform (separate venture)

Trouve Labs and AMS are **sibling platforms under AHOY**, not the same product. They are complementary — Trouve's AI SDKs can enhance AMS-built solutions — but they are distinct.

### CTO Instruction: AMS Connection
The CTO has asked for an AMS connection on the new Trouve Labs website. This means:
- Acknowledge the sibling relationship between Trouve Labs and AMS within the AHOY ecosystem
- This is an **ecosystem signal**, not a product integration or merger

**How to handle AMS on the site (until further instruction):**
- A subtle ecosystem reference is appropriate — e.g. a "Part of the AHOY Ecosystem" marker or an ecosystem section that lists sibling platforms
- Do NOT build a full AMS page or section without explicit instruction
- Do NOT position AMS as a Trouve Labs product — it is a separate AHOY venture
- Do NOT imply Trouve Labs owns or operates AMS
- Exact placement and copy to be confirmed with the team

---

## 3. CURRENT WEBSITE vs. V1 TARGET

The live site at **trouvelabs.io** is a legacy Wix build. It is context only — not the v1 target.

| Element | Current (Live Wix Site) | V1 Target |
|---|---|---|
| Platform | Wix | Next.js (App Router) |
| Positioning | Mobility consultancy feel | AI SDK infrastructure platform |
| Navigation | About / What we do / Contact | Full multi-section nav (see Section 5) |
| Products | Not mentioned | 5 SDKs clearly presented |
| Use cases | Not mentioned | Agentic Video, Voice Agent |
| Contact email | hello@trouvelabs.com | Hood Khizer — Hood@MailAhoy.com |
| AHOY ecosystem | Linked in footer | To be integrated thoughtfully (AMS connection per CTO) |
| Tone | Soft, services-adjacent | Technical, developer-first, confident |

### Carry forward from current site:
- Core philosophy copy (mobility, movement creates value)
- Tagline: *Finding Efficiencies at Every Curve.*
- The three pillars (Enablement, Research, Development) — reframed as platform narrative, not services

### Leave behind:
- Services-agency tone ("custom-built for you", "we partner with you")
- Wix layout patterns
- Section titles like "What we do" and "This is what we're all about"

---

## 4. BRAND LANGUAGE

**Tagline:**
> Finding Efficiencies at Every Curve.

**One Liner:**
> Modern mobility made efficient, sustainable, and valuable.

**Platform Description:**
> Trouve Labs delivers AI SDKs that power next-generation mobility systems.

**Extended Brand Copy:**
> Trouve Labs was born to redefine what's possible in mobility and tech by pioneering AI-driven solutions that transcend traditional boundaries. We make mobility more efficient, sustainable, and valuable.

**Mission:**
> Everything in motion creates value. We design AI systems that transform movement into measurable progress.

**Vision:**
> To become the MENA region's leading AI mobility innovation firm, creating complex solutions from the simplest equations.

**Key Framing Rule:**
- **Mobility** = the domain
- **SDKs** = the product

Never reverse this.

---

## 5. SITE STRUCTURE (Route Groups — Next.js App Router)

This structure is fixed. Do not modify it.

```
app/
├── (home)/
│   └── page.tsx
├── (products)/
│   └── products/
│       ├── vision-sdk/
│       ├── graph-rag-sdk/
│       ├── tokenization-sdk/
│       ├── genai-sdk/
│       └── llm-service/
├── (use-cases)/
│   └── use-cases/
│       ├── agentic-video/
│       └── voice-agent/
├── (docs)/
│   └── docs/
│       ├── quickstart/
│       ├── api-reference/
│       ├── tutorials/
│       └── cli/
├── (architecture)/
│   └── architecture/
├── (benchmarks)/
│   └── benchmarks/
├── (roadmap)/
│   └── roadmap/
├── (enterprise)/
│   └── enterprise/
├── (blog)/
│   └── blog/
├── (about)/
│   └── about/
├── layout.tsx
└── globals.css
```

> Route group names are not visible in URLs. No dashboard route group. Ever.

---

## 6. HOMEPAGE STRUCTURE (Strict Order)

1. **Hero**
   - Headline: `AI SDK PLATFORM.`
   - Subheadline: `Finding efficiencies at every curve.`
   - Supporting copy: `Building intelligent mobility systems through modular AI SDKs.`

2. **SDK Grid** — 5 core SDKs clearly displayed (see Section 7)

3. **Mobility Context Section**
   - Covers: supply chains, traffic optimization, logistics
   - Reframe the current site's Enablement / Research / Development pillars here as platform narrative
   - **AMS connection can be referenced here** — e.g. "Powering the intelligence layer within AMS-built solutions"

4. **Use Case Preview**
   - Agentic Video + Voice Agent
   - Each attributed to the SDKs powering them

5. **Final CTA:** `BUILD INTELLIGENT MOBILITY.`

---

## 7. PRODUCT HIERARCHY

**Layer 1 — SDKs (Core Products — what we sell):**
| SDK | Purpose |
|---|---|
| Vision SDK | Computer vision capabilities |
| Graph RAG SDK | Knowledge graph + retrieval-augmented generation |
| Tokenization SDK | Secure data tokenization and orchestration |
| GenAI SDK | Generative AI capabilities (multimodal) |
| LLM Service | Managed LLM infrastructure |

**Layer 2 — Use Cases (Demonstrations — what we showcase):**
| Solution | Built With |
|---|---|
| Agentic Video | Vision SDK + GenAI SDK |
| Voice Agent | LLM Service + GenAI SDK |

> Use cases are proof of capability — not separate products. SDK attribution must always be visible on use case pages.

**Layer 3 — Infrastructure (Hidden — what we hide):**
- Video Codec, internal deployment tools, CI/CD infrastructure
- Not publicly marketed

---

## 8. ABOUT PAGE COPY

**Why Trouve Labs:**
> Trouve Labs was born to redefine what's possible in mobility and tech by pioneering AI-driven solutions that transcend traditional boundaries. We make mobility more efficient, sustainable, and valuable.

**Our Mission:**
> Everything in motion creates value. We design AI systems that transform movement into measurable progress.

**Our Approach:**
> We transform mathematical algorithms into applied intelligence for smart cities, logistics systems, and mobility infrastructure.

**Our Vision:**
> To become the MENA region's leading AI mobility innovation firm, creating complex solutions from the simplest equations.

**Stats:**
- 20+ projects
- 10+ research papers

**Platform Pillars** (frame as platform capabilities, not client services):
- Technical integration
- Research-driven innovation
- Community collaboration

---

## 9. PLACEHOLDER PAGES (v1)

Title + short description + `"Content coming soon."` only:

- Architecture
- Benchmarks
- Roadmap
- Enterprise
- Blog

> No fake metrics. No speculative claims. No filler copy.

---

## 10. CONTACT & CTAs

**Primary Contact:**
- Hood Khizer — Hood@MailAhoy.com

> Note: The live site lists hello@trouvelabs.com — use the above for v1.

**CTA Options:**
- Request a Demo
- Partner With Us
- Explore Integration

---

## 11. QUICK RULES SUMMARY

| Rule | Detail |
|---|---|
| SDK-first framing | Always lead with SDKs, not use cases |
| Mobility as domain | Mobility contextualizes the SDK story |
| AMS connection | Reference as ecosystem link — not a Trouve product |
| No dashboard | Never reference, imply, or route to one |
| No services tone | Platform language only |
| No fake metrics | Only use 20+ projects / 10+ research papers |
| Use case attribution | Always name the SDKs powering each use case |
| Placeholder pages | Title + description + "coming soon" only |
| Contact | Hood@MailAhoy.com for v1 |
| Site structure | Fixed — do not modify the route group structure |