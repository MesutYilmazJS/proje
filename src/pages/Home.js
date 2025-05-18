import Header from "../components/Header/Header_home"
import logoGeri from "../img/home/geri.png";
import logoIleri from "../img/home/ileri.png";
import ImageCard from '../components/homeCart';
import img1 from "../img/home/img1.jpg";
import img2 from "../img/home/img2.jpg";
import img3 from "../img/home/img3.avif";
const imageList = [
  {
    image: img1,
    title: 'Bali, Indonesia.',
    description: 'Bali is a beautiful tourist spot and is visited by many travelers.',
  },
  {
    image: img2,
    title: 'New York, USA.',
    description: 'The city that never sleeps, full of iconic landmarks.',
  },
  {
    image: img3,
    title: 'Paris, France.',
    description: 'The city of love and lights, known for its art and culture.',
  },
];
const Home = () => {
  return (
    <>
      <Header />
      <div className="ml-[70px] mr-[70px] h-[755px] mt-10 my-10">
        <div className="h-[135px] w-[740px] ml-[386px] text-center leading-[70px] font-medium">
          <div className="text-[60px]">Explore new worlds with exotic natural scenery</div>
          <div className="w-[640px] text-[18px] text-[#878787] h-[26px] pl-[83px]">Explore the world with what you love beautiful natural beauty.</div>
        </div>
        <div className="flex justify-between mt-8">
          <div className="p-4 bg-white shadow-lg shadow-black-500/50 flex justify-center justify-items-center w-[70px] h-[66px] rounded-[10px] border border-[#E8E8E8]">
            <img src={logoGeri} alt="Logo" />
          </div>
          <div className="p-4 bg-white shadow-lg shadow-black-500/50 flex justify-center justify-items-center w-[70px] h-[66px] rounded-[10px] border border-[#E8E8E8]">
            <img src={logoIleri} alt="Logo" />
          </div>
        </div>
        <div className="flex justify-between mt-10 ">
        {imageList.map((item, index) => (
        <ImageCard 
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))} </div>

      </div>
    </>
  )
};
export default Home;