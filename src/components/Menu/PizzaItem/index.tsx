export default function PizzaItem({ name, description, price }) {
  return (
    <div className="mt-1.5">
      <div className="flex justify-between text-gray-700 uppercase text-sm">
        <span>{name}</span>
        <span>kr {price},-</span>
      </div>
      <div>
        <span className="text-xs text-gray-600">{description}</span>
      </div>
    </div>
  );
}
