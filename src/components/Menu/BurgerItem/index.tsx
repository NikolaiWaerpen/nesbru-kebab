export default function MenuItem({ item, size, price, dinnerprice }) {
  return (
    <div>
      {dinnerprice ? (
        <div>
          <div className="flex justify-between text-gray-700 uppercase text-sm mt-3">
            <div>
              <span>{item}</span>
            </div>
            <span className="text-xs text-gray-600">{size}g</span>
            <div>
              <span>kr {price},-</span>
            </div>
          </div>

          <div className="flex justify-between text-gray-700 uppercase text-sm">
            <div>
              <span className="text-xs text-gray-600">middag</span>
            </div>
            <div>
              <span className="text-xs text-gray-600">kr {dinnerprice},-</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between text-gray-700 uppercase text-sm mt-3">
          <span>{item}</span>
          <span className="text-xs text-gray-600">{size}g</span>
          <span>kr {price},-</span>
        </div>
      )}
    </div>
  );
}
