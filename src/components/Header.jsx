import PropTypes from "prop-types"

const Header = ({ title }) => {
  return <h2>{title}</h2>
}

Header.defaultProps = {
  title: "Expense Explorer",
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
