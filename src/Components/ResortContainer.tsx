import listings from "../data/data";
import ResortCard from "./ResortCard";

function ResortContainer() {
  return (
    <div className="resort-container">
      {listings.map((resort) => (
        <ResortCard
          key={resort.id}
          pic={resort.pic}
          country={resort.country}
          location={resort.location}
          rating={resort.rating}
          price={resort.price}
        />
      ))}
    </div>
  );
}

export default ResortContainer;
