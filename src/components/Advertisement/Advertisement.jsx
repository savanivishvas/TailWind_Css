
export const Advertisement = () => {
  return (
    <div className="mt-12">

      <div className="bg-[url('/images/ad.jpg')] bg-cover w-full h-[500px] text-white">

        <p>Armor</p>
        <p>Air Color 720</p>
        <p>Lightweight cushioning and durable support with a Phylon midsole</p>

        <div className="flex">

          <p>$20.00</p>
          <p>$30.00</p>
          <a href="#" className="inline-block bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200">
                Shop Now
              </a>
        </div>

      </div>

    </div>
  )
}
