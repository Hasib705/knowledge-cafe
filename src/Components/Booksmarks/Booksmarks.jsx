import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Booksmarks = ({ bookmarks, readingTime }) => {
    return (
        <>

            <div className="md:w-1/3 bg-slate-300 ml-5 mt-10 rounded-xl">
                <div className="bg-red-400 rounded-xl p-2 m-2 text-center">
                    <h3 className="text-2xl">Reading Time:{readingTime}</h3>
                </div>
                <h2 className="text-center bg-red-400 w-1/2 mx-auto  p-2 m-2 rounded-xl">Bookmarked Blogs:{bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark
                        key={idx} bookmark={bookmark}>
                    </Bookmark>)
                }
            </div>
        </>
    );
};
Booksmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Booksmarks;