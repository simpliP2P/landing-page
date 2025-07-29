import { IconType } from "react-icons";
import { FaChartLine, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

interface FeatureItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: IconType;
  color: string;
  title: string;
  description: string;
}

interface StepItem {
  title: string;
  step: string;
  description: string;
}
export const featureItems: FeatureItem[] = [
  {
    icon: FaChartLine,
    color: "text-yellow-300 h-4 w-4 md:h-5 md:w-5",
    title: "Cost Optimization",
    description:
      "Gain insights into spending patterns and identify cost-saving opportunities with powerful analytics dashboards.",
  },
  {
    icon: FaCheckCircle,
    color: "text-green-400 h-4 w-4 md:h-5 md:w-5",
    title: "Approval Workflows ",
    description:
      "Configure custom approval workflows to ensure compliance with your organization's procurement policies.",
  },
  {
    icon: FaShieldAlt,
    color: "text-amber-400 h-4 w-4 md:h-5 md:w-5",
    title: "Vendor Management",
    description:
      "Centralize vendor information, track performance metrics, and streamline supplier relationship management.",
  },
];

export const stepItems: StepItem[] = [
  {
    title: "Create an Account",
    step: "Step 1",
    description:
      "Register your organization and set up your procurement team with role-based access controls.",
  },
  {
    title: "Configure Workflows",
    step: "Step 2",
    description:
      "Set up approval processes, spending limits, and integration with your existing systems.",
  },
  {
    title: "Start Managing Procurement",
    step: "Step 3",
    description:
      "Process purchase requisitions, manage vendors, and gain insights through comprehensive reporting.",
  },
];

export const sections = [
  {
    id: "purchase-order",
    title: "Purchase Order Management",
    icon: "📋",
    content: {
      overview:
        "Streamline your purchase order process from creation to approval with our comprehensive PO management system.",
      features: [
        "Automated PO generation from approved requisitions",
        "Real-time budget validation and spending controls",
        "Multi-level approval workflows",
        "Vendor communication and order tracking",
        "Integration with inventory and receiving systems",
      ],
      benefits: [
        "Reduce processing time by up to 70%",
        "Eliminate manual errors and duplicate orders",
        "Improve vendor relationships with clear communication",
        "Ensure compliance with procurement policies",
      ],
      howItWorks: [
        "Create purchase requisition with detailed specifications",
        "System validates budget availability and approvals",
        "Auto-generate PO with vendor and pricing details",
        "Send PO to vendor through integrated communication",
        "Track delivery status and receive confirmations",
      ],
    },
  },
  {
    id: "supplier-management",
    title: "Supplier Management",
    icon: "🤝",
    content: {
      overview:
        "Centralize supplier information, manage relationships, and optimize your vendor ecosystem for better procurement outcomes.",
      features: [
        "Comprehensive supplier database and profiles",
        "Performance tracking and scorecards",
        "Contract management and renewal alerts",
        "Risk assessment and compliance monitoring",
        "Supplier onboarding and qualification workflows",
      ],
      benefits: [
        "Better supplier relationships and negotiations",
        "Reduced supply chain risks",
        "Improved supplier performance visibility",
        "Streamlined vendor onboarding process",
      ],
      howItWorks: [
        "Register and profile suppliers with detailed information",
        "Conduct supplier qualification and verification",
        "Monitor performance metrics and compliance",
        "Manage contracts and service level agreements",
        "Generate supplier scorecards and reports",
      ],
    },
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    icon: "📦",
    content: {
      overview:
        "Optimize inventory levels, reduce carrying costs, and ensure materials availability with intelligent inventory management.",
      features: [
        "Real-time inventory tracking and visibility",
        "Automated reorder points and stock alerts",
        "ABC analysis and demand forecasting",
        "Multi-location inventory management",
        "Integration with procurement and accounting systems",
      ],
      benefits: [
        "Reduce inventory carrying costs by 20-30%",
        "Minimize stockouts and overstock situations",
        "Improve cash flow through optimized inventory",
        "Better demand planning and forecasting",
      ],
      howItWorks: [
        "Set up inventory items with specifications and parameters",
        "Configure reorder points and safety stock levels",
        "Monitor stock levels and receive automated alerts",
        "Generate purchase recommendations based on demand",
        "Track inventory movements and generate reports",
      ],
    },
  },
  {
    id: "budget",
    title: "Budget Management",
    icon: "💰",
    content: {
      overview:
        "Control spending, track budget utilization, and ensure financial compliance with comprehensive budget management tools.",
      features: [
        "Multi-dimensional budget planning and allocation",
        "Real-time budget tracking and utilization",
        "Automated spending controls and approvals",
        "Budget variance analysis and reporting",
        "Integration with accounting and ERP systems",
      ],
      benefits: [
        "Better financial control and visibility",
        "Prevent budget overruns and unauthorized spending",
        "Improve budget planning accuracy",
        "Enhanced financial reporting and compliance",
      ],
      howItWorks: [
        "Create annual and periodic budget allocations",
        "Set spending limits and approval thresholds",
        "Monitor real-time budget utilization",
        "Receive alerts for budget variances",
        "Generate comprehensive budget reports",
      ],
    },
  },
  {
    id: "audit-trails",
    title: "Audit Trails",
    icon: "🔍",
    content: {
      overview:
        "Maintain complete audit trails for all procurement activities to ensure compliance, transparency, and accountability.",
      features: [
        "Complete transaction history and documentation",
        "User activity logging and tracking",
        "Document version control and archiving",
        "Compliance reporting and audit support",
        "Role-based access and security controls",
      ],
      benefits: [
        "Full compliance with regulatory requirements",
        "Enhanced transparency and accountability",
        "Simplified audit processes",
        "Improved risk management and control",
      ],
      howItWorks: [
        "Automatically log all system activities and changes",
        "Maintain detailed transaction histories",
        "Generate audit reports for compliance reviews",
        "Provide secure access to audit information",
        "Support regulatory and internal audit requirements",
      ],
    },
  },
  {
    id: "approval-workflows",
    title: "Approval Workflows",
    icon: "✅",
    content: {
      overview:
        "Automate approval processes with configurable workflows that ensure proper authorization and speed up procurement cycles.",
      features: [
        "Configurable multi-level approval workflows",
        "Role-based approval routing and delegation",
        "Automated notifications and escalations",
        "Mobile approval capabilities",
        "Workflow analytics and optimization",
      ],
      benefits: [
        "Faster approval cycles and reduced delays",
        "Consistent application of approval policies",
        "Better visibility into approval status",
        "Reduced administrative overhead",
      ],
      howItWorks: [
        "Configure approval workflows based on amount, category, or department",
        "Route requests automatically to appropriate approvers",
        "Send notifications and reminders for pending approvals",
        "Enable mobile approvals for faster processing",
        "Track and analyze workflow performance",
      ],
    },
  },
];


