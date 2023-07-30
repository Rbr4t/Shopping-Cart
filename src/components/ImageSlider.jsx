import { useState } from "react";
import styles from '../styles/Slider.module.css'
import '../styles/Slider.css'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    
    const nextSlide = () => {
        setCurrent(current===slides.img.length-1 ? 0 : current+1)
    }

    const prevSlide = () => {
        setCurrent(current===0 ? slides.img.length-1 : current-1)
    }

    if (!Array.isArray(slides.img) || slides.img.length <= 0) {
        return null;
    }

    return (
        <div className={styles.slider}>

                <button onClick={prevSlide} className={styles.arrow}>←</button>
                {slides.img.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <img className={styles.image} height={350} src={slide} alt={`img ${slides.alt}`}></img>
                            )}
                            
                        </div> 
                    )
                })}
                <button onClick={nextSlide} className={styles.arrow}>→</button>

        </div>
    )
}

export default ImageSlider;