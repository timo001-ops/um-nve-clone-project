import Image from "next/image";
import "../styles/soul-styles.css";
import "../styles/um25-style.css";
import logoum25 from "../../public/assets/images/UM25_IN.png";
import detailimg from "../../public/assets/images/ESTECO_UM25_logo-bianco-homepage-both-um.png";
//Home page um25.esteco.com
export default function Home() {
  return (
    <div id="um25-container" className="soul-space-inset-3-xl">
      <div className="soul-grid soul-grid--vertical soul-grid--fill-height">
        <div className="soul-grid-item-4/12-span um25-logo-style">
          <Image
            src={logoum25}
            alt={""}
            className="logo-um25-image-properties"
          ></Image>
        </div>
        <div className="soul-grid-item-8/12-span both-um25-container">
          <div className="soul-grid soul-grid--horizontal">
            <div className="soul-grid-item-6/12-span um25-india-section">
              <div className="">
                <Image
                  src={detailimg}
                  alt={""}
                  className="detail-um25-image-properties"
                ></Image>
              </div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                voluptatibus tenetur aut iusto beatae consectetur, dolores
                maiores, eaque delectus ipsa totam pariatur magnam excepturi.
                Eum quaerat dolorem esse sint laboriosam?
              </div>
            </div>
            <div className="soul-grid-item-6/12-span">
              <div className="">
                <Image
                  src={detailimg}
                  alt={""}
                  className="detail-um25-image-properties"
                ></Image>
              </div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                voluptatibus tenetur aut iusto beatae consectetur, dolores
                maiores, eaque delectus ipsa totam pariatur magnam excepturi.
                Eum quaerat dolorem esse sint laboriosam?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
