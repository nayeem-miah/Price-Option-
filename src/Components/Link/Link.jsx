import PropTypes from 'prop-types';
const Link = ({route}) => {
    console.log(typeof route)
  return (
    <li className="mr-10 hover:bg-yellow-400 rounded-xl p-2 ">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Link.propTypes={
    route: PropTypes.object.isRequired,
}

export default Link;
