import React from 'react';
import './Home.css'; // Import CSS file for additional styling
import ComparisonSlider from './BeforeAfterSlider';
import video from "./Solid Logo Reveal_free (1).mp4_1714254924321.mp4"
const Home = () => {
    return (
        <div className='home-container'>
            <div className='preluge'>
                <p>“ברוכים הבאים להקר - בונים חלומות”

                    .האתר שלנו הוא המקום המושלם למצוא את כל המידע שאתה צריך לגבי שיפוצים, תיקונים ושדרוגים. אנחנו מתמחים בשיפוצים בבתים, דירות, משרדים ועסקים. נשמח לעזור לך למצוא את הפתרון המושלם לצרכיך.</p>
            </div>
            <div className="video-container">
                <video autoPlay muted playsInline className='logo-video'>
                    <source src={video} />
                    Your browser does not support the video tag.
                </video>

            </div>
            <div className='random-works'>
                <span>דוגמאות לעבודות שבוצעו על ידינו:</span>
                <div className='item'>
                    <ComparisonSlider className='plate' before={'./images/תמונה של WhatsApp‏ 2024-05-03 בשעה 18.37.13_c1cccc43.jpg'} after={'./images/תמונה של WhatsApp‏ 2024-05-03 בשעה 18.37.13_daa70c84.jpg'} />
                    <ComparisonSlider before={'./images/תמונה של WhatsApp‏ 2024-05-03 בשעה 18.32.32_deb7b16a.jpg'} after={'./images/תמונה של WhatsApp‏ 2024-05-03 בשעה 17.31.42_fc59eb37.jpg'} />
                </div>
            </div>
        </div>
    );
}

export default Home;
