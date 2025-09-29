import cleanser from "../assets/cleansers.webp";
import lotions from "../assets/lotions.webp";
import moisturizers from "../assets/moisturizers.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiGreaterThanLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import img from "../assets/serum.jpg";

const categoryList = [
  {
    image: cleanser,
    title: "Cleansers",
  },
  {
    image: lotions,
    title: "Lotion",
  },
  {
    image: moisturizers,
    title: "Moisturizers",
  },
];

const Shop = () => {
  return (
    <>
      <div className="px-4 md:px-8">
        <h1 className="text-center my-5 text-4xl mt-10 ">Shop</h1>
        <section className="w-100% h-[50vh]">
          <div className="flex items-center justify-center gap-10">
            {categoryList.map((cat) => (
              <div className="overflow-hidden rounded-2xl">
                <div className="w-64 overflow-hidden">
                  <img
                    src={cat.image}
                    className="w-64 hover:blur-[5px] hover:scale-110 transition duration-700"
                    alt=""
                  />
                </div>
                <p
                  className="flex justify-between bg-white
                 items-center px-2 py-3 text-lg"
                >
                  {cat.title} <IoIosArrowRoundForward className="text-2xl" />{" "}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="flex">
          <section className="w-[300px] min-h-screen ml-5">
            <div className="flex px-10 flex-col">
              <h4 className="text-rose-400 font-bold">Filters</h4>
              <div className="flex flex-col mt-5">
                <p className="opacity-50">Category (0)</p>
                <div className=" flex flex-col gap-1 mt-2">
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="Cleanser"> Cleanser</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="Lotion"> Lotion</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="Moisturizer"> Moisturizer</label>
                  </div>
                </div>
                <div className="flex flex-col w-40 bg-[#F2F2EF] mt-5">
                  <p className="mb-4 opacity-50">Tags (0)</p>
                  <div className="flex flex-col h-[100px] overflow-y-auto gap-1 ">
                    {[
                      "After sun",
                      "All skin",
                      "Body",
                      "Daily",
                      "Detox",
                      "Dry",
                    ].map((tag, index) => (
                      <label key={index}>
                        <input type="checkbox" />
                        <span>{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-5 ">
                <p className="opacity-50 pb-4">Size</p>
                <div className="grid w-35 gap-2 grid-cols-2">
                  <div className="bg-[#F2F2EF]">50ml</div>
                  <div className="bg-[#F2F2EF]">100ml</div>
                  <div className="bg-[#F2F2EF]"> 150ml</div>
                  <div className="bg-[#F2F2EF]">250ml</div>
                </div>
              </div>
              <div>
                <div className="flex flex-col mt-5">
                  <p className="opacity-50 pb-4">Price (0)</p>
                  <div className="flex flex-col  ">
                    <div className=" flex gap-2">
                      <input type="checkbox" />
                      <label htmlFor="">Unde 8$</label>
                    </div>
                    <div className=" flex gap-2">
                      <input type="checkbox" />
                      <label htmlFor="">Unde 8$</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pb-10">
                  <p className="opacity-50 pt-5">Discount</p>
                  <div className="flex items-center gap-2 pt-2 ">
                    <input type="checkbox" />
                    <label htmlFor="">10%-20%</label>
                  </div>
                  <div className="flex items-center gap-2  ">
                    <input type="checkbox" />
                    <label htmlFor="">20%-80%</label>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex flex-1 flex-col">
            <div className="flex justify-between">
              <div className="flex  gap-2 text-small mt-4">
                <p>Home </p>
                <p className="flex gap-1 mb-2 ">
                  <PiGreaterThanLight className="mt-1" />
                  <a
                    href="# "
                    className="text-black underline hover:text-pink-600"
                  >
                    Shop
                  </a>
                </p>
              </div>
              <div className="flex  gap-2  text-small mt-4">
                <p>Sort by </p>
                <p className="flex  mb-2 ">
                  <a
                    href="# "
                    className="text-black underline hover:text-pink-600"
                  >
                    Relevance
                  </a>
                  <RiArrowDropDownLine
                    size={20}
                    className="mt-1  hover:text-pink-600"
                  />
                </p>
              </div>
            </div>
            <div className="flex flex-wrap  gap-30 py-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
                <div className="  ">
                  <div className="flex w-60 rounded-4xl h-[50vh]  bg-amber-950 ">
                    <img
                      src={img}
                      alt=""
                      className="flex object-cover w-60 h-[50vh] rounded-4xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
