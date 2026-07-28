/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Industry, Testimonial, FAQ, ProcessStep, TrustCounter, Technology, CaseStudy } from './types';
import { SAP_LOGO, ERPNEXT_LOGO, SALESFORCE_LOGO, ZOHO_LOGO, POWERBI_LOGO, AI_LOGO } from './assets/techLogos';

export const SERVICES: Service[] = [
  {
    id: 'erp',
    title: 'ERP Consulting & Implementation',
    description: 'Strategic ERP consulting and implementation, including SAP, ERPNext, and Zoho ERP, that improves efficiency, decision-making, and sustainable growth.',
    fullDescription: 'We help organizations transform their operations through strategic ERP consulting and implementation. From ERP selection and implementation to optimization and support, we deliver ERP solutions that improve efficiency, enhance decision-making, and enable sustainable growth.',
    includes: ['Strategy & Advisory', 'ERP Selection', 'Implementation', 'Customization', 'Data Migration', 'Integration', 'Training', 'Go-Live', 'Support'],
    icon: 'Briefcase'
  },
  {
    id: 'crm',
    title: 'CRM Consulting & Implementation',
    description: 'Strategic CRM consulting and implementation that builds customer-centric systems for stronger relationships and sustainable business growth.',
    fullDescription: 'We help organizations build customer-centric CRM solutions through strategic consulting and implementation. From CRM strategy and implementation to automation and optimization, we enable stronger customer relationships, improved productivity, and sustainable business growth.',
    includes: ['CRM Strategy & Advisory', 'CRM Selection', 'Implementation', 'Sales Automation', 'Lead Management', 'Customer Service Workflows', 'Workflow Automation', 'User Training', 'Ongoing Support'],
    icon: 'Users'
  },
  {
    id: 'business-process',
    title: 'Business Process Consulting',
    description: 'Analyzing, optimizing, and transforming business processes to improve operational efficiency, productivity, and business performance.',
    fullDescription: 'We help organizations analyze, optimize, and transform business processes to improve operational efficiency, productivity, and business performance. By aligning people, processes, and technology, we create streamlined workflows that support sustainable business growth.',
    includes: ['Business Process Assessment', 'Process Mapping', 'Workflow Optimization', 'Process Optimization', 'Bottleneck Analysis', 'Standard Operating Procedures (SOPs)', 'Change Management', 'Continuous Improvement'],
    icon: 'Workflow'
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Data Analytics',
    description: 'Interactive dashboards, KPI & MIS reporting, and analytics solutions that transform business data into actionable insights.',
    fullDescription: 'We help organizations transform business data into actionable insights through interactive dashboards and analytics. By providing real-time visibility into business performance, we enable faster decision-making, improved operational efficiency, and sustainable growth.',
    includes: ['Executive Dashboards', 'KPI & MIS Reporting', 'Sales Insights', 'Production Insights', 'Inventory Analytics', 'Financial Analytics', 'Production Loss & Scrap Analysis', 'Performance Reporting'],
    icon: 'BarChart3'
  },
  {
    id: 'inventory-visibility-automation',
    title: 'Inventory Visibility & Automation',
    description: 'Barcode, QR Code, and RFID-powered enterprise solutions that improve inventory visibility and automate warehouse operations.',
    fullDescription: 'We help organizations improve inventory visibility and automate warehouse operations through enterprise solutions powered by Barcode, QR Code, and RFID technologies. By enabling real-time inventory tracking, production monitoring, and operational visibility, we help businesses improve accuracy, optimize efficiency, and enhance supply chain performance.',
    includes: ['Barcode & QR Code Solutions', 'RFID Enablement', 'Inventory Visibility', 'Warehouse Automation', 'Production Tracking', 'Dispatch Monitoring', 'Asset Tracking', 'ERP Integration'],
    icon: 'ScanLine'
  },
  {
    id: 'system-audit',
    title: 'Enterprise Application Audit & Health Check',
    description: 'A comprehensive assessment of your enterprise applications, business processes, and data quality, delivering a prioritized improvement roadmap.',
    fullDescription: 'Our Enterprise Application Audit & Health Check provides a comprehensive assessment of your enterprise applications, business processes, and data quality. We identify performance issues, process gaps, integration risks, and optimization opportunities—delivering a prioritized roadmap for improved efficiency, reliability, and business performance.',
    includes: [
      'System Performance Analysis',
      'Business Process Assessment',
      'Data Quality & Integrity Review',
      'Security & Access Review',
      'Integration Health Check',
      'Compliance Assessment',
      'Optimization Recommendations',
      'Improvement Roadmap'
    ],
    icon: 'ShieldCheck',
    isPremium: true,
    badge: 'Premium Service'
  }
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'sap',
    name: 'SAP',
    description: 'Enterprise ERP solutions for finance, manufacturing, procurement, inventory, warehouse management, sales, and supply chain operations.',
    icon: 'Server',
    logo: SAP_LOGO
  },
  {
    id: 'erpnext',
    name: 'ERPNext',
    description: 'Open-source ERP platform for manufacturing, accounting, inventory, HR, CRM, project management, and business operations.',
    icon: 'Leaf',
    logo: ERPNEXT_LOGO
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: "World's leading cloud CRM platform for sales automation, customer service, marketing, and customer relationship management.",
    icon: 'Cloud',
    logo: SALESFORCE_LOGO
  },
  {
    id: 'zoho',
    name: 'Zoho',
    description: 'Integrated business applications for CRM, finance, HR, operations, and business productivity.',
    icon: 'LayoutGrid',
    logo: ZOHO_LOGO
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    description: 'Interactive dashboards, KPI reporting, business intelligence, and data visualization for informed business decisions.',
    icon: 'BarChart3',
    logo: POWERBI_LOGO
  },
  {
    id: 'ai-tech',
    name: 'Artificial Intelligence',
    description: 'AI-powered automation, predictive analytics, intelligent reporting, and business process optimization.',
    icon: 'Cpu',
    logo: AI_LOGO
  }
];

