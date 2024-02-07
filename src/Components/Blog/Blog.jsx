import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog ,handleAddToBookmark,handleMarkedAsRead}) => {
    const { id,title, cover, hashtag, reading_time, author, author_img, posted_date } = blog;
    return (
        <div className='mb-8 space-y-4'>
            <img className="w-full mb-4 rounded-xl" src={cover} alt={`cover picture of the tittle ${title}`} />
            <div className="flex justify-between">
                <div className='flex mb-4'>
                    <img className="w-14" src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={()=>handleAddToBookmark(blog)} className="ml-2 text-red-400"><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h1 className="text-2xl">Tittle={title}</h1>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}><a href="">{hash}</a> </span>)
                }
            </p>
            <button className="text-purple-600 font-bold underline" onClick={()=>handleMarkedAsRead(id,reading_time)}>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkedAsRead:PropTypes.func
    
}

export default Blog;