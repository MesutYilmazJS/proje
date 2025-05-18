import Navbar from "../Header/Navbar";

const Header = () => {
  return (
    <>
      <div className="w-full h-[860px] bg-cover bg-center" style={{ backgroundImage: "url('https://fotolifeakademi.com/uploads/2020/04/manzara-fotografciligi-1-724x394.webp')" }}>
        <Navbar />
        <div className="mb-4 flex flex-col w-[614px] h-[212px] mt-[200px] ml-[100px] leading-[110px] text-[90px] tracking[0px] text-white font-extrabold">
          <span>Make in</span>
          <span>your journey.</span>
        </div>
        <div className="font-medium text-white w-[440px]  h-[92px] ml-[100px] leading-[36px] tracking[0px] text-[18px]">Explore the world with what you love beautiful natural beauty.</div>
        <div className="flex justify-between items-center bg-white w-[736px] h-[79px] ml-[100px] rounded-[72px] border">
          <div className="text-gray-400 mt-[20px] pl-[23px] w-[441px] h-[48px]">
            <span className="">Location</span>
            <span className="pl-32">Date</span>
            <span className="pl-32">People</span>
          </div>
          <div>
            <button className="w-[161px] h-[57px] rounded-[28px] bg-black text-white mr-2" >Explore now</button>
          </div>

        </div>
        <div className="ml-[100px] mt-5 text-white">
          <b className="opacity-80">Popular Place : </b>
          <span className="text-gray-400">Bali, Istanbul, Rome, Paris.</span>
        </div>
      </div>
    </>
  );
};
export default Header;