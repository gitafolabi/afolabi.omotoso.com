export type ProjectCategory = {
  title: string;
  icon: string;
  description: string;
};

export type Project = {
  title: string;
  category: string;
  client: string;
  duration: string;
  role: string;
  description: string;
  challenge: string;
  impact: string;
  stack: string[];
  href: string;
};

export const projectCategories: ProjectCategory[] = [
  {
    icon: "🚀",
    title: "Infrastructure Migration & Modernization",
    description:
      "Complex legacy transformations and cloud migration work that modernize platforms while keeping business operations stable. These projects focus on scalability, reliability, lower technical debt, and smoother delivery for engineering teams."
  },
  {
    icon: "⚙️",
    title: "DevOps & Automation",
    description:
      "End-to-end CI/CD, delivery automation, and infrastructure-as-code initiatives that improve release speed, reduce manual errors, and make deployments repeatable and safer."
  },
  {
    icon: "🔧",
    title: "Site Reliability Engineering",
    description:
      "Monitoring, observability, incident response, and recovery systems designed to improve uptime, reduce MTTR, and help teams detect issues before they affect customers."
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure cloud and hybrid architectures built for resilience, disaster recovery, cost optimization, and global delivery across modern production workloads."
  },
  {
    icon: "🐳",
    title: "Containerization & Orchestration",
    description:
      "Container adoption and Kubernetes platform work covering deployment strategy, cluster operations, workload scalability, service discovery, and lifecycle management."
  },
  {
    icon: "🔐",
    title: "Security & Compliance Engineering",
    description:
      "Security, governance, and compliance projects focused on policy enforcement, secrets management, secure architecture, and regulated cloud delivery across complex environments."
  }
];

