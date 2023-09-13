import { useEffect, useState } from 'react';

import MarkAsRead from '../MarkAsRead/MarkAsRead';
import BookMark from '../BookMark/BookMark';
import Swal from 'sweetalert2';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookMarks, setBookMarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const handleAddToBookMark = (blog) => {
        if (bookMarks.some((b) => b.id === blog.id)) {
            Swal.fire(
                '',
                'You have already bookmarked this blog!',
                'info'
            );
            return;
        }
        const newBookMark = [...bookMarks, blog];
        setBookMarks(newBookMark);
    };

    const handleMarkAsRead = (time, id) => {
        const newReadingTime = readingTime + time;
        setReadingTime(newReadingTime);
        console.log(time);

        const remainingBookMarks = bookMarks.filter(bookmark => bookmark.id !== id);
        setBookMarks(remainingBookMarks);
    }

    return (
        <>
            <div className="md:grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                            handleAddToBookMark={handleAddToBookMark}
                            handleMarkAsRead={handleMarkAsRead}
                        ></Blog>)
                    }
                </div>
                <div className="">
                    <MarkAsRead readingTime={readingTime}></MarkAsRead>
                    <BookMark bookMark={bookMarks}></BookMark>
                </div>
            </div>
        </>
    );
};

export default Blogs;