export default function MenuItem({ item, size, price, dinnerprice }) {
  return (
    <div>
      {dinnerprice ? (
        <div>
          <div className="flex justify-between menutextcolor1 uppercase text-sm menuitemspacing">
            <div>
              <span>{item}</span>
            </div>
            <span className="text-xs menutextcolor2">{size}g</span>
            <div>
              <span>kr {price},-</span>
            </div>
          </div>

          <div className="flex justify-between menutextcolor1 uppercase text-sm">
            <div>
              <span className="text-xs menutextcolor2">middag</span>
            </div>
            <div>
              <span className="text-xs menutextcolor2">kr {dinnerprice},-</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between menutextcolor1 uppercase text-sm menuitemspacing">
          <span>{item}</span>
          <span className="text-xs menutextcolor2">{size}g</span>
          <span>kr {price},-</span>
        </div>
      )}
    </div>
  );
}
