import PropTypes from 'prop-types';
import Features from '../../Features/Feature';



const PriceOption = ({option}) => {
    const {name , features, price} = option;
    return (
        <div className='flex flex-col bg-blue-300 hover:bg-blue-600 text-black rounded-xl p-4 text-center'>
            <h2><span className='text-5xl font-bold'>{price}</span>
            <span className='text-3xl'>/mon</span></h2>
            <h4 className='text-4xl mb-4'>
                {name}
            </h4>
            <div className='pl-5 flex-grow'>
            {
                features.map((feature, indx) => <Features key={indx} feature={feature}></Features>)
            }
            </div>
            <button className='rounded-lg   mt-12 py-4 font-bold bg-green-700 w-full hover:bg-green-800'>Bye Now</button>
        </div>
    );
};
PriceOption.propTypes ={
    option: PropTypes.object.isRequired,
}

export default PriceOption;