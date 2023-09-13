import React from 'react';

const MarkAsRead = ({ markAsRead }) => {
    let total = 0;
    for (const bolg of markAsRead) {
        total = total + parseInt(bolg.readTime);
    }

    return (
        <div class="text-2xl text-center text-[#6047EC] font-semibold bg-[#6047EC1A] rounded-lg mt-10 mr-10 p-3">
            <h3 >Spent time on read : {total} min </h3>
        </div>
    );
};
export default MarkAsRead;