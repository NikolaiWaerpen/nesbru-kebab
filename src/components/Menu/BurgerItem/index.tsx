export default function MenuItem({ item, size, price }) {
  return (
    <div className="flex justify-between text-gray-600 uppercase text-sm">
      <span>{item}</span>
      <span>{size}g</span>
      <span>kr {price},-</span>
    </div>
  );
}
