export default function GrillItem({ name, description, price }) {
  return (
    <div className="mt-1.5">
      <div className="flex justify-between text-gray-700 uppercase text-sm">
        <span>{name}</span>
        <span>kr {price},-</span>
      </div>
    </div>
  );
}
