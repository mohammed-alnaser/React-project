import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../Components/NewsletterBox'
const About = () => {
  return (

    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[400px] ' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, minima. Vitae tempora tempore error dolorem eaque! Nulla repellendus voluptatibus officia nam quibusdam quia, quae voluptas esse rem, dolore, ipsum quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, debitis nobis a quidem perspiciatis dolorum ad maiores suscipit officiis ea deserunt quae qui officia! Delectus esse soluta nesciunt culpa ad.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore delectus, molestiae minima assumenda illum fugit laboriosam. Quia id repudiandae, obcaecati nobis, officiis ab, consequatur neque sequi cum rem expedita.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
        
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto, hic itaque rerum expedita quos vero? Aliquid suscipit, quam praesentium neque enim minus iusto dicta quia. Temporibus perspiciatis repudiandae expedita.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto, hic itaque rerum expedita quos vero? Aliquid suscipit, quam praesentium neque enim minus iusto dicta quia. Temporibus perspiciatis repudiandae expedita.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto, hic itaque rerum expedita quos vero? Aliquid suscipit, quam praesentium neque enim minus iusto dicta quia. Temporibus perspiciatis repudiandae expedita.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
