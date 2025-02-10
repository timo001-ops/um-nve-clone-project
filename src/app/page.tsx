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
              <div className="um25-india-content">
                <div className="">
                  <Image
                    src={detailimg}
                    alt={""}
                    className="detail-um25-image-properties"
                  ></Image>
                </div>
                <div className="">
                  <h3 className="soul-heading soul-heading--h3 soul-font-size-3-xl um25-india-title">
                    ESTECO <br></br> USERS&apos; MEETING <br></br>
                    <b>
                      INDIA <br></br>2025
                    </b>
                  </h3>
                  <div className="um25-india-subtitle">
                    <span>
                      <b>
                        Sheraton Grand Pune Bund,
                        <br></br> Grand Hotel,
                      </b>
                      <br></br> Pune, India
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button className="soul-button soul-button--default soul-button--fill soul-button--comfortable um25-india-button">
                  Visit website
                </button>
              </div>
            </div>
            <div className="soul-grid-item-6/12-span um25-NA-section">
              <div className="um25-NA-content">
                <div className="">
                  <Image
                    src={detailimg}
                    alt={""}
                    className="detail-um25-image-properties"
                  ></Image>
                </div>
                <div className="">
                  <h3 className="soul-heading soul-heading--h3 soul-font-size-3-xl um25-NA-title">
                    ESTECO <br></br> USERS&apos; MEETING <br></br>
                    <b>NORTH AMERICA 2025</b>
                  </h3>
                  <div className="um25-NA-subtitle">
                    <span>
                      <b>
                        Sheraton Grand Pune Bund,
                        <br></br> Grand Hotel,
                      </b>
                      <br></br> Pune, India
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button className="soul-button soul-button--default soul-button--fill soul-button--comfortable um25-NA-button">
                  Visit website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className=" um25-india-section">
//                 <div className="">
//                   <Image
//                     src={detailimg}
//                     alt={""}
//                     className="detail-um25-image-properties"
//                   ></Image>
//                 </div>
//                 <div className="">
//                   <h3 className="soul-heading soul-heading--h3 soul-font-size-3-xl um25-india-title">
//                     ESTECO <br></br> USERS&apos; MEETING <br></br>
//                     <b>INDIA 2025</b>
//                   </h3>
//                   <div className="um25-india-subtitle">
//                     <span>
//                       <b>
//                         Sheraton Grand Pune Bund,
//                         <br></br> Grand Hotel,
//                       </b>
//                       <br></br> Pune, India
//                     </span>
//                     <br></br>
//                     <span>
//                       <b>March 5th 2025</b>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <button className="soul-button soul-button--default soul-button--fill soul-button--comfortable um25-india-button">
//                 Visit website
//               </button>
