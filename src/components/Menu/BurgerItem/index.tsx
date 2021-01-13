export default function MenuItem({ item, size, price, dinnerprice }) {
  return (
    <div>
      {dinnerprice ? (
        <div>
          <div className="flex justify-between menutextcolor1 uppercase text-sm menuitemspacing">
            <div>
              <span>{item}</span>
            </div>
            {size ? (
              <span className="text-xs menutextcolor2">{size}g</span>
            ) : null}
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
          {size ? (
            <span className="text-xs menutextcolor2">{size}g</span>
          ) : null}
          <span>kr {price},-</span>
        </div>
      )}
    </div>
  );
}