export const SOLUTIONS: string[] = [
  'ERP Consulting & Implementation',
  'CRM Consulting & Implementation',
  'Business Process Consulting',
  'Business Intelligence & Dashboard Solutions',
  'Inventory Visibility & Automation (Barcode, QR Code & RFID)',
  'Enterprise Application Audit & Health Check',
  'Enterprise System Integration',
  'Data Migration & Master Data Management',
  'Business Process Automation',
  'User Training & Go-Live Support',
  'Continuous System Optimization'
];

export const BUSINESS_CHALLENGES: string[] = [
  'Selecting the Right ERP & CRM',
  'Manual & Inefficient Business Processes',
  'Lack of Business Visibility',
  'Disconnected Systems',
  'Inventory & Warehouse Challenges',
  'Manufacturing Process Inefficiencies',
  'Poor Reporting & Decision Making',
  'Low User Adoption',
  'Data Management Challenges',
  'Digital Transformation Planning'
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'textile-apparel-yarn',
    name: 'Textile, Apparel & Yarn',
    description: 'Enterprise consulting solutions for Textile, Apparel & Yarn businesses. Supporting production planning, job work management, procurement, inventory control, quality management, warehouse operations, asset maintenance, and supply chain optimization.',
    workflows: [
      'Production Planning & BOM Management',
      'Job Work & Processing Management',
      'Inventory & Warehouse Control',
      'Quality Management & Lot Traceability',
      'Asset & Machine Maintenance'
    ],
    challenges: 'Job work reconciliation, inventory mismatches, production planning delays, machine downtime, and limited lot traceability reduce operational efficiency and business visibility.',
    solution: 'We integrate production, job work, inventory, quality, warehouse, and asset management into a single connected business process.',
    icon: 'Layers',
    image: '/industry-textile-apparel-yarn.jpg'
  },
  {
    id: 'engineering-machinery',
    name: 'Engineering & Machinery',
    description: 'Enterprise consulting solutions for Engineering & Machinery businesses. Supporting production planning, engineering change management, procurement, costing, asset maintenance, quality control, and shop floor operations.',
    workflows: [
      'BOM & Engineering Change Management',
      'Production Planning & Scheduling',
      'Asset & Machine Maintenance',
      'Job Costing & Quality Control'
    ],
    challenges: 'Frequent BOM revisions, machine downtime, production scheduling challenges, and inaccurate job costing impact operational efficiency and delivery performance.',
    solution: 'We connect engineering, production, asset management, procurement, and costing to improve manufacturing efficiency and operational control.',
    icon: 'Factory',
    image: '/industry-engineering-machinery.jpg'
  },
  {
    id: 'lab-grown-diamond-gems',
    name: 'Lab-Grown Diamond & Gems',
    description: 'Enterprise consulting solutions for Lab-Grown Diamond & Gems businesses. Supporting manufacturing, grading, inventory, certification, procurement, and sales operations.',
    workflows: [
      'Stone & Lot Traceability',
      'Manufacturing & Yield Tracking',
      'Certification Management',
      'Inventory & Sales Management'
    ],
    challenges: 'Stone traceability, certification records, inventory valuation, production visibility, and yield tracking are often managed manually, increasing operational risk.',
    solution: 'We deliver end-to-end visibility across manufacturing, grading, inventory, certification, and customer order management.',
    icon: 'Gem',
    image: '/industry-lab-grown-diamond-gems.jpg'
  },
  {
    id: 'construction-building-materials-real-estate',
    name: 'Construction, Building Materials & Real Estate',
    description: 'Enterprise consulting solutions for Construction, Building Materials & Real Estate businesses. Supporting CRM, project execution, procurement, site inventory, asset management, contractor management, and financial operations.',
    workflows: [
      'CRM & Lead Management',
      'Project & Site Progress Monitoring',
      'Material Procurement & Site Inventory',
      'Asset & Equipment Management'
    ],
    challenges: 'Poor site progress visibility, procurement delays, material shortages, equipment utilization, and project cost overruns impact project timelines and profitability.',
    solution: 'We integrate CRM, project execution, procurement, inventory, asset management, and financial operations to improve project visibility, customer engagement, and cost control.',
    icon: 'HardHat',
    image: '/industry-construction-building-materials-real-estate.jpg'
  },
  {
    id: 'wholesale-distribution-trading',
    name: 'Wholesale, Distribution & Trading',
    description: 'Enterprise consulting solutions for Wholesale, Distribution & Trading businesses. Supporting sales, back-to-back order processing, procurement, inventory, warehouse operations, dispatch, dealer management, and customer relationship management.',
    workflows: [
      'Sales & Order Management',
      'Back-to-Back Order Processing',
      'Dealer & Distributor Management',
      'Multi-Warehouse Inventory',
      'Dispatch & Collections Management'
    ],
    challenges: 'Order fulfillment delays, inefficient back-to-back order processing, inventory inconsistencies, dealer pricing complexity, outstanding collections, and warehouse synchronization affect customer satisfaction and cash flow.',
    solution: 'We streamline back-to-back order processing, sales, procurement, inventory, warehouse, dispatch, and customer operations through integrated enterprise solutions, enabling faster order fulfillment and improved supply chain visibility.',
    icon: 'Package',
    image: '/industry-wholesale-distribution-trading.jpg'
  },
  {
    id: 'pharma-healthcare',
    name: 'Pharmaceuticals & Healthcare',
    description: 'Enterprise consulting solutions for Pharmaceutical & Healthcare organizations. Supporting batch manufacturing, inventory, quality, compliance, asset management, procurement, and distribution.',
    workflows: [
      'Batch & Lot Traceability',
      'Inventory & Warehouse Management',
      'Quality & Compliance Management',
      'Asset & Equipment Management'
    ],
    challenges: 'Regulatory compliance, batch traceability, equipment validation, quality documentation, and inventory accuracy require complete operational visibility.',
    solution: 'We implement integrated business solutions that improve compliance, traceability, inventory control, asset management, and operational efficiency.',
    icon: 'Pill',
    image: '/industry-pharma-healthcare.jpg'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Business-First Consulting Approach',
    description: 'We start with your business goals, not a product pitch. Every recommendation is grounded in what actually improves your operations.'
  },
  {
    title: 'Technology-Neutral Solution Advisory',
    description: "We aren't tied to a single vendor. Whether it's SAP, ERPNext, Salesforce, or Zoho, we recommend what genuinely fits your business."
  },
  {
    title: 'Strong Manufacturing Domain Expertise',
    description: 'Deep, hands-on knowledge of production floors across textile, engineering, pharma, packaging, and construction sectors.'
  },
  {
    title: 'ERP, CRM & AI Specialists',
    description: 'A single consulting partner for enterprise systems, customer relationship platforms, and intelligent automation, all under one roof.'
  },
  {
    title: 'Practical Industry Experience',
    description: 'Our recommendations are shaped by real implementation experience on real production floors, not theoretical frameworks.'
  },
  {
    title: 'End-to-End Implementation & Support',
    description: 'We stay engaged from requirement analysis through go-live and beyond, ensuring systems keep delivering value as you scale.'
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'We build reporting and BI systems that turn your operational data into clear, actionable insight for leadership.'
  },
  {
    title: 'Long-Term Business Partnership',
    description: 'We act as your ongoing technology partner, supporting your business as it grows and market conditions evolve.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We engage with key stakeholders to understand your business processes, existing systems, operational challenges, and strategic objectives. This discovery phase establishes the foundation for a successful transformation.',
    substeps: ['Stakeholder Discovery Sessions', 'Business Process Assessment', 'Current System Analysis', 'Pain Point Identification', 'Business Objectives & Success Criteria']
  },
  {
    step: '02',
    title: 'Analyze',
    description: 'We evaluate your business processes, system capabilities, operational gaps, and business requirements to identify opportunities for optimization and digital transformation.',
    substeps: ['Workflow & Gap Analysis', 'Process Evaluation', 'Requirement Analysis', 'Risk Assessment', 'Opportunity Identification']
  },
  {
    step: '03',
    title: 'Recommend',
    description: 'Based on our analysis, we define the optimal business processes, solution architecture, implementation roadmap, and technology recommendations aligned with your business goals.',
    substeps: ['Solution Blueprint', 'Business Process Design', 'Technology Recommendations', 'Implementation Roadmap', 'Project Planning & Scope']
  },
  {
    step: '04',
    title: 'Implement',
    description: 'We configure, customize, integrate, migrate data, and deploy the solution using industry best practices while minimizing business disruption.',
    substeps: ['Solution Configuration', 'System Customization', 'Data Migration', 'Integration & Testing', 'Go-Live Execution']
  },
  {
    step: '05',
    title: 'Train',
    description: 'We prepare your teams for success through structured training, comprehensive documentation, and knowledge transfer to ensure confident user adoption.',
    substeps: ['Role-Based User Training', 'Process Documentation', 'Knowledge Transfer', 'User Acceptance Support', 'Go-Live Readiness']
  },
  {
    step: '06',
    title: 'Optimize',
    description: 'We provide ongoing support, monitor system performance, and continuously optimize business processes to maximize long-term business value and operational excellence.',
    substeps: ['Performance Monitoring', 'Continuous Improvement', 'System Optimization', 'Ongoing Support', 'Business Process Enhancement']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    sector: 'Textile Manufacturing',
    title: 'ERP-Driven Production Planning',
    result: 'Implemented ERP-driven production planning and inventory optimization, giving the client accurate visibility from raw material to finished goods.',
    icon: 'Layers'
  },
  {
    id: 'cs2',
    sector: 'Medical Device Manufacturing',
    title: 'Regulated Manufacturing Compliance',
    result: 'Delivered SAP Batch Manufacturing Records (BMR), Quality Control (QC), and EU Entity implementation for a fully compliant, audit-ready system.',
    icon: 'Pill'
  },
  {
    id: 'cs3',
    sector: 'CVD Machine Manufacturing',
    title: 'Production & Material Optimization',
    result: 'Optimized production and material management workflows, improving shop-floor visibility and reducing planning errors.',
    icon: 'Factory'
  },
  {
    id: 'cs4',
    sector: 'Lab-Grown Diamond Manufacturing',
    title: 'Manufacturing Visibility & Process Improvement',
    result: 'Improved manufacturing visibility and process efficiency across production, quality, and traceability workflows.',
    icon: 'Gem'
  },
  {
    id: 'cs5',
    sector: 'Construction',
    title: 'Procurement & Project Material Management',
    result: 'Optimized procurement and project material management, improving cost control and on-site coordination across multiple projects.',
    icon: 'HardHat'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'Which ERP solution is right for my business?',
    answer: 'We help evaluate your business requirements and recommend the most suitable ERP platform, including SAP, ERPNext, or Zoho ERP, based on your industry, scale, and budget rather than a one-size-fits-all template.',
    category: 'ERP'
  },
  {
    id: 'f2',
    question: 'Do you provide CRM consulting?',
    answer: 'Yes. We specialize in Salesforce and Zoho CRM implementation, optimization, and business process alignment, helping you improve customer engagement, sales, and service operations.',
    category: 'CRM'
  },
  {
    id: 'f3',
    question: 'Can you build dashboards and MIS reports?',
    answer: 'Yes. We develop Power BI dashboards, KPI reports, and business intelligence solutions tailored to your reporting needs, turning raw operational data into clear, actionable insight.',
    category: 'Business Intelligence'
  },
  {
    id: 'f4',
    question: 'Do you integrate WhatsApp with ERP or CRM?',
    answer: 'Yes. We implement WhatsApp Business integrations for customer communication, lead management, notifications, order updates, and support workflows, all synced directly with your core systems.',
    category: 'Integrations'
  },
  {
    id: 'f5',
    question: 'Can you integrate barcode, RFID, and banking systems with ERP?',
    answer: 'Yes. We provide enterprise integrations for barcode, RFID, banking, and other third-party systems to streamline inventory tracking, payment processing, and overall business operations.',
    category: 'Integrations'
  },
  {
    id: 'f6',
    question: 'Do you provide staff training and post-implementation support?',
    answer: 'Yes. We deliver user training, change management, go-live assistance, and ongoing support to ensure your teams achieve successful, lasting adoption of every system we implement.',
    category: 'Support'
  }
];

