import imagesbck from "../assets/about.jpg";
import img1 from "../assets/priya2.jpg";
import { RiLeafLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { PiCat } from "react-icons/pi";
import { RiDropperFill } from "react-icons/ri";
import { RiHandHeartLine } from "react-icons/ri";
import image2 from "../assets/bottle.jpg";
import img3 from "../assets/model.jpg";
import img4 from "../assets/model2.jpg";
import img5 from "../assets/about2.jpg";
import img6 from "../assets/about4.jpg";
import { GiChestnutLeaf } from "react-icons/gi";
import { GiStaryu } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import img7 from "../assets/demo1.jpg";

<FiBox />;
const About = () => {
  return (
    <>
      <section className="flex flex-col ">
        <div
          className=" flex  items-center rounded-4xl  mt-10 justify-center w-100% h-[100vh]  bg-no-repeat bg-cover px-40"
          style={{ backgroundImage: `url(${imagesbck}) ` }}
        >
          <h4 className="flex flex-col items-center text-8xl pb-60     ">
            Redifining <br /> Skincare,
          </h4>
          <p className="flex items-center text-3xl text-gray-700 mt-40 mr-40  ]">
            At Veleveta, we blend nature and science to create skincare that
            transforms, empowers, and respects the planet.
          </p>
        </div>
      </section>
      <section>
        <div className="flex w-100% h-[60vh]">
          <div className=" w-60 h-[40vh] bg-white ml-35 mt-20 text-center items-center flex flex-col rounded-4xl">
            <h2 className="">100%</h2>
            <h5>Natural Ingrediant</h5>
            <p>
              Pure, safe, and sustainably <br /> sourced skincare.
            </p>
          </div>
          <div className=" w-60 h-[40vh] bg-white ml-10 mt-20 text-center items-center flex flex-col rounded-4xl">
            <h2 className="">97%</h2>
            <h5>Customer Satisfaction</h5>
            <p>Trusted by happy, glowing customers worldwide.</p>
          </div>
          <div className=" w-60 h-[40vh] bg-white ml-10 mt-20 text-center items-center flex flex-col rounded-4xl">
            <h2 className="">85%</h2>
            <h5>Less Packaging</h5>
            <p>Eco-friendly designs for a greener planet.</p>
          </div>
          <div className=" w-60 h-[40vh] bg-white ml-10 mt-20 text-center items-center flex flex-col rounded-4xl">
            <h2 className="">9/10</h2>
            <h5>Recommed Us</h5>
            <p>Loved and recommended by our customers.</p>
          </div>
        </div>
      </section>
      <section className="flex  mx-20 ">
        <div className="flex-col  ">
          <h3>Driven by Car</h3>
          <h2>Rooted in Nature</h2>
          <img src={img1} alt="" className="w-150 h-[] rounded-2xl " />
        </div>
        <div className="flex">
          <div className=" w-150 h-[80vh] ml-10 rounded-2xl bg-white mt-44">
            <p className="ml-15 mt-10 opacity-50">About Us</p>
            <h3 className="ml-15 mt-4">
              Simple Rituals <br /> Powerful Results
            </h3>

            <p className=" ml-15 mr-10 opacity-50">
              Veleveta started with a simple idea: skincare that works in
              harmony with your skin and the planet. From humble beginnings to a
              trusted brand, we’ve stayed true to our mission of delivering
              natural, effective, and sustainable skincare solutions.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex  ml-15 gap-1 mt-5  ">
                <RiLeafLine className="mt-1" />
                <p className="opacity-50">100% Natural Ingredients</p>
              </div>
              <div className="flex  ml-15 gap-1 ">
                <FiBox className="mt-1" />
                <p className="opacity-50">Sustainable Packaging</p>
              </div>
              <div className="flex  ml-15 gap-1">
                <PiCat className="mt-1" />
                <p className="opacity-50">Cruelty-Free Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="flex flex-col">
          <div className=" w-140  h-[70vh] ml-19 rounded-2xl bg-white mt-10 mb-10">
            <p className="ml-15 mt-10 opacity-50">Our Journey</p>
            <h3 className="ml-15">
              Why Your Skin <br /> Deserved The Best
            </h3>
            <p className="ml-15 opacity-50">
              Kanva started with a simple idea: skincare that works in harmony
              with your skin and the planet. From humble beginnings to a trusted
              brand, we’ve stayed true to our mission of delivering natural,
              effective, and sustainable skincare solutions.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex  ml-15 gap-1 mt-5  ">
                <RiLeafLine className="mt-1 " />

                <p className="opacity-50">100% Natural Ingredients</p>
              </div>
              <div className="flex  ml-15 gap-1 ">
                <RiDropperFill className="mt-1" />
                <p className="opacity-50">Sustainable Packaging</p>
              </div>
              <div className="flex  ml-15 gap-1">
                <RiHandHeartLine className="mt-1" />
                <p className="opacity-50">Cruelty-Free Commitment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img
              src={image2}
              alt=""
              className="w-150 h-[76vh]  ml-6 rounded-2xl "
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center ">
        <div>
          <div className="flex mt-10 justify-center  min-w-screen h-[] ">
            <div className="relative  mr-40">
              <img
                src={img3}
                alt=""
                className="w-20  border-3 rotate-20 object-cover rounded-2xl shadow-lg"
              />
              <img
                src={img4}
                alt=""
                className="w-20 border-3  h[40] object-cover rounded-2xl shadow-lg absolute top-10 left-10"
              />
            </div>
          </div>
          <div className="flex flex-col ml- mt-10 text-center  ">
            <h2 className="text-rose-400">Natural Beauty</h2>
            <h2>Sustainable Future.</h2>
            <h2 className="text-rose-400">Effective Skincare.</h2>
            <h5 className=" text-3xl mt-5">Our Mission</h5>
            <p className="mt-1 text-rose-500 text-2xl opacity-50">Velveta</p>
          </div>
          <div
            className="flex flex-col  items-center rounded-4xl  mt-10 ml-30 mr-30  w-100% h-[100vh]  bg-no-repeat bg-cover px-40 "
            style={{ backgroundImage: `url(${img5}) ` }}
          >
            <h1 className="mt-10">Sustainability</h1>
            <h1 className="">& Quality</h1>
            <p className="mt-10 text-2xl text-center">
              Every product is made with 100% natural, carefully sourced
              ingredients to ensure safe, effective, and gentle care for your
              skin.
            </p>
            <div className="flex flex-col gap-2 mt-10">
              <div className="flex  ml-15 gap-1 mt-5  ">
                <RiLeafLine size={20} className="mt-1 " />

                <p className="text-2xl">100% Natural Ingredients</p>
              </div>
              <div className="flex  ml-15 gap-1 ">
                <RiDropperFill size={20} className="mt-1" />
                <p className="text-2xl">Sustainable Packaging</p>
              </div>
              <div className="flex  ml-15 gap-1">
                <RiHandHeartLine size={20} className="mt-1" />
                <p className="text-2xl">Cruelty-Free Commitment</p>
              </div>
            </div>
          </div>
        </div>
        <section className="flex min-w-screen min-h-screen gap-50 justify-center   ">
          <div className=" flex  mb-0 h[100vh] ">
            <img src={img6} alt="" className=" w-100 h-[100%]  object-cover" />
          </div>
          <div className=" flex flex-col  ">
            <div>
              <h2 className="text-7xl mt-20 text-rose-400">Eco Friendly</h2>
              <h3>Packaging.</h3>
              <h5 className=" opacity-50 ">
                At Velveta, sustainability drives every decision we make. <br />{" "}
                Our packaging is designed to reduce waste and protect the planet{" "}
                <br /> while maintaining the quality and freshness of our
                products.
              </h5>
            </div>
            <div className="flex gap-20 mt-10 ">
              <div className="flex w-70 h-[30vh] bg-white gap-2 items-center flex-col rounded-4xl">
                <GiChestnutLeaf size={20} className="mt-5" />
                <h5>Natural Formula</h5>
                <p className="text-center">
                  Crafted with pure, skin-loving ingredients for ultimate care.
                </p>
              </div>
              <div className="flex w-70 flex-col items-center gap-2 h-[30vh] bg-white rounded-4xl">
                <PiCat size={20} className="mt-5" />
                <h5>Cruelty Free</h5>
                <p className="text-center">
                  Our products are never tested on animals, guaranteed ethical.
                </p>
              </div>
            </div>
            <div className="flex gap-20 mt-10   mb-10">
              <div className="flex w-70 flex-col items-center  h-[30vh] bg-white rounded-4xl">
                <GiStaryu size={20} className="mt-5" />
                <h5>Expert Approved</h5>
                <p className="text-center">
                  Carefully tested to ensure safety <br /> and visible results.
                </p>
              </div>
              <div className="flex w-70 flex-col items-center h-[30vh] bg-white rounded-4xl">
                <FaShippingFast size={20} className="mt-5" />
                <h5>Free Shipping</h5>
                <p className="text-center">
                  Delivered to your doorstep with no extra costs worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="flex flex-col items-center ">
            <h2 className="text-rose-400 ">New Arrivals</h2>

            <div className="flex gap-5   animate-marquee items-center  text-2xl">
              {new Array(20).fill(null).map(() => {
                return (
                  <span className="text-center text-rose-400">
                    Shop Now&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="flex w-50 rounded-2xl mb-10 h-[40vh]  bg-white ">
                      <img src={img7} alt="" className=" w-50 rounded-2xl" />
                    </div>
                  </span>
                );
              })}
            </div> 
          </div>
        </section>
      </section>
    </>
  );
};
export default About;
