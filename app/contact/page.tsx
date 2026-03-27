import { ContactForm } from "@/components/contact-form";
import { ContactLinks } from "@/components/contact-links";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Contact",
  description: "Contact Afolabi Omotoso."
};

export default function ContactPage() {
  return (
    <section className="section-shell pb-24 pt-12">
      <SectionHeading
        eyebrow="Contact"
        title="Get In Touch"
        description="Ready to discuss your DevOps and infrastructure needs? Let&apos;s connect!"
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-panel rounded-[1.75rem] px-6 py-8">
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
            Let&apos;s Discuss Your Project
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Whether you need help with infrastructure scaling, deployment
            automation, or system reliability improvements, I&apos;m here to
            help your organization succeed.
          </p>
          <ContactLinks className="mt-6" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
