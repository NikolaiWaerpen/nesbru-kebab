import { useState, useEffect } from "react";

export default function GrillItem({ name, price }) {
  const [newLine, setNewLine] = useState(false);
  const newLineTriggers = [
    "kebabmiddag liten",
    "halv kylling middag",
    "pommes frites liten",
    "mineralvann 0,5l",
  ];
  useEffect(() => {
    if (newLineTriggers.indexOf(name) !== -1) {
      console.log(name, "new line fam");
      setNewLine(true);
    }
  }, []);

  return (
    <div className={`${newLine ? "mt-6" : "mt-1.5"}`}>
      <div className="flex justify-between text-gray-700 uppercase text-sm">
        <span>{name}</span>
        <span>kr {price},-</span>
      </div>
    </div>
  );
}
