import React from 'react';
import './ReviewsSection.css'
function ReviewsSection(props) {
    return (

            <div className='reviews-section'>
                <h2>Ratings & Reviews</h2>
                <div className='ratings-overview'>
                    <div className='average-rating'>
                        <h1>0/5</h1>
                        <p>0 Ratings</p>
                    </div>
                    <div className='rating-breakdown'>
                        <div>
                            <span>5</span>
                            <span className='stars'>☆☆☆☆☆</span>
                            <span>(0)</span>
                        </div>
                        <div>
                            <span>4</span>
                            <span className='stars'>☆☆☆☆☆</span>
                            <span>(0)</span>
                        </div>
                        <div>
                            <span>3</span>
                            <span className='stars'>☆☆☆☆☆</span>
                            <span>(0)</span>
                        </div>
                        <div>
                            <span>2</span>
                            <span className='stars'>☆☆☆☆☆</span>
                            <span>(0)</span>
                        </div>
                        <div>
                            <span>1</span>
                            <span className='stars'>☆☆☆☆☆</span>
                            <span>(0)</span>
                        </div>
                    </div>
                </div>
                <div className='no-reviews'>
                    <p>This product has no reviews.</p>
                    <button className='write-review-button'>Let others know what you think and be the first to write a review.</button>
                </div>
            </div>


    );
}

export default ReviewsSection;