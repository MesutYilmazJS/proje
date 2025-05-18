import React from 'react';

const ImageCard = ({ image, title, description }) => {
    return (<>
        <div className="group w-[444px] h-[361px] rounded-[10px] overflow-hidden shadow-lg">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover "
            />
            <div className="shadow-lg shadow-black-500/50 absolute top-370 h-[120px] w-[444px] bg-white text-black flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className='bottom-20  shadow-lg shadow-black-500/50 left-85 bg-white absolute  w-[79px] h-[76px] rounded-[50%] flex justify-center items-center text-[60px]'>“</div>
                <div className="text-left text-black px-4">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm mt-2">{description}</p>
                </div>
            </div>
        </div>

    </>
    );
};

export default ImageCard;
