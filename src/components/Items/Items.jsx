import PropTypes from 'prop-types';

const Items = ({items}) => {
    const {name} = items;
    
    return (
        <div className=''>
            <p>{name}</p>                       
        </div>
    );
};

Items.propTypes= {
    items: PropTypes.object
}

export default Items;