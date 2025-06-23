import { Stars } from "../Stars"


export const Selling_Product_Card = () => {
  return (
    <div>

      <div className="reletive">
        <img src="public\images\1_b.jpg" alt="" />
      </div>

      <div className="mt-4 flex flex-col items-center justify-center">
        <Stars stars={4} className="flex"/>
        <p className="mt-1">Armer Air X Fear</p>
        <div className="flex mt-1">
          <span>$48.00</span>
          <span>$60.00</span>
        </div>
      </div>

      

    </div>
  )
}
