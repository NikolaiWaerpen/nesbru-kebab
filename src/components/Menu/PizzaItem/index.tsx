export default function PizzaItem({ name, description, price }) {
  return (
    <div className="menuitemspacing">
      <div className="flex justify-between text-gray-700 uppercase text-sm">
        <span>{name}</span>
        <span>kr {price},-</span>
      </div>
      <div>
        <span className="text-xs text-gray-600 uppercase">{description}</span>
      </div>
    </div>
  );
}
