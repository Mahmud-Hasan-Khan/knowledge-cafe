import PropTypes from 'prop-types';
const MarkAsRead = ({ readingTime }) => {

    return (
        <div className="text-2xl text-center text-[#6047EC] font-semibold bg-[#6047EC1A] rounded-lg p-3">
            <h3 >Spent time on read : {readingTime} min </h3>
        </div>
    );
};

MarkAsRead.propTypes = {
    readingTime: PropTypes.number.isRequired,
}

export default MarkAsRead;