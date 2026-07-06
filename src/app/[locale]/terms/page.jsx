import { getDict } from "@/lib/i18n";

export default async function TermsPage({ params }) {
  const { locale } = await params;
  const dict = await getDict(locale);

  const sections = Object.values(dict.terms.sections);

  return (
    <div className="container-tight py-32 max-w-4xl">
      <h1 className="text-5xl font-bold mb-4">{dict.terms.title}</h1>

      <p className="text-muted-foreground mb-10">
        {dict.terms.lastUpdated}: {dict.terms.date}
      </p>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-bold mb-3">{section.title}</h2>

            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
