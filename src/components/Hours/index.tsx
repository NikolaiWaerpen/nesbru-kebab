export default function Hours() {
  return (
    <div>
      <h3 className="smallbadge">Våre åpningstider</h3>
      <ul className="itemcontent">
        <li>
          <h2 className="font-bold itemcontent">Hverdager</h2>
          <span className="text-gray-700 menuitemspacing block">
            11:00 – 00:00
          </span>
        </li>
        <li>
          <h2 className="font-bold itemcontent">Lørdag</h2>
          <span className="text-gray-700 menuitemspacing block">
            12:00 – 00:00
          </span>
        </li>
        <li>
          <h2 className="font-bold itemcontent">Søndag</h2>
          <span className="text-gray-700 menuitemspacing block">
            13:00 – 00:00
          </span>
        </li>
      </ul>
    </div>
  );
}
