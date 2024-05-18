import Image from "next/image";
import Logo from '../../public/assets/Logo.svg'
import UserProfile from "../../public/assets/User.svg"
import Menu from "../../public/assets/Menu.svg"

const navLinks = [
    {name: "Features"},
    {name: "Pricing"},
    {name: "Enterprise"},
    {name: "Careers"}
]

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
        <div className="flex items-center">
            <Image src={Logo} alt="logo"/>

            <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                {navLinks.map((item, index) => {
                    return <p className="text-[#36484C] font-medium" key={index}>{item.name}</p>
                })}

            </div>
        </div>
        <div className="flex gap-x-5">
            <p className="text-[#36485C] hidden lg:block font-medium pr-[56px]">Open an Account</p>
            <div className="flex items-center gap-x-2">
                <Image src={UserProfile} alt="User Profile"/>
                <span className="hidden font-medium text-[#36485C] lg:block">Sign In</span>
            </div>
            <Image className="lg:hidden" src={Menu} alt="Menu Button"/>
        </div>
    </nav>
  )
}
