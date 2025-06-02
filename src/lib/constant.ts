import { IconType } from "react-icons";
import { FaChartLine, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

interface FeatureItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: IconType;
  color:string;
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
      icon: FaChartLine ,
      color: 'text-yellow-300 h-4 w-4 md:h-5 md:w-5',
      title: "Cost Optimization",
      description: "Gain insights into spending patterns and identify cost-saving opportunities with powerful analytics dashboards."
    },
    {
      icon: FaCheckCircle,
      color: 'text-green-400 h-4 w-4 md:h-5 md:w-5',
      title: "Approval Workflows ",
      description: "Configure custom approval workflows to ensure compliance with your organization's procurement policies."
    },
    {
      icon: FaShieldAlt,
      color: 'text-amber-400 h-4 w-4 md:h-5 md:w-5',
      title: "Vendor Management",
      description: "Centralize vendor information, track performance metrics, and streamline supplier relationship management."
    }
  ];

  export const stepItems: StepItem[] = [
    {
      title: "Create an Account",
      step: "Step 1",
      description: "Register your organization and set up your procurement team with role-based access controls."
    },
    {
      title: "Configure Workflows",
      step: "Step 2",
      description: "Set up approval processes, spending limits, and integration with your existing systems."
    },
    {
      title: "Start Managing Procurement",
      step: "Step 3",
      description: "Process purchase requisitions, manage vendors, and gain insights through comprehensive reporting."
    }
  ];