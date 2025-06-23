
export const Advertisement = () => {
  return (
    <div className="mt-12">

      <div className="bg-[url('/images/ad.jpg')] bg-cover w-full h-[500px] text-white p-20">

        <p className="font-bold text-[40px] animate-fadeUp delay-200">Armor</p>
        <p className="font-bold text-[40px] animate-fadeUp delay-[400ms]">Air Color 720</p>
        <p className=" animate-fadeUp delay-[600ms]">Lightweight cushioning and durable support with a Phylon midsole</p>

        <div className="flex mt-4 gap-4 animate-fadeUp delay-[800ms]">

          <p className="font-bold text-[30px]">$90.00</p>
          <p className="mt-6">$120.00</p>
          <a href="#" className="inline-block bg-[#004DDA] text-white font-semibold py-3 px-6 rounded hover:bg-gray-200">
                Shop Now
          </a>
        </div>

      </div>

    </div>
  )
}
