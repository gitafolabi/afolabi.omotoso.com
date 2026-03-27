import { profile } from "@/data/profile";

type ContactLinksProps = {
  className?: string;
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 6h16v12H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m5 7 7 6 7-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M7.2 8.8v8M7.2 5.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM11.2 16.8v-8h3v1.1c.5-.8 1.5-1.4 2.8-1.4 2.5 0 3 1.7 3 4v4.3h-3v-3.8c0-1.1-.1-2.1-1.4-2.1s-1.4 1-1.4 2v3.9h-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 20s6-4.7 6-10a6 6 0 1 0-12 0c0 5.3 6 10 6 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.6c-2.2.5-2.7-.9-2.7-.9-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4a3.2 3.2 0 0 1 .8-2.2c-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.3.8a8 8 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8.5 1.2.2 2 .1 2.2a3.2 3.2 0 0 1 .8 2.2c0 3.1-1.9 3.8-3.7 4 .3.2.6.8.6 1.5v2.2c0 .2.1.5.5.4A8.5 8.5 0 0 0 12 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitLabIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="m12 19.3 3.5-10.7h-7L12 19.3Zm0 0-7.3-5.3 2-6.1h1.8L12 19.3Zm0 0 7.3-5.3-2-6.1h-1.8L12 19.3ZM6.7 7.9l1.1-3.4c.1-.3.5-.3.6 0l1.1 3.4H6.7Zm7.8 0 1.1-3.4c.1-.3.5-.3.6 0l1.1 3.4h-2.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactLinks({ className = "" }: ContactLinksProps) {
  return (
    <div className={`flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 ${className}`}>
      <a
        href={`mailto:${profile.email}`}
        aria-label="Send email"
        title="Send email"
        className="rounded-full border border-slate-200 p-3 hover:border-ember hover:text-ember dark:border-slate-700 dark:hover:border-amber-300 dark:hover:text-amber-300"
      >
        <MailIcon />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="Open LinkedIn"
        title="Open LinkedIn"
        className="rounded-full border border-slate-200 p-3 hover:border-ember hover:text-ember dark:border-slate-700 dark:hover:border-amber-300 dark:hover:text-amber-300"
      >
        <LinkedInIcon />
      </a>
      {profile.githubProfiles.map((url, index) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open GitHub profile ${index + 1}`}
          title={`Open GitHub profile ${index + 1}`}
          className="rounded-full border border-slate-200 p-3 hover:border-ember hover:text-ember dark:border-slate-700 dark:hover:border-amber-300 dark:hover:text-amber-300"
        >
          <GitHubIcon />
        </a>
      ))}
      <a
        href={profile.gitlab}
        target="_blank"
        rel="noreferrer"
        aria-label="Open GitLab"
        title="Open GitLab"
        className="rounded-full border border-slate-200 p-3 hover:border-ember hover:text-ember dark:border-slate-700 dark:hover:border-amber-300 dark:hover:text-amber-300"
      >
        <GitLabIcon />
      </a>
      <div className="flex items-center gap-2">
        <LocationIcon />
        <span>{profile.location}</span>
      </div>
    </div>
  );
}
