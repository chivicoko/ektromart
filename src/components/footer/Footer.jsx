import { GitHub, Instagram, KeyboardArrowRight, Language, LinkedIn, Mail, Twitter, WhatsApp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#452b1f] flex flex-col text-white z-30 mt-16">
      <div className="border-b border-[#aa550020] flex flex-col lg:flex-row gap-6 items-center justify-between py-14 px-8 lg:px-12">

        <span className="flex-1 flex self-start md:self-center items-center justify-center">
          <Link href='/' className="flex items-center space-x-2">
            <span className="relative w-8 h-8">
              <Image 
                src="/images/logo.png" 
                alt="EktroMart Store's Logo"
                fill
                style={{ objectFit: 'cover' }}
                sizes="100%"
              />
            </span>
            <span className="text-white text-2xl font-bold flex items-center">
              EktroMart Store
            </span>
          </Link>
        </span>

        <div className="flex-1 flex flex-col md:flex-row items-start justify-center md:justify-between gap-6 md:gap-16 my-6 lg:my-auto">
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-2xl">Links</div>
            <ul className="flex flex-col gap-1 justify-end mt-3">
              <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg">
                <Link href='/' className="flex items-center"><KeyboardArrowRight/> Home</Link>
              </li>
              <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg">
                <Link href='/extras' className="flex items-center"><KeyboardArrowRight/> Extras</Link>
              </li>
            </ul>
          </div>

          <div className="flex-2 flex flex-col gap-2">
            <div className="text-2xl">Contact</div>
            <ul className="flex flex-col gap-2 justify-end mt-3">
              <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg">
                <Link href={'#'}>+234 8028845693</Link>
              </li>
              <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg">
                <Link href={'#'}>victor.c.okoye@gmail.com</Link>
              </li>
              <li className="listItem itemIcons">
                <span className="flex gap-2 flex-wrap items-center mt-2">
                  <Link href={'https://www.instagram.com/chivicoko'} target="_blank" className="bg-btn hover:bg-[#aa550052] p-2 rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <Instagram/>
                  </Link>
                  <Link href={'https://twitter.com/chivicoko'} target="_blank" className="bg-btn hover:bg-[#aa550052] p-2 rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <Twitter/>
                  </Link>
                  <Link href={'https://github.com/chivicoko'} target="_blank" className="bg-btn hover:bg-[#aa550052] p-2 rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <GitHub/>
                  </Link>
                  <Link href={'https://www.victorokoye.com/'} target="_blank" className="bg-btn hover:bg-[#aa550052] p-2 rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <Language/>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/chivicoko'} target="_blank" className="bg-btn hover:bg-[#aa550052] p-2 rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <LinkedIn/>
                  </Link>
                  <Link href={'https://wa.me/+2348028845693'} target="_blank" className="bg-btn hover:bg-[#aa550052] p-2 rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <WhatsApp/>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>


        <div className="flex-1 flex flex-col items-center justify-center gap-3">
          <p className="self-center">Subscribe To Our Newsletter</p>
          <div className="bg-[#11192899] pl-3 flex items-center border rounded-lg border-[#aa5600] focus-within:border-[#aa5600] focus-within:ring-1 focus-within:ring-[#aa5600] focus-within:shadow-[0_0_10px_0_rgba(142,68,173,0.5),0_0_20px_5px_rgba(142,68,173,0.05)]">
            <span className="relative flex items-center w-4 h-5 text-[#aa5600] flex-shrink-0">
              <Mail />
            </span>
            <input
              type="email"
              placeholder="Email..."
              name="email"
              className="bg-transparent p-3 ml-2 rounded-md shadow-lg w-full border-0 text-base text-white leading-tight focus:outline-0 focus:ring-0"
            />
            <button
              type="button"
              className="bg-btn text-white rounded-md px-4 py-3 ml-2 hover:bg-btn-hover focus:outline-none focus:ring-2 focus:ring-[#aa5600]"
            >
              Submit
            </button>
          </div>
        </div>

      </div>

      <p className="py-4 flex items-center justify-center">&copy; EktroMart Store 2024</p>
    </footer>
  )
}

export default Footer;