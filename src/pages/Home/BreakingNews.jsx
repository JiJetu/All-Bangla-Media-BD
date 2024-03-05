import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-gray-900 hover:bg-gray-900 text-white">ব্রেকিং নিউজ</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">বেইলি রোডে আগুন ‘রেস্তোরাঁর অনুমতি কারা দিল, তাঁদের গ্রেপ্তার করুন.....</Link>
                <Link className="mr-12" to="/">বাংলাদেশ হেরেছে, কিন্তু মনে থাকবে জাকেরের এই ইনিংস.....</Link>
                <Link className="mr-12" to="/">গরিব মানুষ বরই খাবে আর তুমি আঙুর-খেজুর খাবা, তা হবে না: ইনু.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;