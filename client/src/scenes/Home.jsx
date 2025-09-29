import heroimg from "../assets/hero-home.jpg";
import { IoEarthOutline } from "react-icons/io5";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import images1 from "../assets/care.jpg";
import images2 from "../assets/model.jpg";
import images3 from "../assets/leaf.jpg";
import images4 from "../assets/img.jpg";
import { FaRecycle } from "react-icons/fa";
import images5 from "../assets/drop.jpg";
import images6 from "../assets/leaf2.jpg";
import { FaEyeDropper } from "react-icons/fa6";
import { LuBadgeCheck, LuLeaf } from "react-icons/lu";
import { PiHandHeartLight } from "react-icons/pi";

import image4 from "../assets/mois.jpg";
const Home = () => {
  return (
    <>
      <section className="px-4 md:px-8 flex flex-col md:flex-row pt-5">
        <div className="flex-[0.8] rounded-xl overflow-hidden">
          <img src={heroimg} className="h-[80vh] w-full object-cover" alt="" />
        </div>
        <div className="flex flex-[1] mt-5 md:mt-0 items-center justify-center flex-col">
          <sup className="text-rose-300 text-lg">NEW IN STORE</sup>
          <h1 className="text-center text-5xl md:text-9xl">
            SKINCARE COLLECTION
          </h1>
          <button className="px-4 py-2 bg-rose-300 rounded-lg transition hover:scale-110">
            <a href="shop" className="hover:text-pink-600">
              Shop Now
            </a>
          </button>
        </div>
      </section>
      <section>
        <div className="bg-rose-300 h-36 mb-10 mt-10 flex items-center justify-between text-nowrap text-xl font-medium gap-3">
          <div className="flex animate-marquee items-center justify-between text-2xl ">
            {new Array(16).fill(null).map(() => {
              return <span>NEW ARRIVALS&nbsp;&nbsp;&nbsp;&nbsp;</span>;
            })}
          </div>
          {""}
        </div>
        <div className="flex min-h-[65vh] w-full overflow-x-auto mb-5 gap-3 px-4 md:px-8">
          {new Array(4).fill(null).map(() => (
            <div className="flex-1 min-w-[300px] rounded-xl">
              <img
                src={image4}
                alt=""
                className="h-[65vh] w-80 items-center rounded-xl object-cover"
              />
              <p className="text-center text-xl">Sunscreen</p>
              <p className="text-center">$25.00</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row py-8 w-full min-h-[100vh] bg-rose-100 items-center justify-between px-8 flex-1 gap-5 text-center">
          <div className="flex flex-col items-center gap-3">
            <IoEarthOutline className="opacity-50" size={100} />
            <h2 className="text-3xl">Free Shipping</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              accusamus animi! Ad doloremque temporibus hic ducimus aper
            </p>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <FaHandsHoldingCircle className="opacity-50" size={100} />
            <h2 className="text-3xl">Eco Friendly</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              veniam nisi magni ducimus iste ab saepe!
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <IoIosChatbubbles className="opacity-50" size={100} />
            <h2 className="text-3xl">Best Customers Services</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              blanditiis hic, cum quia asperiores molestias fuga opti
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaShippingFast className="opacity-50" size={100} />
            <h2 className="text-3xl">Free Shipping</h2>
            <p>
              Deivered to your doorstep with no extra charging amount cost
              worldwied
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex w-full min-h-[40vh] flex-col items-center pt-20 ">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row-reverse md:flex-row items-center">
              <p className="text-3xl md:text-6xl">Refresh your skin,</p>
              <img
                src={images1}
                alt=""
                className="md:h-[10vh] w-12 rounded-2xl rotate-6 me-5"
              />
            </div>
            <div className="flex items-center">
              <p className="text-3xl md:text-6xl">Love yourself</p>
              <img
                src={images2}
                alt=""
                className="md:h-[10vh] w-12 rounded-2xl rotate-6 ml-5"
              />
            </div>
          </div>

          <div className="flex items-center">
            <img
              src={images3}
              alt=""
              className="md:h-[10vh] w-15 rounded-2xl gap-2 mr-5"
            />
            <p className="text-3xl md:text-6xl"> renew your glow</p>
          </div>
          <p></p>
        </div>
        <div className="flex  mb-10 px-35 gap-20 ">
          <div>
            <h2 className="text-6xl">Why Your Skin</h2>
            <p className="text-4xl">Deserved the best</p>
            <div className="relative">
              <img
                src={images4}
                alt=""
                className="w-150 rounded-2xl h-[117vh] object-cover"
              />
              <div className="absolute bottom-5 left-[50%] transform-[translateX(-50%)] bg-neutral-50 w-[90%] h-40 rounded-2xl flex p-3 px-5 gap-2">
                <LuBadgeCheck size={40} />
                <div className="">
                  <h2 className="text-h5 font-medium">
                    Proven <br />
                    <span className="font-normal">Effectiveness</span>
                  </h2>
                  <p>
                    Every product is carefully crafted to meet the highest
                    quality standards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-rose-100 w-150 overflow-hidden h-[60vh] rounded-4xl mt-25 justify-between">
              <div className="flex gap-10 items-end ml-10 mt-10">
                <div>
                  <FaRecycle size={30} className="relative top-[-20px]" />
                  <h3>Eco-Friendly</h3>
                  <h4 className="">Packaging</h4>
                </div>
                <div className="flex items-end">
                  <img src={images5} alt="" className="w-20 h-[]" />
                </div>
              </div>
            </div>
            <div className="flex bg-rose-100 w-150 overflow-hidden h-[50vh] rounded-4xl mt-10 justify-between">
              <div className="flex gap-10 items-center ml-10 mt-10">
                <div className="flex items-end">
                  <img
                    src={images6}
                    alt=""
                    className="w-40 h-[40vh] rotate-20 relative left-[-70px] "
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-10">
                  <div className="flex  flex-col w-full relative text-start text-4xl gap-5">
                    <h3 className="leading-[0.7]">100% Natural</h3>
                    <h4 className="opacity-60">100% You</h4>
                  </div>
                  <div className="flex flex-col">
                    <p className="flex items-center gap-2">
                      <FaEyeDropper />
                      No Harsh Chemical
                    </p>
                    <p className="flex items-center gap-2">
                      <LuLeaf />
                      Plant-Based Goodness
                    </p>
                    <p className="flex items-center gap-2">
                      <PiHandHeartLight />
                      Ethicaly Sourced
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
