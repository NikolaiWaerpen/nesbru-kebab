import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="bg-offblack text-grayonblack px-6">
      <div>
        <h3 className="invertedsmallbadge mt-6">Recognition</h3>
        <p className="mt-6">
          Det er mye hardt arbeid og engasjement for å oppfylle dine høyeste
          forventninger og til og med overgå dem. Vi er stolte og takknemlige
          for positive tilbakemeldinger. Vi vil gjøre vårt beste for å fortsette
          det gode arbeidet og være innovative, friske og underholdende som vi
          alltid har vært. Takk alle for støtten og for at du er gjestene våre.
          Nesbru Kebab er her for deg!
        </p>
      </div>
      <div className="flex flex-col justify-center my-6">
        <img
          src="/images/redandgold.png"
          alt="review"
          className="w-full h-40 object-contain"
        />
      </div>
      <div className="flex justify-center">
        {" "}
        {/* TODO: make this thin https://fontawesome.com/icons/copyright?style=regular */}
        <FontAwesomeIcon icon={faCopyright} className="mt-1 mr-1" />
        <span> 2021 Nesbru Kebab. All rights reserved.</span>
      </div>
      <div className="flex justify-center py-6">
        <span>Developed by&nbsp;</span>
        <a>Nikolai Wærpen</a>
      </div>
    </div>
  );
}
