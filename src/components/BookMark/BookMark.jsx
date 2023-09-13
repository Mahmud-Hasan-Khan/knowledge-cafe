import React from 'react';

const BookMark = ({ bookMark }) => {

    return (
        <div class="text-2xl text-center font-semibold bg-[#6047EC1A] rounded-lg mt-10 mr-10 p-3 ">
            <h3 style={{ color: '#111111' }}>Bookmarked Blogs: {bookMark.length}</h3>
            {
                bookMark.map((title, index) => (
                    <h4 class="bg-[#FFFFFF] text-xl text-center rounded-lg p-1 m-2" key={index}>{title.blogTitle}</h4>
                ))
            }
        </div>
    );
};

export default BookMark;