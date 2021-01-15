export default function About() {
  return (
    <div>
      <h3 className="smallbadge">Kebabkongen</h3>
      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:ml-12  lg:flex lg:flex-col lg:justify-center">
          <h1 className="font-bold text-2xl lg:text-5xl itemcontentspacing text-black">
            Kebabkongen på Nesbru
          </h1>
          <p className="text-gray-400 mt-6">
            Alle elsker historien om en som begynte med to tomme hender, og
            jobbet seg opp til kongestatus i sin bransje
          </p>
          <img
            src="/images/nesbrukebabfolk.jpg"
            alt="logo picture/burger"
            className="w-full lg:h-screen75 object-cover rounded-xl mt-6"
            // className="w-screen max-h-screen lg:h-screen overflow-hidden object-cover rounded-3xl mt-5"
          />
          <div className="mt-6">
            <q className="text-offblack">
              De første årene jobbet jeg så å si døgnet rundt og kunne knapt ta
              ut penger av virksomheten. Jeg hadde tatt opp lån av familien og
              satset alt pluss litt til på dette. Jeg vil ikke si at jeg sov
              dårlig om natta, men den eneste grunnen til det er vel at jeg
              jobbet hele døgnet
            </q>
          </div>
          <div className="flex justify-end">
            <span className="text-gray-500">- Mohammed Afzaal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
