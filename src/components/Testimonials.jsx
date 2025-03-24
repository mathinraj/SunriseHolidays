import React, { useEffect } from "react";
import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Paul Starr",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      rating: 5,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt,!",
    },
    {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      rating: 4,
      review:
        "Amazing experience! The team was very professional and made our trip unforgettable. Highly recommend!",
    },
    {
      name: "Jane Smith",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      rating: 5,
      review:
        "The best travel agency I've ever worked with. Everything was perfectly organized, and the destinations were breathtaking.",
    },
    {
      name: "Alice Johnson",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      rating: 5,
      review:
        "Absolutely fantastic! The guides were knowledgeable, and the itinerary was well-planned. Will definitely travel with them again.",
    },
  ];

  useEffect(() => {
    const keenSliderActive = document.getElementById("keen-slider-active");
    const keenSliderCount = document.getElementById("keen-slider-count");
    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    const keenSliderElement = document.querySelector("#keen-slider");

    if (keenSliderElement) {
      const keenSlider = new KeenSlider(keenSliderElement, {
        loop: true,
        defaultAnimation: {
          duration: 750,
        },
        slides: {
          origin: "center",
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 640px)": {
            slides: {
              origin: "center",
              perView: 1.5,
              spacing: 16,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "center",
              perView: 1.75,
              spacing: 16,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "center",
              perView: 3,
              spacing: 16,
            },
          },
        },
        created(slider) {
          slider.slides[slider.track.details.rel]?.classList.remove("opacity-40");
          if (keenSliderActive)
            keenSliderActive.innerText = slider.track.details.rel + 1;
          if (keenSliderCount) keenSliderCount.innerText = slider.slides.length;
        },
        slideChanged(slider) {
          slider.slides.forEach((slide) => slide.classList.add("opacity-40"));
          slider.slides[slider.track.details.rel]?.classList.remove("opacity-40");
          if (keenSliderActive)
            keenSliderActive.innerText = slider.track.details.rel + 1;
        },
      });

      keenSliderPrevious?.addEventListener("click", () => keenSlider.prev());
      keenSliderNext?.addEventListener("click", () => keenSlider.next());

      return () => {
        keenSlider.destroy();
      };
    }
  }, []);

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-8">
          Read Trusted Reviews from Our Customers
        </h2>
        <div id="keen-slider" className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide opacity-40 transition-opacity duration-500"
            >
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex justify-center gap-0.5 text-yellow-400">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{testimonial.review}</p>
              </blockquote>
            </div>
          ))}
        </div>
        <div className="-mt-5 flex items-center justify-center gap-4">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <p className="w-16 text-center text-sm text-gray-700">
            <span id="keen-slider-active"></span>/
            <span id="keen-slider-count"></span>
          </p>
          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;