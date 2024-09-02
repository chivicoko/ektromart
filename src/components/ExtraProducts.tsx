import { ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const ExtraProducts =  async() => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("Failed to fetch products!");
  }
  
  const data = await response.json();
  // console.log(data);

  return (
    <>
      <section className="mt-6 md:mt-12 flex flex-col gap-10">
            {/* Groceries */}
        <div className="category">
          <p className="border-b-2 border-theme mb-4 text-center text-2xl">Groceries</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-4">
            {data.products.map((product: any) => (
              product.category === 'groceries' && (
              <li key={product.id} className="rounded-lg flex flex-col justify-between shadow-lg bg-[#00000020] backdrop-blur-sm border border-solid border-[#00000013] transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  {/* Product Image */}
                  <Link href={`extras/item/${product.id}`}>
                    <div className="relative w-full h-32 mb-4 self-start cursor-pointer rounded-t-md overflow-hidden">
                      <Image
                        src={product.thumbnail || '/images/default-product-image.png'}
                        alt={`${product.title} preview`}
                        fill
                        className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Link>
                  
                  <Link href={`extras/item/${product.id}`}>
                    <h4 className="text-base hover:text-theme font-semibold px-4 cursor-pointer">{product.title} ({product.category})</h4>
                  </Link>
                  
                  <div className="mt-1 flex justify-between items-end p-4">                  
                    <p className="text-sm font-semibold">${product.price}</p>
                    <div className='flex items-center justify-center'>
                      <button className="text-[#aa5600] hover:text-[#aa5500c3]">
                        <ShoppingCart/>
                      </button>
                    </div>
                  </div>

                </li>
            )))}
          </ul>
        </div>
            {/* beauty */}
        <div className="category">
          <p className="border-b-2 border-theme mb-4 text-center text-2xl">Beauty</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-4">
            {data.products.map((product: any) => (
              product.category === 'beauty' && (
              <li key={product.id} className="rounded-lg flex flex-col justify-between shadow-lg bg-[#00000020] backdrop-blur-sm border border-solid border-[#00000013] transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  {/* Product Image */}
                  <Link href={`extras/item/${product.id}`}>
                    <div className="relative w-full h-32 mb-4 self-start cursor-pointer rounded-t-md overflow-hidden">
                      <Image
                        src={product.thumbnail || '/images/default-product-image.png'}
                        alt={`${product.name} preview`}
                        fill
                        className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Link>
                  
                  <Link href={`extras/item/${product.id}`}>
                    <h4 className="text-base hover:text-theme font-semibold px-4 cursor-pointer">{product.title} ({product.category})</h4>
                  </Link>
                  
                  <div className="mt-1 flex justify-between items-end p-4">                  
                    <p className="text-sm font-semibold">${product.price}</p>
                    <div className='flex items-center justify-center'>
                      <button className="text-[#aa5600] hover:text-[#aa5500c3]">
                        <ShoppingCart/>
                      </button>
                    </div>
                  </div>

                </li>
            )))}
          </ul>
        </div>
            {/* Fragrances */}
        <div className="category">
          <p className="border-b-2 border-theme mb-4 text-center text-2xl">Frangrances</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-4">
            {data.products.map((product: any) => (
              product.category === 'fragrances' && (
              <li key={product.id} className="rounded-lg flex flex-col justify-between shadow-lg bg-[#00000020] backdrop-blur-sm border border-solid border-[#00000013] transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  {/* Product Image */}
                  <Link href={`extras/item/${product.id}`}>
                    <div className="relative w-full h-32 mb-4 self-start cursor-pointer rounded-t-md overflow-hidden">
                      <Image
                        src={product.thumbnail || '/images/default-product-image.png'}
                        alt={`${product.name} preview`}
                        fill
                        className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Link>
                  
                  <Link href={`extras/item/${product.id}`}>
                    <h4 className="text-base hover:text-theme font-semibold px-4 cursor-pointer">{product.title} ({product.category})</h4>
                  </Link>
                  
                  <div className="mt-1 flex justify-between items-end p-4">                  
                    <p className="text-sm font-semibold">${product.price}</p>
                    <div className='flex items-center justify-center'>
                      <button className="text-[#aa5600] hover:text-[#aa5500c3]">
                        <ShoppingCart/>
                      </button>
                    </div>
                  </div>

                </li>
            )))}
          </ul>
        </div>
            {/* Furniture */}
        <div className="category">
          <p className="border-b-2 border-theme mb-4 text-center text-2xl">Furniture</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-4">
            {data.products.map((product: any) => (
              product.category === 'furniture' && (
              <li key={product.id} className="rounded-lg flex flex-col justify-between shadow-lg bg-[#00000020] backdrop-blur-sm border border-solid border-[#00000013] transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  {/* Product Image */}
                  <Link href={`extras/item/${product.id}`}>
                    <div className="relative w-full h-32 mb-4 self-start cursor-pointer rounded-t-md overflow-hidden">
                      <Image
                        src={product.thumbnail || '/images/default-product-image.png'}
                        alt={`${product.name} preview`}
                        fill
                        className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Link>
                  
                  <Link href={`extras/item/${product.id}`}>
                    <h4 className="text-base hover:text-theme font-semibold px-4 cursor-pointer">{product.title} ({product.category})</h4>
                  </Link>
                  
                  <div className="mt-1 flex justify-between items-end p-4">                  
                    <p className="text-sm font-semibold">${product.price}</p>
                    <div className='flex items-center justify-center'>
                      <button className="text-[#aa5600] hover:text-[#aa5500c3]">
                        <ShoppingCart/>
                      </button>
                    </div>
                  </div>

                </li>
            )))}
          </ul>
        </div>

      </section>
    </>
      
  )
}

export default ExtraProducts;