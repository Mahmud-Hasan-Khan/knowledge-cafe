import React, { useEffect, useState } from 'react';

import ProgrammingCourse from '../ProgrammingCourse/ProgrammingCourse';
import MarkAsRead from '../MarkAsRead/MarkAsRead';
import BookMark from '../BookMark/BookMark';
import Blog from '../Blog/Blog';
import Swal from 'sweetalert2';

const Main = () => {
    const [programmingCourses, setProgrammingCourses] = useState([]);
    const [bookMark, setBookMark] = useState([]);
    const [markAsRead, setMarkAsRead] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProgrammingCourses(data))
    }, []);

    const handleAddToBookMark = (programmingCourse) => {
        if (bookMark.some((b) => b.id === programmingCourse.id)) {
            Swal.fire(
                '',
                'You have already bookmarked this blog!',
                'info'
            );
            return;
        }
        const newBookMark = [...bookMark, programmingCourse];
        setBookMark(newBookMark);
    };

    const handleMarkAsRead = (setProgrammingCourses) => {
        const newMarkAsRead = [...markAsRead, setProgrammingCourses];
        setMarkAsRead(newMarkAsRead);
    }

    return (
        <>
            <div class="md:grid grid-cols-3 gap-4">
                <div class="col-span-2">
                    {
                        programmingCourses.map(programmingCourse => <ProgrammingCourse
                            key={programmingCourse.id}
                            programmingCourse={programmingCourse}
                            handleAddToBookMark={handleAddToBookMark}
                            handleMarkAsRead={handleMarkAsRead}
                        ></ProgrammingCourse>)
                    }
                </div>
                <div class="">
                    <MarkAsRead markAsRead={markAsRead}></MarkAsRead>
                    <BookMark bookMark={bookMark}></BookMark>
                </div>
                <div class="col-span-3" >
                    <Blog></Blog>
                </div>
            </div>
        </>
    );
};

export default Main;