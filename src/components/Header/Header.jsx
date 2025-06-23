import { Info } from "./Info"
import { Logo } from "./Logo"
import { Navigation } from "./Navigation"

export const Header = () => {
  return (

    <nav className="bg-[#004dda]">

      <div className="max-w-screen-xl mx-auto px-20 py-3 flex items-center justify-between">
  
        <Logo />
  
        <Navigation />
  
        <Info />
  
      </div>
    </nav>
  )
}
