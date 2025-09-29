import img from "../assets/product.webp";
import img1 from "../assets/product1.jpg";
const productcard = () => {
  return (
    <>
      <section className="flex min-w-screen">
        <div className="flex flex-col mx-20 my-10">
          <div className="flex gap-5 ">
            <p>HOME</p>
            <p>SHOP</p>
            <p>GENTLE WASH</p>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            <div className="w-100 h-[80vh] bg-white rounded-2xl">
              <img src={img} alt="" className="mt-10" />
            </div>
            <div className="w-100 h-[80vh] bg-white rounded-2xl">
              <img
                src={img1}
                alt=""
                className="w-100 h-[80vh] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="flex ">
          <h1>edlkj</h1>
        </div>
      </section>
    </>
  );
};
export default productcard;
