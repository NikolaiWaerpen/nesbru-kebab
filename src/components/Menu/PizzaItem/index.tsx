export default function PizzaItem({ name, description, price }) {
  return (
    <div className="menuitemspacing">
      <div className="flex justify-between menutextcolor1 uppercase text-sm">
        <span>{name}</span>
        <span>kr {price},-</span>
      </div>
      <div>
        <span className="text-xs menutextcolor2 uppercase">{description}</span>
      </div>
    </div>
  );
}
