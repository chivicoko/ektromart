
import { ExtrasProduct, SingleItemProps } from "@/utils/types";
import Image from "next/image";

const SingleItem: React.FC<SingleItemProps> = async ({ params }) => {

  const url = `${process.env.NEXT_PUBLIC_API_URL}/${params.id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch product.");
  }

  const data: ExtrasProduct = await response.json();
  // console.log(data);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <header className="text-white bg-gradient-to-t from-white via-[#dfcfbdc7] to-[#e3c8acc7] xl:h-20vh md:mb-6 p-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="text self-start px-4 md:px-20 text-gray-950">
          <h2 className='text-xl font-semibold md:text-5xl my-4'>EXTRA Special - {data.title}</h2>
          <p className='text-lg md:text-3xl mb-10'>Your special meal to savor...</p>
        </div>
      </header>

      <article className='md:mt-2 md:mb-20 sm:py-2 md:pt-4 pb-10 px-4 lg:px-6 xl:px-16'>
        <div className="flex flex-col gap-10 items-center justify-center md:justify-between">
          <div className="productInfo">
            <div className="mt-2 md:mt-16 flex flex-col xl:flex-row justify-between items-start gap-10">
              
              <div className="flex-1 flex flex-col justify-center items-center gap-4 w-full">
                <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg h-80 rounded-xl shadow-xl transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  <Image
                    src={data.thumbnail}
                    className="object-cover"
                    alt={data.title}
                    fill
                    sizes='100%'
                  />
                </div>

                <div className="w-4/7 flex items-center gap-2">
                  {data.images.map((image, index) => (
                    <div className="relative h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 mb-4 shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:translate-y-1" key={index}>
                      <Image
                        src={image}
                        className="object-cover"
                        alt="image preview"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                      />
                    </div>
                  ))}
                </div>

                <div className="text w-full border-2 border-theme rounded-lg py-3 px-4">
                  <div className="flex justify-between items-center flex-wrap">
                    <p className="text-base"><span className="font-semibold text-theme">Width:</span> {data.dimensions.width}</p>
                    <p className="text-base"><span className="font-semibold text-theme">Height:</span> {data.dimensions.height}</p>
                    <p className="text-base"><span className="font-semibold text-theme">Weight:</span> {data.weight}</p>
                    <p className="text-base"><span className="font-semibold text-theme">Depth:</span> {data.dimensions.depth}</p>
                  </div>
                </div>

              </div>

              <div className="flex-1 w-full">
                
                <div className="text w-full">
                  <h3 className="text-xl md:text-5xl text-center md:text-start text-theme border-b-2 border-theme">{data.title}</h3>
                  <div className="tags my-4">
                    <span className="text-xl md:text-2xl">Tags: </span>
                    <span className="md:text-xl">{data.tags.join(", ")}</span>
                  </div>

                  <p className="flex-1 my-4 text-4xl text-center">${data.price}</p>

                  <div className="description">
                    <h3 className="text-2xl md:text-3xl text-theme">Description</h3>
                    <p className="md:text-xl">{data.description}</p>
                  </div>

                  <div className="details w-full border-2 border-theme rounded-lg py-3 px-4 my-4">
                    <div className="flex flex-wrap justify-start items-center gap-2">
                      <p className="text-base"><span className="font-semibold text-theme">Category:</span> {data.category}</p>
                      | <p className="text-base"><span className="font-semibold text-theme">Rating:</span> {data.rating}</p>
                      | <p className="text-base"><span className="font-semibold text-theme">Discount:</span> {data.discountPercentage}</p>
                      | <p className="text-base"><span className="font-semibold text-theme">Stock:</span> {data.stock}</p>
                      | <p className="text-base"><span className="font-semibold text-theme">Warrabty:</span> {data.warrantyInformation}</p>
                      | <p className="text-base"><span className="font-semibold text-theme">Shipping:</span> {data.shippingInformation}</p>
                      | <p className="text-base"><span className="font-semibold text-theme">Availability:</span> {data.availabilityStatus}</p>
                      | <p className="text-base"><span className="font-semibold text-theme">Return Policy:</span> {data.returnPolicy}</p>
                      | <p className="text-base"><span className="font-semibold text-theme">sku:</span> {data.sku}</p>
                      | <p className="text-base"><span className="font-semibold text-theme">Minimum Order Quantity:</span> {data.minimumOrderQuantity}</p>
                    </div>
                  </div>
                  
                  {/* <div className="price-code flex flex-col md:flex-row items-center justify-between my-8">
                    <div className="code flex-1 flex flex-col justify-center items-center mt-4 md:mt-0">
                      <div className="relative h-32 w-32 md:h-48 md:w-48">
                        <Image
                          src={data.meta.qrCode}
                          className="object-cover rounded-md"
                          alt="image preview"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                        />
                      </div>
                      <p className="text-base">{data.meta.barcode}</p>
                    </div>
                  </div> */}

                </div>

                {/* <div className="">
                  <div className="date flex flex-wrap items-center justify-between border-b-2 border-theme">
                    <p className="text-base"><span className="font-semibold text-theme">Created At:</span> {formatDate(data.meta.createdAt)}</p>
                    <p className="text-base"><span className="font-semibold text-theme">Update At:</span> {formatDate(data.meta.updatedAt)}</p>
                  </div>
                </div> */}

              </div>

            </div>
          </div>
          
          <aside className="productReview py-6 md:py-10 w-full">
            <h2 className="text-center text-2xl md:text-3xl mb-4 font-bold">Reviews</h2>
            
            <ul className="flex items-center justify-center gap-3 flex-wrap">
              {data.reviews.map((review, index) => (
                <li key={index} className="border-2 border-theme rounded-lg pt-2 px-2 w-full max-w-sm">
                  <div className="flex flex-col items-center justify-between border-b border-theme">
                    <p className="text-xl md:text-2xl">{review.reviewerName}</p>
                    <p className="text-sm">({review.reviewerEmail})</p>
                  </div>
                  <p className="text-base my-4">{review.comment}</p>
                  <div className="flex items-center justify-between border-t border-theme">
                    <p className="text-base">Rating: {review.rating}</p>
                    <p className="text-base">{formatDate(review.date)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

        </div>
      </article>
    </>
  );
};

export default SingleItem;
