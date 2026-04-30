import React from "react";
import {
  Zap,
  Shield,
  Globe,
  Cpu,
  Database,
  Cloud,
  Command,
  Search,
  Settings,
  Mail,
  MessageSquare,
  Bell,
  CheckCircle2,
  BarChart3,
  PieChart,
  LineChart,
} from "lucide-react";
import { BentoProtrusion, type TabData } from "@/components/ui/bentoProtusion";

// --- EXAMPLE 1: Marketing / SaaS Features ---
const MARKETING_LEFT: TabData[] = [
  {
    id: "speed",
    label: "Speed",
    icon: Zap,
    title: "Lightning Fast Deployment",
    subtitle: "Go from zero to production in seconds",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-emerald-400">
          <CheckCircle2 className="w-5 h-5" />
          <span>99.9% Cache Hit Rate</span>
        </div>
        <div className="flex items-center gap-3 text-emerald-400">
          <CheckCircle2 className="w-5 h-5" />
          <span>Global Edge Network</span>
        </div>
        <div className="h-32 bg-zinc-900 rounded-xl border border-white/5 flex items-end p-4 gap-2">
          {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
            <div key={i} className="flex-1 bg-emerald-500/20 border border-emerald-500/30 rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    title: "Enterprise Grade Security",
    subtitle: "Your data is encrypted by default",
    content:
      "Advanced AES-256 encryption at rest and TLS 1.3 in transit. Our infrastructure is SOC2 Type II compliant and regularly audited by third-party security firms.",
  },
  {
    id: "global",
    label: "Global",
    icon: Globe,
    title: "Global Infrastructure",
    subtitle: "Deploy closer to your users",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-zinc-900 rounded-xl border border-white/5">
          <div className="text-xs text-zinc-500 mb-1">Regions</div>
          <div className="text-2xl font-mono text-white">32</div>
        </div>
        <div className="p-4 bg-zinc-900 rounded-xl border border-white/5">
          <div className="text-xs text-zinc-500 mb-1">Latency</div>
          <div className="text-2xl font-mono text-white">&lt;20ms</div>
        </div>
      </div>
    ),
  },
];

const MARKETING_RIGHT: TabData[] = [
  {
    id: "infra",
    label: "Infra",
    icon: Cpu,
    title: "Serverless Compute",
    subtitle: "Scales with your demand automatically",
    content: "Automatically scale from zero to millions of requests. No cold starts, no server management. Just code, deploy, and scale.",
  },
  {
    id: "data",
    label: "Data",
    icon: Database,
    title: "Distributed Database",
    subtitle: "SQL power with NoSQL scalability",
    content: "A global, strongly consistent database that handles the heavy lifting of data synchronization and partitioning so you don't have to.",
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    title: "Hybrid Cloud Support",
    subtitle: "Works where your business lives",
    content:
      "Seamlessly integrate with your existing AWS, Google Cloud, or Azure infrastructure while maintaining a single pane of glass for management.",
  },
];

// --- EXAMPLE 2: Analytics Dashboard ---
const ANALYTICS_LEFT: TabData[] = [
  {
    id: "stats",
    label: "Stats",
    icon: BarChart3,
    title: "Usage Statistics",
    subtitle: "Real-time monitoring of your application",
    content: (
      <div className="space-y-6">
        <div className="flex justify-between items-end h-40 gap-1 px-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-500/20 hover:bg-blue-500 transition-colors rounded-t-sm"
              style={{ height: `${Math.random() * 80 + 20}%` }}
            />
          ))}
        </div>
        <div className="flex gap-8 border-t border-white/5 pt-4">
          <div>
            <div className="text-xs text-zinc-500 uppercase">Total Users</div>
            <div className="text-xl font-mono">1.2M</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 uppercase">Active Now</div>
            <div className="text-xl font-mono text-blue-400">4,821</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "dist",
    label: "Dist",
    icon: PieChart,
    title: "User Distribution",
    subtitle: "Demographics and geography at a glance",
    content:
      "Comprehensive breakdown of your user base by geography, device type, and referral source. Filter by any dimension to drill down into your data.",
  },
  {
    id: "growth",
    label: "Growth",
    icon: LineChart,
    title: "Growth Projection",
    subtitle: "AI-powered forecasting models",
    content:
      "Our machine learning models analyze historical patterns to predict future growth trajectories, helping you plan resources ahead of time.",
  },
];

const ANALYTICS_RIGHT: TabData[] = [
  {
    id: "search",
    label: "Search",
    icon: Search,
    title: "Deep Query Engine",
    subtitle: "Search across petabytes in milliseconds",
    content: "Optimized indexing and vector-search capabilities allow you to find needles in haystacks without breaking a sweat.",
  },
  {
    id: "settings",
    label: "Config",
    icon: Settings,
    title: "Granular Controls",
    subtitle: "Customize every aspect of your fleet",
    content: "Define environmental variables, secrets, and configuration flags across clusters or specific environments with ease.",
  },
  {
    id: "logs",
    label: "Logs",
    icon: Bell,
    title: "Observability",
    subtitle: "Never miss a beat with smart alerts",
    content: "Customized logging and alerting pipelines that notify your team via Slack, Discord, or SMS when anomalies are detected.",
  },
];

export function ShowcaseGallery() {
  return (
    <div className="space-y-32 py-12">
      <section>
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-4">SaaS Marketing Showcase</h2>
          <p className="text-zinc-500 text-xl max-w-2xl">
            This variation features custom JSX content with progress bars and data widgets, perfect for product landing pages.
          </p>
        </div>
        <BentoProtrusion leftTabs={MARKETING_LEFT} rightTabs={MARKETING_RIGHT} />
      </section>

      <section>
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-4">Analytics Dashboard Showcase</h2>
          <p className="text-zinc-500 text-xl max-w-2xl">
            Demonstrating advanced UI elements like mock charts and specialized data displays within the bento cells.
          </p>
        </div>
        <BentoProtrusion leftTabs={ANALYTICS_LEFT} rightTabs={ANALYTICS_RIGHT} />
      </section>

      <section className="bg-zinc-900/20 border border-white/5 rounded-[48px] p-12 text-center">
        <h2 className="text-3xl font-medium text-white mb-6">How to use this component</h2>
        <div className="max-w-2xl mx-auto text-left bg-black rounded-3xl p-8 font-mono text-sm text-blue-300">
          <pre className="whitespace-pre-wrap">
            {`import { BentoProtrusion } from './components/BentoProtrusion';

const myTabs = [
  {
    id: 'my-id',
    label: 'Tab Label',
    icon: MyIcon,
    title: 'Big Heading',
    subtitle: 'Description subtext',
    content: <div>Any React element here</div>
  },
  // ...
];

<BentoProtrusion 
  leftTabs={myTabs} 
  rightTabs={otherTabs} 
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
}
