export default function Hours() {
  return (
    <div>
      <h3 className="smallbadge">Våre åpningstider</h3>
      <div className="bg-gray-100 rounded-xl px-4 py-3 mt-6 shadow-sm">
        <div className="flex justify-center mt-6">
          <img
            src="/images/nesbrukebab/nesbrukebabblacktext.png"
            alt="logo picture/burger"
            className="max-w-xs max-h-24 lg:max-h-16 object-cover"
          />
        </div>
        <ul className="mt-6">
          <li className="flex justify-between">
            <span className="font-bold">Man - Fre:</span>
            <span className="text-black">11:00 – 24:00</span>
          </li>
          <li className="flex justify-between mt-2">
            <span className="font-bold">Lørdag:</span>
            <span className="text-black">12:00 – 24:00</span>
          </li>
          <li className="flex justify-between mt-2">
            <span className="font-bold">Søndag:</span>
            <span className="text-black">13:00 – 24:00</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
