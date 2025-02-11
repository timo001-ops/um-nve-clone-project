/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPageFromSlug } from "@/utils/content";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/HeroSection";
const componentMap = {
  heroSection: HeroSection,
};

export default async function ComposablePage() {
  try {
    const page = await getPageFromSlug("/");
    if (!page) {
      return notFound();
    }
    // console.log("PAGE");
    // console.log(page);
    // console.log("SECTIONS");
    // console.log(page.sections);
    // console.log("TYPE");
    // console.log(page.sections[0].type);
    return (
      <>
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
      </>
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
    return notFound();
  }
}
