import PropTypes from 'prop-types'; // ES6

const Course = ({course}) => {
    console.log(course)

    const {name , image , price , details , credit_hour} = course;

    return (
        <div className="bg-gray-100 my-6 w-72 rounded-lg p-2">
            <img src={image} alt="" className="w-72" />
            <h3 className="text-lg font-semibold my-3">{name}</h3>
            <p className="text-xs">{details}</p>
            <div className="flex justify-around text-sm my-3">
              <p>Price : {price}</p>
              <p>Credit : {credit_hour}</p>
            </div>  
            <div className="flex justify-center">
                <button className="bg-blue-500 w-11/12 text-center text-white rounded-lg py-1">Select</button>
            </div>         
        </div>
    );
};

Course.propTypes={
course: PropTypes.object.isRequired
}
export default Course;