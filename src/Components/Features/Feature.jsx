import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";


const Features = ({feature}) => {
    return (
        <div>
            <p className='flex items-center '><FaCheckCircle className='text-green-600 mr-2'></FaCheckCircle>{feature}</p>
        </div>
    );
};


Features.propTypes ={
    feature: PropTypes.string.isRequired,
}
export default Features;