import PropTypes from 'prop-types';

const Items = ({items}) => {
    const {name , id} = items;
    
    return (
        <div>
            <p>{id}. {name} </p>                         
        </div>
    );
};

Items.propTypes= {
    items: PropTypes.object
}

export default Items;