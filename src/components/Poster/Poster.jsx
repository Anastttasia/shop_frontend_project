import './Poster.css';
import bannerImg from '../../image/banner_air_jordan.jpg'


const Poster = () => (
    <section className='sectionBanner'>
        <div className='imgContainerBanner'>
            <div className='titlePoster'>BIG SALE 20%</div>
            <div className='subtitlePoster'>The bestseller</div>
            {/* <button className='buttonPoster'>Shop now</button> */}
            <img src={bannerImg} className='image'></img>
        </div>
    </section>
);

export default Poster;