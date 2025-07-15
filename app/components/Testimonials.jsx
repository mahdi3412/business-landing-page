'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const testimonials = [
  {
    name: "Ali M.",
    comment: "This team is fantastic. They built our website with great care!",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Sarah L.",
    comment: "Fast, clean code and great UI. Highly recommend!",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "John K.",
    comment: "I got exactly what I wanted for my startup landing page.",
    image: "https://i.pravatar.cc/150?img=6"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow">
                <img src={t.image} alt={t.name} className="mx-auto rounded-full w-20 h-20 mb-4" />
                <p className="text-lg italic mb-2">"{t.comment}"</p>
                <p className="font-semibold text-blue-600">{t.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
