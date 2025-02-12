import Image from "next/image";
import Markdown from "markdown-to-jsx";
import "../styles/um25-india-style.css";
/* eslint-disable @typescript-eslint/no-explicit-any */
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import { BLOCKS } from "@contentful/rich-text-types";
export const HeroSection = (props: any) => {
  // const RICHTEXT_OPTIONS_CHOOSETITLE = {
  //   renderNode: {
  //     [BLOCKS.HEADING_2]: (node: any, children: any) => {
  //       return (
  //         <h1 className="soul-heading  soul-heading--h1 title-rich-text-style">
  //           {children}
  //         </h1>
  //       );
  //     },
  //   },
  // };

  // function richTextRenderer(a: any) {
  //   // console.log(a);
  //   // console.log(a.content[0].content[0]);
  //   // console.log(a.content[0].content[0].value);
  //   // console.log(a.content[1].content[0].value);
  //   let totString = "";
  //   for (let i = 0; i < a.content.length; i++) {
  //     totString = totString + a.content[i].content[0].value;
  //   }
  //   return totString;
  // }

  return (
    <div
      className="hero-section-style soul-grid soul-grid--horizontal soul-space-stack-both-3-xl"
      data-sb-object-id={props.id}
      data-sb-field-path="chooseBackgroundImage"
      style={{
        backgroundImage: `url(${props.chooseBackgroundImage.src})`,
        backgroundSize: "auto",
        height: "50%",
        width: "100%",
      }}
    >
      <div className="soul-grid-item-6/12-span gif-container">
        {props.chooseGifImage && (
          <Image
            src={props.chooseGifImage.src}
            alt={props.chooseGifImage.alt}
            className="gif-image-custom-style"
            height={320}
            width={320}
            priority
            data-sb-field-path="chooseGifImage"
          />
        )}
      </div>
      <div className=" soul-grid-item-6/12-span">
        <div className="text-and-image-content-section">
          <div className="logo-image">
            {props.chooseLogoImage && (
              <Image
                src={props.chooseLogoImage.src}
                alt={props.chooseLogoImage.alt}
                className="logo-image-custom-style"
                height={160}
                width={160}
                priority
                data-sb-field-path="chooseLogoImage"
              />
            )}
          </div>
          <div className="">
            {props.chooseTitle && (
              <Markdown
                options={{ forceBlock: true }}
                className="title-text"
                data-sb-field-path="chooseTitle"
              >
                {props.chooseTitle}
              </Markdown>
            )}
            {/* {documentToReactComponents(
              props.chooseTitle,
              RICHTEXT_OPTIONS_CHOOSETITLE
            )} */}
          </div>
        </div>
        <div className="subtitle-content">
          <h2
            data-sb-field-path="chooseSubtitle"
            className="soul-heading soul-heading--h2"
          >
            {props.chooseSubtitle},<br></br>
          </h2>
          <h2
            data-sb-field-path="chooseSecondarySubtitle"
            className="soul-heading soul-heading--h2"
          >
            {props.chooseSecondarySubtitle.split(",")[0]},<br></br>
            {props.chooseSecondarySubtitle.split(",")[1]}
          </h2>
        </div>
      </div>
    </div>
  );
};
