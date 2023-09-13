import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const ProgrammingCourse = (props) => {
    const { id, authorName, blogTitle, authorImage, readTime, publishDate, blogImage } = props.programmingCourse;

    const handleAddToBookMark = props.handleAddToBookMark;
    const handleMarkAsRead = props.handleMarkAsRead;

    return (
        <div class="ml-12 mr-12 mt-10">
            <img class="w-full rounded-lg" src={blogImage} alt='' />
            <div class="flex justify-between items-center" >
                <div class="mt-8 flex gap-2 items-center">
                    <img class="rounded-full" src={authorImage} alt='' />
                    <div class="text-xl">
                        <h4 class="text-2xl font-semibold">{authorName}</h4>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <div class="text-xl">
                    <p>{readTime} min read <span class="ml-1 hover:text-green-600">< FontAwesomeIcon onClick={() => handleAddToBookMark(props.programmingCourse)} icon={faBookmark} /></span>
                    </p>
                </div>
            </div>
            <h1 class="text-5xl font-semibold mb-2">{blogTitle}</h1>
            <h4 class="text-xl font-semibold text-[#11111199]"> #beginners #programming</h4>
            <h4 class="text-xl font-semibold hover:text-violet-600 hover:underline p-2" onClick={() => handleMarkAsRead(props.programmingCourse)} >Mark as Read</h4>
        </div>
    );
};

export default ProgrammingCourse;