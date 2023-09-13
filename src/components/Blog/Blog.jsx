import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
    const { id, authorName, blogTitle, authorImage, readTime, publishDate, blogImage, hashtags } = blog;

    return (
        <div className="ml-12 mr-12 mt-10">
            <img className="w-full rounded-lg" src={blogImage} alt='' />
            <div className="flex justify-between items-center" >
                <div className="mt-8 flex gap-2 items-center">
                    <img className="rounded-full" src={authorImage} alt='' />
                    <div className="text-xl">
                        <h4 className="text-2xl font-semibold">{authorName}</h4>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <div className="text-xl">
                    <p>{readTime} min read <span className="ml-1 hover:text-green-600">< FontAwesomeIcon onClick={() => handleAddToBookMark(blog)} icon={faBookmark} /></span>
                    </p>
                </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold mb-2">{blogTitle}</h1>
            <h4 className="text-xl font-semibold text-[#11111199]">
                {
                    hashtags.map((hash, index) => <span key={index} >#{hash} </span>)
                }
            </h4>
            <h4 className="text-xl font-semibold hover:text-violet-600 hover:underline p-2" onClick={() => handleMarkAsRead(readTime, id)} >Mark as Read</h4>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;
