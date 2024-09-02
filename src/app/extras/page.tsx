
import ExtraProducts from '@/components/ExtraProducts';

const Extras = () => {

  return (
    <>
      <header className="text-white bg-gradient-to-t from-white via-[#dfcfbdc7] to-[#e3c8acc7] xl:h-30vh mb-6 p-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="text self-center px-4 md:px-20 text-gray-950">
          <h2 className='text-lg md:text-5xl font-semibold mb-4'>EXTRAS</h2>
          <p className='text-lg md:text-3xl mb-10'>Checkout out our special meals of the month!</p>
        </div>
      </header>

      <section className='text-gray-700 pt-4 pb-16 px-10 md:px-14 lg:px-20 xl:px-32'>
          <ExtraProducts />
      </section>
    </>
  )
}

export default Extras;