export const projects: Project[] = [
  {
    title: "Self-Service Deployment Platform",
    category: "DevOps & Automation",
    client: "iGaming Platform",
    duration: "Ongoing",
    role: "DevOps Platform Engineer",
    description:
      "Designed and implemented a self-service deployment platform using GitHub Actions and Kubernetes so developers could independently manage rollouts across multi-tenant environments.",
    challenge:
      "Developers needed a safer way to deploy independently without sacrificing multi-tenant controls or operational consistency.",
    impact:
      "Improved release velocity by removing platform bottlenecks for engineering teams and making deployments more self-service.",
    stack: ["GitHub Actions", "Kubernetes", "Terraform", "AWS", "OpenShift", "Helm"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "GitOps Standardization Program",
    category: "DevOps & Automation",
    client: "iGaming Platform",
    duration: "Ongoing",
    role: "DevOps Platform Engineer",
    description:
      "Led migration to GitOps-based deployments with ArgoCD and Helm, standardizing more than 20 repositories and eliminating environment drift across delivery teams.",
    challenge:
      "Repository sprawl and inconsistent deployment patterns were creating operational risk and slowing releases.",
    impact:
      "Eliminated environment drift and made deployments more repeatable at team scale across multiple teams and services.",
    stack: ["ArgoCD", "Helm", "Kubernetes", "GitOps", "Kustomize", "AWS"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Cloud Compliance Automation",
    category: "Cloud Infrastructure",
    client: "Consulting Engagement",
    duration: "12 months",
    role: "Senior DevSecOps Engineer",
    description:
      "Built compliance and security automation across more than 1,000 AWS and Azure accounts, improving governance, auditability, and deployment consistency in regulated environments.",
    challenge:
      "Compliance requirements had to be enforced consistently across a very large set of cloud accounts without adding manual overhead.",
    impact:
      "Scaled governance controls across a large multi-account footprint with repeatable automation and stronger audit readiness.",
    stack: ["AWS", "Azure", "Terraform", "Azure DevOps", "Python", "SQL", "Docker"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Enterprise CI/CD Automation Platform",
    category: "DevOps & Automation",
    client: "FinTech Scale-up",
    duration: "6 months",
    role: "Senior DevOps Architect",
    description:
      "Helped design and implement a comprehensive CI/CD automation platform for a mid-sized fintech company, reducing deployment time by 60% and improving release consistency across environments.",
    challenge:
      "Delivery workflows were slowed by manual approvals, inconsistent environments, and brittle deployment steps that increased release risk.",
    impact:
      "Deployment time dropped by 60%, release quality improved, and engineering teams were able to ship more frequently with greater confidence.",
    stack: ["Jenkins", "GitLab CI", "Docker", "AWS", "Terraform", "Ansible", "Kubernetes", "Python"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Comprehensive Monitoring & Observability Platform",
    category: "Site Reliability Engineering",
    client: "E-commerce Platform",
    duration: "4 months",
    role: "SRE Lead",
    description:
      "Built a monitoring and observability platform that reduced MTTR by 65% and helped prevent multiple outages through better alerting, tracing, and proactive visibility.",
    challenge:
      "Operations teams lacked shared visibility across services, making troubleshooting slow and increasing the chance of missed warning signals.",
    impact:
      "MTTR was reduced by 65%, teams gained clearer operational visibility, and predictive alerting helped prevent several potential incidents.",
    stack: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "Alertmanager", "Kubernetes", "Fluent Bit"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "AWS Multi-Region Architecture & Disaster Recovery",
    category: "Cloud Infrastructure",
    client: "Healthcare Technology Company",
    duration: "5 months",
    role: "Cloud Architect",
    description:
      "Helped architect and implement a multi-region AWS setup with automated disaster recovery, strong resilience controls, and better availability targets for critical systems.",
    challenge:
      "The platform needed stronger disaster recovery guarantees and improved resilience without introducing excessive operational complexity.",
    impact:
      "The architecture supported 99.9% availability targets and improved recovery readiness with an RTO of under 30 minutes.",
    stack: ["AWS", "Terraform", "Route 53", "RDS", "CloudWatch", "VPC", "Lambda", "IAM"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Infrastructure Automation & Auto-Scaling Platform",
    category: "Infrastructure Migration & Modernization",
    client: "Media Streaming Platform",
    duration: "4 months",
    role: "Infrastructure Engineer",
    description:
      "Built an infrastructure automation platform using Terraform and Ansible, reducing manual provisioning work and enabling more elastic, reliable runtime capacity.",
    challenge:
      "Provisioning and scaling workflows were too manual, leading to delays, inconsistency, and unnecessary operational overhead.",
    impact:
      "Manual provisioning time dropped by 70% and teams gained a more repeatable path for scaling infrastructure across environments.",
    stack: ["Terraform", "Ansible", "AWS", "Docker", "Linux", "Auto Scaling", "CloudWatch", "Bash"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Microservices Service Mesh Implementation",
    category: "Containerization & Orchestration",
    client: "Financial Services Company",
    duration: "6 months",
    role: "Service Mesh Architect",
    description:
      "Implemented a service mesh across a growing microservices estate to improve traffic management, internal security, and service-level observability.",
    challenge:
      "As service count grew, teams needed stronger visibility, policy enforcement, and safer service-to-service communication patterns.",
    impact:
      "The platform gained better traffic control, clearer telemetry, and a stronger internal security posture across more than 15 microservices.",
    stack: ["Consul", "Docker", "Envoy", "Prometheus", "Grafana", "Kubernetes", "Terraform", "Vault"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Enterprise Container Registry & Security Scanning Platform",
    category: "Containerization & Orchestration",
    client: "Technology Startup",
    duration: "4 months",
    role: "Container Security Engineer",
    description:
      "Built a container registry and scanning workflow with automated vulnerability checks, policy enforcement, and reporting to strengthen software supply chain security.",
    challenge:
      "Container images were being published without enough visibility into vulnerabilities, compliance status, or lifecycle governance.",
    impact:
      "Security scanning became part of the delivery flow, improving compliance reporting and giving teams faster feedback on image risk.",
    stack: ["Harbor", "Trivy", "Kubernetes", "PostgreSQL", "Docker", "Helm", "OPA", "GitLab CI"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Cloud Cost Optimization & Resource Management Platform",
    category: "Cloud Infrastructure",
    client: "SaaS Company",
    duration: "5 months",
    role: "Cloud Cost Engineer",
    description:
      "Helped develop automated cloud cost optimization workflows that reduced AWS spend while improving utilization and giving teams more visibility into waste patterns.",
    challenge:
      "Cloud spending had grown faster than governance and resource usage tracking, creating inefficiency and avoidable costs.",
    impact:
      "AWS spending was reduced by 25% while improving rightsizing, visibility, and day-to-day resource management decisions.",
    stack: ["AWS", "Python", "Terraform", "Lambda", "Athena", "CloudWatch", "Cost Explorer", "SQL"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Advanced GitOps Deployment Pipeline with ArgoCD",
    category: "DevOps & Automation",
    client: "EdTech Platform",
    duration: "4 months",
    role: "DevOps Lead",
    description:
      "Implemented a GitOps deployment pipeline with ArgoCD, improving consistency across clusters and reducing deployment time through declarative workflows.",
    challenge:
      "Application deployment across multiple clusters lacked enough consistency, traceability, and control to scale cleanly.",
    impact:
      "Deployment time was reduced by 60% while release processes became more auditable and consistent across five clusters.",
    stack: ["ArgoCD", "Kubernetes", "Helm", "Kustomize", "GitHub Actions", "Prometheus", "Grafana", "Redis"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Kubernetes Migration and Optimization",
    category: "Infrastructure Migration & Modernization",
    client: "Tech Startup",
    duration: "3 months",
    role: "Lead DevOps Engineer",
    description:
      "Led a migration from legacy infrastructure to Kubernetes, improving scalability, simplifying operations, and making the runtime environment easier to manage.",
    challenge:
      "The existing deployment model limited scalability and created too much operational effort for the engineering team.",
    impact:
      "Operational overhead dropped by 30% and the platform gained a more scalable and maintainable deployment foundation.",
    stack: ["Kubernetes", "Docker", "AWS", "Terraform", "Helm"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Centralized Observability Platform",
    category: "Site Reliability Engineering",
    client: "iGaming Platform",
    duration: "Ongoing",
    role: "DevOps Platform Engineer",
    description:
      "Architected centralized observability across 15+ client environments using Fluent Bit, Elasticsearch, Prometheus, and Grafana to improve proactive incident detection.",
    challenge:
      "Operational visibility was fragmented across environments, making troubleshooting slower and reducing confidence in incident response.",
    impact:
      "Improved detection and troubleshooting across distributed services while helping reduce MTTR and strengthen alerting quality.",
    stack: ["Prometheus", "Grafana", "Elasticsearch", "Fluent Bit", "AWS", "OpenShift", "Kubernetes"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  },
  {
    title: "Secure Messaging & Event Platform",
    category: "Cloud Infrastructure",
    client: "Data & Analytics Platform",
    duration: "4 months",
    role: "Senior DevOps Engineer",
    description:
      "Improved messaging and event-driven platform security by hardening Kafka and related infrastructure for safer, more reliable data movement.",
    challenge:
      "The platform needed stronger security controls and better operational confidence around event streaming and secrets management.",
    impact:
      "Improved security posture for event infrastructure while supporting more reliable delivery across analytics and integration workloads.",
    stack: ["Kafka", "AWS MSK", "Secrets Manager", "Terraform", "AWS", "Python"],
    href: "https://www.linkedin.com/in/omotoso-afolabi/"
  }
];
