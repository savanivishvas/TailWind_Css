import { Advertisement } from "./components/Advertisement/Advertisement"
import { Branding } from "./components/Branding_Carousal/Branding"
import { Carousal } from "./components/Carousal/Carousal"
import { Collection } from "./components/Collection/Collection"
import { Featured_Products } from "./components/Featured_Products/Featured_Products"
import { Footer } from "./components/Footer/Footer"
import { Functionality_Header } from "./components/Functionality_Header/Functionality_Header"
import { Header } from "./components/Header/Header"
import { Latest_News } from "./components/Latest_News/Latest_News"
import { Selling_Products } from "./components/Selling_Products/Selling_Products"

export const App = () => {
  return (
    <div>

      {/* Header Components */}
      <Header />

      {/* Functionlity Header */}
      <Functionality_Header />

      {/* Hero Carousal */}
      <Carousal />

      {/* Collection */}
      <Collection />

      {/* Selling Products */}
      <Selling_Products />

      {/* Advertisement */}
      <Advertisement />

      {/* Featured Products */}
      <Featured_Products />

      {/* Branding Carousal */}
      <Branding />

      {/* Latest News */}
      <Latest_News />

      {/* Footer */}
      <Footer />

    </div>
  )
}