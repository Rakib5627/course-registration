import PropTypes from 'prop-types';
import priceLogo from '../../assets/dollar-sign 1.svg';
import creditLogo from '../../assets/Frame.svg';

const Course = ({course , handleAddToList}) => {
    // console.log(course)

    const {name , image , price , details , credit_hour ,id} = course;

    return (
        <div className="bg-gray-100 w-64 rounded-lg p-2">
            <img src={image} alt="" className="w-64" />
            <h3 className="text-lg font-semibold my-3">{name}</h3>
            <p className="text-xs">{details}</p>
            <div className="flex justify-around text-sm my-3">
              <img src={priceLogo} alt="price logo" />
              <p>Price : {price}</p>
              <img src={creditLogo} alt="credit logo" />
              <p>Credit : {credit_hour} hr</p>
            </div>  
            <div className="flex justify-center">
                <button onClick={() => handleAddToList(course , credit_hour , id)} className="bg-blue-500 w-11/12 text-center text-white rounded-lg py-1 hover:bg-blue-600">Select</button>
            </div>         
        </div>
    );
};

Course.propTypes={
course: PropTypes.object.isRequired,
handleAddToList :PropTypes.func
}
export default Course;