export interface JobOpening {
  id: string;
  title: string;
  role: string;
  responsibilities: string[];
  whoYouAre: string[];
  qualifications: string[];
  featured?: boolean;
  perks?: string[];
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'erp-consultant',
    title: 'ERP Consultant',
    role: 'Help organizations transform their business operations through ERP consulting and implementation.',
    responsibilities: [
      'Analyze business requirements',
      'Implement ERP solutions',
      'Support testing & go-live',
      'Collaborate with clients and project teams'
    ],
    whoYouAre: [
      'Analytical and problem-solving mindset',
      'Strong communication skills',
      'Passionate about consulting'
    ],
    qualifications: [
      "Bachelor's degree in Engineering, Information Technology, Computer Applications, Commerce, Business Administration, or a related field.",
      'Experience with SAP, ERPNext, or custom ERP software is an added advantage.',
      'ERP certification is an added advantage.',
      'Manufacturing domain experience is an added advantage.'
    ]
  },
  {
    id: 'crm-consultant',
    title: 'CRM Consultant',
    role: 'Help businesses improve customer engagement through CRM consulting and digital transformation.',
    responsibilities: [
      'Optimize sales & service processes',
      'Configure CRM solutions',
      'Design workflows & automation',
      'Support user adoption'
    ],
    whoYouAre: [
      'Customer-focused mindset',
      'Strong communication skills',
      'Passionate about consulting'
    ],
    qualifications: [
      "Bachelor's degree in Engineering, Information Technology, Computer Applications, Commerce, Business Administration, or a related field.",
      'Experience with Salesforce or other CRM software is an added advantage.',
      'CRM certification is an added advantage.',
      'Manufacturing sales or distribution domain experience is an added advantage.'
    ]
  },
  {
    id: 'business-process-consultant',
    title: 'Business Process Consultant',
    role: 'Help organizations improve efficiency through process optimization and business transformation.',
    responsibilities: [
      'Conduct process & gap analysis',
      'Design workflows & SOPs',
      'Recommend process improvements',
      'Support ERP & CRM initiatives'
    ],
    whoYouAre: [
      'Business-first mindset',
      'Analytical and detail-oriented',
      'Passionate about continuous improvement'
    ],
    qualifications: [
      "Bachelor's degree in Engineering, Business Administration, Commerce, Operations Management, or a related field.",
      'Experience in Business Process Mapping, Gap Analysis, SOP Development, or Process Improvement is an added advantage.',
      'Manufacturing domain experience is an added advantage.'
    ]
  },
  {
    id: 'founding-technology-partner',
    title: 'Founding Technology Partner',
    role: "Lead Astrabizz's technology vision by building enterprise solutions, driving product innovation, and shaping the future alongside the founding team.",
    responsibilities: [
      'Build scalable enterprise applications and digital products',
      'Lead technology architecture and system integrations',
      'Develop AI, automation, and ERP solutions',
      'Collaborate with the founders on technology strategy and innovation'
    ],
    whoYouAre: [
      'Entrepreneurial mindset with a builder mentality',
      'Passionate about technology and innovation',
      'Strong technical and leadership skills',
      'Excited to build something meaningful from the ground up'
    ],
    qualifications: [
      "Bachelor's degree in Engineering, Information Technology, Computer Science, or a related field.",
      'Experience with SAP Business One (SDK, Add-on Development, Microsoft SQL Server & SAP HANA), ERPNext/Frappe (ERP customization, custom app development & workflow automation), Microsoft .NET, Crystal Reports, and system integrations is an added advantage.',
      'Leadership or startup experience is an added advantage.'
    ],
    featured: true,
    perks: [
      'Opportunity to become a founding member',
      'Ownership of technology and product direction',
      'Long-term leadership and growth opportunities',
      'Equity-based partnership for the right candidate'
    ]
  }
];

export const WHY_JOIN_ASTRABIZZ: { icon: string; label: string }[] = [
  { icon: 'Rocket', label: 'Work on Real Client Projects' },
  { icon: 'BookOpen', label: 'Learn from Industry Experts' },
  { icon: 'TrendingUp', label: 'Accelerate Your Career Growth' },
  { icon: 'Handshake', label: 'Collaborative Team Culture' },
  { icon: 'Lightbulb', label: 'Innovation-Driven Environment' }
];

export const TRUST_COUNTERS: TrustCounter[] = [
  {
    id: 'exp',
    value: '12',
    suffix: '+',
    label: 'Years Experience',
    description: 'Of hands-on ERP, CRM, and digital transformation consulting'
  },
  {
    id: 'proj',
    value: '100',
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successful ERP, CRM, and enterprise transformation engagements'
  },
  {
    id: 'ind',
    value: '8',
    suffix: '+',
    label: 'Industries Served',
    description: 'Textile, Pharma, Construction, Packaging, and more'
  },
  {
    id: 'sat',
    value: '98',
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Long-term client relationships and high user adoption'
  }
];
