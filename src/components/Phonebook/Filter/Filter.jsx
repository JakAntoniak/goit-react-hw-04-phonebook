import css from './Style.module.css';
import PropTypes from 'prop-types';

const Filter = ({ handleFilterUpdate }) => {
  return (
    <div className={css.filter}>
      <label>Find contacts by name</label>
      <input
        className={css['filter-input']}
        id="filter-input"
        type="text"
        name="name"
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Filter"
        onChange={handleFilterUpdate}
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilterUpdate: PropTypes.func,
};

export default Filter;
