import Image from "next/image";
//import Markdown from 'markdown-to-jsx';
import "../styles/um25-india-style.css";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export const HeroSection = (props: any) => {
  return (
    <div
      className="hero-section-style soul-grid soul-grid--horizontal soul-space-stack-both-3-xl"
      data-sb-object-id={props.id}
      style={{
        backgroundImage: `url(${props.chooseBackground.src})`,
        backgroundSize: "auto",
        height: "50%",
        width: "100%",
      }}
    >
      <div className="soul-grid-item-6/12-span gif-container">
        {props.chooseGifMedia && (
          <Image
            src={props.chooseGifMedia.src}
            alt={props.chooseGifMedia.alt}
            className="gif-image-custom-style"
            height={320}
            width={320}
            priority
            data-sb-field-path="chooseGifMedia"
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
          <div className="title-section">
              {documentToReactComponents(props.chooseTitle)}
          </div>
        </div>
        <div className="subtitle-content">
          <h2 className="soul-heading soul-heading--h2">
            {props.chooseSecondarySubtitle.split(",")[0]},<br></br>
            {props.chooseSecondarySubtitle.split(",")[1]}
          </h2>
        </div>
      </div>
    </div>
  );
};