export const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation in Nigerian Procurement",
    excerpt:
      "How digital procurement solutions are revolutionizing business operations across Nigeria and driving competitive advantage.",
    author: "Olalekan Adebayo",
    date: "2025-01-25",
    readTime: "8 min read",
    category: "Digital Transformation",
    image: "/procurement-2.jpg",
    content: {
      introduction:
        "Nigeria's business landscape is experiencing a profound digital transformation, and procurement is at the forefront of this evolution. As organizations strive to remain competitive in an increasingly complex marketplace, digital procurement solutions have emerged as game-changers, offering unprecedented opportunities for efficiency, transparency, and strategic value creation.",
      sections: [
        {
          title: "The Current State of Nigerian Procurement",
          content:
            "Traditional procurement processes in Nigeria have long been characterized by manual workflows, paper-based documentation, and fragmented supplier relationships. These legacy systems often result in:",
          points: [
            "Extended procurement cycles lasting weeks or months",
            "Limited visibility into spending patterns and supplier performance",
            "Compliance challenges and audit difficulties",
            "Missed opportunities for cost optimization and strategic sourcing",
          ],
        },
        {
          title: "Digital Transformation Benefits",
          content:
            "Organizations embracing digital procurement solutions are experiencing remarkable transformations:",
          subsections: [
            {
              title: "Significant Cost Reduction (15-25%)",
              points: [
                "Automated sourcing: E-auctions and competitive bidding platforms drive better pricing",
                "Spend analytics: Data-driven insights identify cost-saving opportunities",
                "Contract optimization: Digital tools ensure favorable terms and compliance",
                "Reduced maverick spending: Controlled procurement processes eliminate unauthorized purchases",
              ],
            },
            {
              title: "Dramatic Time Savings (Up to 50%)",
              points: [
                "Streamlined workflows: Automated approval processes and routing",
                "Digital catalogs: Pre-approved products and services for quick ordering",
                "Electronic invoicing: Faster processing and payment cycles",
                "Mobile accessibility: Approvals and requests from anywhere, anytime",
              ],
            },
            {
              title: "Enhanced Transparency and Compliance",
              points: [
                "Complete audit trails: Every transaction is tracked and documented",
                "Real-time reporting: Dashboard views of procurement performance",
                "Automated compliance checks: Built-in controls ensure policy adherence",
                "Risk management: Supplier performance monitoring and risk assessment",
              ],
            },
          ],
        },
        {
          title: "Key Technologies Driving Change",
          content:
            "Several technological innovations are reshaping Nigerian procurement:",
          points: [
            "Cloud-based platforms: Scalable, accessible solutions without heavy IT infrastructure",
            "Artificial Intelligence: Predictive analytics for demand planning and supplier selection",
            "Mobile applications: On-the-go procurement for field operations",
            "Blockchain: Enhanced security and transparency in transactions",
            "IoT integration: Real-time inventory tracking and automated reordering",
          ],
        },
      ],
      conclusion:
        "The digital transformation of procurement is not just a trend—it's an imperative for Nigerian businesses seeking to thrive in the modern economy. Organizations that embrace these technologies today will gain significant competitive advantages, improved operational efficiency, and stronger stakeholder relationships.",
    },
  },
  {
    id: 2,
    title: "Building Strong Supplier Relationships",
    excerpt:
      "Transform vendor relationships from transactional interactions to strategic partnerships that drive mutual value and competitive advantage.",
    author: "Banke Shaba",
    date: "2025-01-22",
    readTime: "7 min read",
    category: "Supplier Management",
    image: "/procurement-3.webp",
    content: {
      introduction:
        "In today's interconnected business environment, the strength of your supplier relationships can make or break your competitive advantage. Leading organizations are moving beyond traditional transactional relationships to build strategic partnerships that create mutual value, drive innovation, and enhance resilience across their supply chains.",
      sections: [
        {
          title: "The Evolution from Vendor to Partner",
          content:
            "Traditional procurement focused primarily on cost reduction through competitive bidding and arm's-length relationships. However, modern businesses recognize that suppliers are valuable extensions of their organization, capable of contributing to:",
          points: [
            "Innovation and R&D: Joint product development and process improvements",
            "Market Intelligence: Industry insights and competitive intelligence",
            "Risk Mitigation: Shared risk management and business continuity planning",
            "Operational Excellence: Process optimization and quality improvements",
          ],
        },
        {
          title: "Foundation Elements of Strong Relationships",
          subsections: [
            {
              title: "Clear and Consistent Communication",
              content:
                "Effective communication is the cornerstone of successful partnerships:",
              points: [
                "Regular business reviews: Quarterly strategic discussions beyond day-to-day operations",
                "Dedicated communication channels: Direct access to key decision-makers",
                "Transparent feedback mechanisms: Open dialogue about performance and expectations",
                "Proactive issue resolution: Early warning systems for potential problems",
              ],
            },
            {
              title: "Comprehensive Performance Metrics",
              content:
                "Establish balanced scorecards that measure multiple dimensions:",
              points: [
                "Quality Metrics: Defect rates, compliance scores, customer satisfaction",
                "Delivery Performance: On-time delivery, lead time variability, fill rates",
                "Financial Performance: Total cost of ownership, invoice accuracy, cost savings",
                "Innovation Contribution: Ideas generated, improvements implemented, value created",
              ],
            },
          ],
        },
      ],
      conclusion:
        "Building strong supplier relationships requires intentional effort, strategic thinking, and long-term commitment. Organizations that invest in developing genuine partnerships with their suppliers will build more resilient supply chains, drive innovation, and achieve sustainable competitive advantages.",
    },
  },
  {
    id: 3,
    title: "Compliance and Risk Management in Nigerian Procurement",
    excerpt:
      "Navigate the complex regulatory landscape and implement robust risk management frameworks for successful procurement operations.",
    author: "Anjola Ogundimu",
    date: "2025-01-20",
    readTime: "9 min read",
    category: "Compliance",
    image: "/procurement-1.webp",
    content: {
      introduction:
        "In Nigeria's evolving business environment, procurement compliance and risk management have become critical success factors for organizations across all sectors. The regulatory landscape continues to evolve, with increasing emphasis on transparency, accountability, and good governance practices.",
      sections: [
        {
          title: "The Nigerian Regulatory Framework",
          content:
            "Nigerian procurement operates within a comprehensive regulatory environment:",
          subsections: [
            {
              title: "Public Procurement Act (PPA) 2007",
              content:
                "The cornerstone of Nigerian procurement regulation, establishing:",
              points: [
                "Procurement procedures: Standardized processes for public sector procurement",
                "Threshold limits: Mandatory procurement methods based on contract values",
                "Competition requirements: Open competitive bidding as the default method",
                "Transparency obligations: Publication of contract awards and procurement plans",
              ],
            },
            {
              title: "Tax Compliance Requirements",
              points: [
                "Value Added Tax (VAT): Currently 7.5% on most goods and services",
                "Withholding Tax: Various rates depending on transaction type and recipient",
                "Company Income Tax: Corporate tax implications of procurement decisions",
                "Stamp Duties: Required on certain contract documents and agreements",
              ],
            },
          ],
        },
      ],
      conclusion:
        "Effective compliance and risk management are not just regulatory necessities—they are strategic capabilities that protect organizations while enabling sustainable growth.",
    },
  },
  {
    id: 4,
    title: "Strategic Cost Optimization in Procurement",
    excerpt:
      "Proven methodologies and innovative strategies to reduce procurement costs while maintaining quality, relationships, and long-term value.",
    author: "Dolapo Adeyemi",
    date: "2025-01-18",
    readTime: "8 min read",
    category: "Cost Management",
    image: "/procurement-2.jpg",
    content: {
      introduction:
        "In today's competitive business environment, procurement cost optimization has evolved far beyond simple cost cutting exercises. Modern organizations recognize that sustainable cost reduction requires a strategic approach that balances immediate savings with long-term value creation.",
      sections: [
        {
          title: "Strategic Cost Optimization Framework",
          subsections: [
            {
              title: "Volume Consolidation and Aggregation",
              content:
                "Leverage organizational spending power through strategic consolidation:",
              points: [
                "Spend analysis: Identify fragmented spending across categories and suppliers",
                "Demand aggregation: Combine requirements across departments, locations, and time periods",
                "Supplier consolidation: Reduce supplier base while increasing volume per supplier",
                "Volume commitments: Secure better pricing through guaranteed purchase volumes",
              ],
            },
            {
              title: "Strategic Sourcing Excellence",
              points: [
                "Market research: Understand supply markets, pricing trends, and competitive landscape",
                "Should-cost modeling: Develop independent cost estimates based on underlying cost drivers",
                "Global sourcing: Explore international suppliers while managing associated risks",
                "Alternative suppliers: Develop multiple qualified sources to increase competition",
              ],
            },
          ],
        },
      ],
      conclusion:
        "Strategic cost optimization requires a holistic approach that balances immediate cost reduction with long-term value creation. Organizations that master these techniques can achieve sustainable cost advantages while building stronger supplier relationships.",
    },
  },
  {
    id: 5,
    title: "AI in Modern Procurement",
    excerpt:
      "How artificial intelligence is transforming procurement processes and creating new opportunities for efficiency and strategic value.",
    author: "Tunde Okafor",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Technology",
    image: "/procurement-3.webp",
    content: {
      introduction:
        "Artificial Intelligence and automation are revolutionizing procurement, offering unprecedented opportunities for efficiency, strategic value creation, and competitive advantage across all industries.",
      sections: [
        {
          title: "AI Applications in Procurement",
          points: [
            "Predictive Analytics: Forecast demand patterns and optimize inventory levels",
            "Spend Analysis: Automated categorization and insight generation from spending data",
            "Supplier Risk Assessment: Continuous monitoring of supplier financial health and performance",
            "Contract Intelligence: Automated contract analysis and risk identification",
          ],
        },
        {
          title: "Implementation Benefits",
          points: [
            "Improved decision-making through data-driven insights",
            "Reduced manual workload and increased efficiency",
            "Enhanced risk management and compliance",
            "Better supplier relationship management",
          ],
        },
      ],
      conclusion:
        "Organizations embracing AI in procurement will gain significant competitive advantages through improved efficiency, better decision-making, and enhanced strategic value creation.",
    },
  },
  {
    id: 6,
    title: "Sustainable Procurement Practices",
    excerpt:
      "Integrate environmental and social responsibility into procurement processes while maintaining business objectives and competitive advantage.",
    author: "Kemi Adebisi",
    date: "2025-01-12",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/procurement-1.webp",
    content: {
      introduction:
        "Sustainable procurement balances environmental impact with business objectives, creating long-term value through responsible sourcing and supplier partnerships.",
      sections: [
        {
          title: "Key Principles of Sustainable Procurement",
          points: [
            "Environmental Impact consideration: Assess and minimize ecological footprint",
            "Social Responsibility: Ensure fair labor practices and community benefits",
            "Economic Viability: Maintain cost-effectiveness and business sustainability",
            "Transparent Governance: Clear policies and accountable decision-making",
          ],
        },
        {
          title: "Implementation Strategies",
          points: [
            "Supplier sustainability assessments and certifications",
            "Life-cycle cost analysis including environmental impacts",
            "Local sourcing to reduce transportation emissions",
            "Circular economy principles in procurement decisions",
          ],
        },
      ],
      conclusion:
        "Sustainable procurement creates long-term value through operational efficiency, risk reduction, and enhanced reputation while contributing to global sustainability goals.",
    },
  },
];