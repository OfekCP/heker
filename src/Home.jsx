import React from 'react';
import './Home.css'; // Import CSS file for additional styling
import ComparisonSlider from './BeforeAfterSlider';
const Home = () => {
    return (
        <div className='home-container'>
            <div className='preluge'>
                <p>“ברוכים הבאים להקר - בונים חלומות”

                    .האתר שלנו הוא המקום המושלם למצוא את כל המידע שאתה צריך לגבי שיפוצים, תיקונים ושדרוגים. אנחנו מתמחים בשיפוצים בבתים, דירות, משרדים ועסקים. נשמח לעזור לך למצוא את הפתרון המושלם לצרכיך.</p>
            </div>
            <div className="video-container">
                <video autoPlay muted playsInline className='logo-video'>
                    <source src="./src/assets/photos/Solid Logo Reveal_free (1).mp4_1714254924321.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='random-works'>
                <span>דוגמאות לעבודות שבוצעו על ידינו:</span>
                <div className='item'>
                <ComparisonSlider before={'https://cdn.langeek.co/photo/26055/original/before'} after={'https://cdn.langeek.co/photo/26056/original/after'} />
                <ComparisonSlider before={'https://cdn-icons-png.flaticon.com/512/6702/6702465.png'} after={'https://upload.wikimedia.org/wikipedia/en/2/23/After_film_series_logo.png'} />
                </div>
            </div>
        </div>
    );
}

export default Home;
