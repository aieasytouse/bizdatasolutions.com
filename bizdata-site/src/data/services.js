import {
  HeadphonesIcon,
  Workflow,
  Building2,
  Lock,
  TrendingUp,
  Code2,
} from 'lucide-react'

export const services = [
  {
    id: 'customer-support',
    slug: 'customer-support',
    Icon: HeadphonesIcon,
    title: 'Customer Support Automation',
    tagline: '24/7 AI Customer Support That Never Sleeps',
    shortDescription:
      'Like having your best customer service rep working 24/7 — never takes a break, gets tired, or misses a call. Reduce support costs by 66% while improving customer satisfaction.',
    description:
      'Transform your customer support with AI that handles inquiries instantly across every channel — phone, chat, and email — 24 hours a day, 7 days a week. Your AI assistant is trained on your specific business knowledge, so it delivers accurate, on-brand responses every single time.',
    metrics: [
      { label: '24/7 Availability', value: '24/7', suffix: '' },
      { label: 'Cost Reduction', value: '66', suffix: '%' },
      { label: 'Faster Response', value: '10', suffix: 'x' },
    ],
    color: 'from-cyan-500/20 to-blue-500/20',
    howItWorks: [
      {
        step: '01',
        title: 'Customer Contacts You',
        description:
          'Phone, chat, or email — AI responds instantly across all channels simultaneously. No hold times, no missed messages.',
      },
      {
        step: '02',
        title: 'AI Provides Smart Response',
        description:
          'Trained on your business knowledge base, the AI delivers accurate, personalized answers that sound exactly like your brand.',
      },
      {
        step: '03',
        title: 'Seamless Human Handoff',
        description:
          'Complex issues are transferred to your team with full conversation context, so customers never have to repeat themselves.',
      },
    ],
    benefits: [
      'Never miss a customer inquiry again',
      'Handle unlimited simultaneous conversations',
      'Consistent, accurate responses every time',
      'Integrated with your existing tools',
      'Full analytics and conversation reporting',
    ],
    cta: { primary: 'Get Started', secondary: 'Schedule Demo' },
  },
  {
    id: 'business-process-automation',
    slug: 'business-process-automation',
    Icon: Workflow,
    title: 'Business Process Automation',
    tagline: 'Transform Repetitive Tasks Into Automatic Workflows',
    shortDescription:
      'Stop spending hours on manual tasks. Let AI handle everything from data entry to complex multi-step workflows — freeing your team to focus on what matters.',
    description:
      'Every business has repetitive processes eating hours from your team every week. We identify, design, and automate those workflows using AI — turning manual, error-prone tasks into seamless, automatic systems that run without supervision.',
    metrics: [
      { label: 'Hours Saved Daily', value: '8', suffix: '+' },
      { label: 'Error Reduction', value: '95', suffix: '%' },
      { label: 'ROI in Year 1', value: '3', suffix: 'x' },
    ],
    color: 'from-blue-500/20 to-purple-500/20',
    automationCategories: [
      {
        title: 'Document Processing',
        items: ['Invoice processing', 'Contract analysis', 'Form data extraction'],
      },
      {
        title: 'Data Management',
        items: ['CRM updates', 'Inventory sync', 'Automated report generation'],
      },
      {
        title: 'Workflow Automation',
        items: ['Lead routing', 'Approval processes', 'Task assignment'],
      },
      {
        title: 'Scheduling & Reminders',
        items: ['Meeting scheduling', 'Follow-up emails', 'Payment reminders'],
      },
      {
        title: 'Employee Onboarding',
        items: ['Account creation', 'Document collection', 'Training assignment'],
      },
      {
        title: 'Financial Processes',
        items: ['Expense processing', 'Payment automation', 'Budget tracking'],
      },
    ],
    timeline: [
      { week: 'Week 1', title: 'Analysis', description: 'We map your current processes and identify the highest-impact automation opportunities.' },
      { week: 'Week 2', title: 'Design', description: 'Custom workflow blueprints built around your exact business logic and integrations.' },
      { week: 'Week 3', title: 'Build & Test', description: 'Full implementation with rigorous testing to ensure accuracy and reliability.' },
      { week: 'Week 4+', title: 'Launch & Support', description: 'Go live with confidence. Ongoing monitoring and optimization included.' },
    ],
    cta: { primary: 'Automate My Business', secondary: 'See Examples' },
  },
  {
    id: 'enterprise-ai',
    slug: 'enterprise-ai',
    Icon: Building2,
    title: 'Enterprise AI Solutions',
    tagline: 'Enterprise-Grade AI With SOC 2 Ready Architecture',
    shortDescription:
      'Custom AI solutions built to enterprise standards — secure, scalable, compliant, and designed to integrate with your existing infrastructure.',
    description:
      'Not all AI is built equal. Enterprise clients need solutions that meet rigorous security, compliance, and performance standards. We deliver Fortune 500-grade AI architecture for businesses that can\'t afford to compromise.',
    metrics: [
      { label: 'Uptime SLA', value: '99.99', suffix: '%' },
      { label: 'Compliance Standards', value: '4', suffix: '+' },
      { label: 'Deployment Time', value: '30', suffix: 'd' },
    ],
    color: 'from-emerald-500/20 to-cyan-500/20',
    features: [
      { title: 'SOC 2 Ready Infrastructure', description: 'Architecture designed to meet SOC 2 Type II requirements out of the box.' },
      { title: 'Data Privacy & Security', description: 'AES-256 encryption at rest and in transit. Your data never leaves your control.' },
      { title: 'Flexible Deployment', description: 'Private cloud, on-premise, or hybrid — deploy where your security policy requires.' },
      { title: 'Custom AI Models', description: 'Fine-tuned models trained on your proprietary data for maximum accuracy.' },
      { title: 'API Integration', description: 'Seamless connectivity with your existing enterprise systems and data sources.' },
      { title: 'Role-Based Access', description: 'Granular permissions and audit trails for every user action.' },
    ],
    useCases: [
      { industry: 'Financial Services', metric: '75%', description: 'reduction in compliance reporting time' },
      { industry: 'Healthcare', metric: '60%', description: 'faster patient intake process' },
      { industry: 'Manufacturing', metric: '40%', description: 'reduction in unplanned downtime' },
      { industry: 'Retail', metric: '3x', description: 'increase in customer satisfaction scores' },
    ],
    compliance: ['SOC 2 Type II', 'GDPR', 'HIPAA Ready', 'ISO 27001', 'AES-256', '99.99% SLA'],
    cta: { primary: 'Schedule Enterprise Demo', secondary: 'View Security Docs' },
  },
  {
    id: 'private-chatgpt',
    slug: 'private-chatgpt',
    Icon: Lock,
    title: 'Private ChatGPT',
    tagline: 'Your Own Secure AI Knowledge Expert',
    shortDescription:
      'Leverage the power of AI chat using your own internal data — without ever exposing sensitive information to public AI models. Like a dedicated expert available to your entire team, anytime.',
    description:
      'Public AI tools are powerful, but they come with a critical risk: your confidential data could be used to train public models or exposed to other users. Private ChatGPT gives you all the intelligence of modern AI, running entirely within your own secure infrastructure.',
    metrics: [
      { label: 'Data Privacy', value: '100', suffix: '%' },
      { label: 'Faster Answers', value: '5', suffix: 'x' },
      { label: 'User Adoption', value: '90', suffix: '%' },
    ],
    color: 'from-violet-500/20 to-blue-500/20',
    howItWorks: [
      {
        step: '01',
        title: 'Connect Your Data',
        description: 'Integrate internal documents, databases, wikis, and knowledge repositories into your private AI system.',
      },
      {
        step: '02',
        title: 'Build Your Knowledge Base',
        description: 'We index your content into a searchable vector database, making every piece of knowledge instantly accessible to the AI.',
      },
      {
        step: '03',
        title: 'Deploy To Your Teams',
        description: 'Roll out with role-based permissions, audit trails, and department-specific knowledge access controls.',
      },
    ],
    comparison: [
      { feature: 'Data Privacy', public: false, private: true },
      { feature: 'Uses Your Internal Knowledge', public: false, private: true },
      { feature: 'Custom-Trained on Your Data', public: false, private: true },
      { feature: 'Stays on Your Infrastructure', public: false, private: true },
      { feature: 'Role-Based Access Control', public: false, private: true },
      { feature: 'Full Audit Trail', public: false, private: true },
      { feature: 'Compliance Ready', public: false, private: true },
    ],
    departments: [
      { name: 'Customer Support', use: 'Instant answers from product docs and FAQs' },
      { name: 'Sales Teams', use: 'Real-time proposals from pricing and product knowledge' },
      { name: 'Engineering', use: 'Codebase Q&A and internal documentation search' },
      { name: 'Human Resources', use: 'Policy answers and onboarding automation' },
    ],
    cta: { primary: 'Get Private ChatGPT', secondary: 'See How It Works' },
  },
  {
    id: 'sales-engineering-ai',
    slug: 'sales-engineering-ai',
    Icon: TrendingUp,
    title: 'Sales Engineering AI',
    tagline: 'AI That Sells While You Sleep',
    shortDescription:
      'Qualify leads, generate custom proposals, and manage your entire pipeline with AI agents that work 24/7 — so your sales team focuses only on closing.',
    description:
      'Sales teams spend only 28% of their time actually selling. The rest goes to admin, qualification, and follow-ups. Our AI sales engineering platform automates the entire pre-sale process, letting your team focus exclusively on relationship-building and closing.',
    metrics: [
      { label: 'More Qualified Leads', value: '3', suffix: 'x' },
      { label: 'Faster Proposal Time', value: '90', suffix: '%' },
      { label: 'Follow-up Rate', value: '100', suffix: '%' },
    ],
    color: 'from-orange-500/20 to-red-500/20',
    capabilities: [
      {
        title: 'Lead Qualification',
        description:
          'AI agents engage new prospects 24/7, ask intelligent qualifying questions, score leads by fit, and route high-value opportunities directly to your best closers.',
        icon: '🎯',
      },
      {
        title: 'Proposal Automation',
        description:
          'Generate fully customized, professional proposals in minutes using your pricing, templates, and customer data — not in hours.',
        icon: '📄',
      },
      {
        title: 'Pipeline Management',
        description:
          'Real-time pipeline visibility with AI-powered forecasting. Know exactly which deals are at risk and where to focus attention.',
        icon: '📊',
      },
      {
        title: 'Follow-up Automation',
        description:
          'Never miss a follow-up again. AI handles timing, messaging, and personalization — keeping every prospect warm until they\'re ready.',
        icon: '⚡',
      },
    ],
    cta: { primary: 'See How It Works', secondary: 'Schedule Demo' },
  },
  {
    id: 'custom-ai-applications',
    slug: 'custom-ai-applications',
    Icon: Code2,
    title: 'Custom AI Applications',
    tagline: 'Custom Software + AI Agents = Your Competitive Edge',
    shortDescription:
      'Stop paying for off-the-shelf software that doesn\'t fit. We build custom applications with embedded AI agents that work exactly the way your business works.',
    description:
      'Generic SaaS tools are built for everyone, which means they\'re perfect for no one. We design and build custom software applications with AI agents woven directly into every workflow — giving you capabilities your competitors simply can\'t buy.',
    metrics: [
      { label: 'You Own The Code', value: '100', suffix: '%' },
      { label: 'No Monthly SaaS Fees', value: '0', suffix: '$' },
      { label: 'Built For You', value: '1', suffix: ':1' },
    ],
    color: 'from-pink-500/20 to-violet-500/20',
    valueProps: [
      {
        title: 'Built for Your Processes',
        description:
          'Every application is designed around how your business actually works — not how some SaaS product thinks you should work.',
        highlight: 'Zero compromise on workflow.',
      },
      {
        title: 'AI Agents Inside',
        description:
          'Every app we build includes AI agents that automate tasks, surface insights, and make intelligent decisions — from day one.',
        highlight: 'Intelligence baked in, not bolted on.',
      },
      {
        title: 'You Own Everything',
        description:
          'No monthly licensing fees. No vendor lock-in. Your code, your data, your infrastructure. Forever.',
        highlight: 'Full ownership, no strings attached.',
      },
      {
        title: 'Scales With You',
        description:
          'Modern cloud-native architecture that handles 10 users or 10,000. Built to grow as fast as your business does.',
        highlight: 'Architecture that never holds you back.',
      },
    ],
    examples: [
      'Custom CRM with AI-powered lead scoring',
      'Inventory management with demand forecasting',
      'Operations dashboard with anomaly detection',
      'Client portal with AI document generation',
    ],
    cta: { primary: "Let's Build Yours", secondary: 'View Examples' },
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null
}
