/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPageFromSlug } from "@/utils/content";
import { notFound } from "next/navigation";
import { HeroSection } from "../../components/HeroSection";
const componentMap = {
  umHeroSectionWithGif: HeroSection,
};

export default async function ComposablePage({ params: any }) {
  const { slug } = await params;
  const pageSlug = slug.join("/");

  try {
    const page = await getPageFromSlug(`/${pageSlug}`);

    if (!page) {
      return notFound();
    }

    return (
      <div data-sb-object-id={page.id}>
        {(page.sections || []).map((section: { type: any }, idx: any) => {
          const Component = componentMap[section.type];
          if (!Component) {
            console.error(
              `Componente non trovato per il tipo: ${section.type}`
            );
            return null;
          }
          return <Component key={idx} {...section} />;
        })}
      </div>
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred - not primary page");
    }
    return notFound();
  }
}
