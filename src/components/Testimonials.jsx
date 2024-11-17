import React, { useEffect, useState } from 'react';
import './testimonials.css';
import yellowstar from '../assets/testimonials/yellow-star.svg';
import hollowstar from '../assets/testimonials/hollow-star.svg';
import quotes from '../assets/Testimonials/quotes.svg';

function Testimonials() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch testimonials');
                }
                return response.json();
            })
            .then((data) => {
                setReviews(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="testimonials-background">
            <div className="testimonials">
                <div className="reviews">
                <h1 className="client-review">Clients are Loving Our App</h1>
                    {reviews.map((review, index) => (
                        <div key={review.id} className="review-card">
                            <img src={quotes} alt="quotes" className="quotes"></img>
                            <div className="review-stars">
                                {[...Array(5)].map((_, i) => (
                                    <img
                                        key={i}
                                        src={i < review.starRating ? yellowstar : hollowstar}
                                        className={i < review.starRating ? 'yellowstar' : 'hollowstar'}
                                        alt={i < review.starRating ? 'yellow rating star' : 'hollow rating star'}
                                    />
                                ))}
                            </div>
                            <p className="review-text">{review.comment}</p>
                            <img src={review.avatarUrl} className="client-avatar" alt={`${review.author} avatar`} />
                            <p className="name">{review.author}</p>
                            <p className="title">{review.jobRole}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
