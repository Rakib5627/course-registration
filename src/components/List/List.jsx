import PropTypes from 'prop-types';
import Items from '../Items/Items';


const List = ({list , creditHr , remaining}) => {


    // console.log(creditHr , remaining);

    return (
        <div className="bg-gray-50 w-64 h-80 rounded-lg p-2">
            <p className='mb-2 text-blue-500 font-semibold'>Credit Hour Remaining {remaining} hr</p> <hr />
            <h3 className='text-lg font-semibold my-3'>Course Name</h3>
            <div className='h-48'>

            
                {
                    list.map(items => <Items
                    key={items.id}
                    items ={items}
                    
                    ></Items>)
                }

                
            </div>
            <hr />
            <p className='mt-3 font-medium'>Total Credit Hour {creditHr} hr</p>

        </div>
    );
};

List.propTypes= {
    list: PropTypes.array,
    creditHr :PropTypes.number,
    remaining : PropTypes.number
}

export default List;