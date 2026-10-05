interface ResortCardProps {
  pic: string;
  country: string;
  location: string;
  rating: number;
  price: number;
}

function ResortCard ({
  pic,
  country,
  location,
  rating,
  price,

}: ResortCardProps ) {
  return(
    <div className="resort-card">
      <img src={pic} alt={location}/>
      <h2>{country}</h2>
      <p>{location}</p>

    <p className={rating > 4.0 ? "green" :"red"}>
      {rating} ★
    </p>

    <p>${price} per night</p>
    </div>
  );
}
export default ResortCard;