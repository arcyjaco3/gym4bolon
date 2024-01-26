import React from 'react';
import './styles/PostComments.css'; // Importuj plik CSS
interface CommentsListProps {

}

const CommentsList: React.FC<CommentsListProps> = () => {
    return (

        <div className="comments-list">
            <div className='single-comment'>
                <p>Tom Platz</p>
                <p>Hit Some legs</p>
            </div>
            <div className='single-comment'>
                <p>Tom Platz</p>
                <p>Hit Some legs</p>
            </div>
            <div className='single-comment'>
                <p>Tom Platz</p>
                <p>Hit Some legs</p>
            </div>
        </div>
    );
};

export default CommentsList;