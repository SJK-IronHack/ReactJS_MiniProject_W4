import { useEffect } from "react";

const SortingRating = ({ items, setItems }) => {
  useEffect(() => {
    sortData();
  }, []);
  const sortData = () => {
    const dataSort = [...items];
    dataSort.sort((a, b) => a.price - b.price);
    setItems(dataSort);
  };

  return (
    <>
      {/* <ul>
        {items.map((item) => (
          <li
            key={item.id}
          >{`${item.name}---${item.price}---${item.review_scores_rating}`}</li>
        ))}
      </ul> */}
    </>
  );
};

export default SortingRating;
