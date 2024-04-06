import moment from 'moment';

const Header = () => {
    return (
        <div className="mt-10">
            <div className='flex flex-col space-y-4 items-center'>
                <img src='https://i.ibb.co/sKd7458/logo.png' alt="" />
                <p className="text-[#706F6F] mt-2">Journalism Without Fear or Favour</p>
                <p className='font-medium text-[20]'>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
          
        </div>
    );
};

export default Header;