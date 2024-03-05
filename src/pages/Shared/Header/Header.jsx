import logo from '../../../../image/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='h-[150px] w-[250px] mx-auto' src={logo} alt="" />
            <p>Reporting With Integrity and Courage</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;