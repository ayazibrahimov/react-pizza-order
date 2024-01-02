import PropTypes from 'prop-types';
import { formatCurrency } from "../../utils/helpers";




function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}



MenuItem.propTypes = {
  pizza: PropTypes.any, // Adjust the type accordingly
  // otherProps: PropTypes.any, // Adjust other prop types as needed
};

export default MenuItem;
