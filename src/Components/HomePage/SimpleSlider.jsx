import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const imageUrlsa = [
  'https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=1024x1024&w=is&k=20&c=O8LmEkgurXoSDDC3BBqbGVODioeTuzHr5nRyt8p8io8=',
  'https://media.istockphoto.com/id/585609744/photo/school-kids-in-classroom.jpg?s=1024x1024&w=is&k=20&c=sFIkJXeH0JJl4RFCCit2NGIlFXi_3BFWuNa7C7bvnTE=',
  'https://media.istockphoto.com/id/860597978/photo/group-of-school-kids-raising-hands-in-classroom.jpg?s=1024x1024&w=is&k=20&c=6O-LJOWFRg47u2r9ZrMjI9k0yvt0hk9X66Hq9Bsh_Sc=',
];

const imageUrls = [
  {
    url: 'https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=1024x1024&w=is&k=20&c=O8LmEkgurXoSDDC3BBqbGVODioeTuzHr5nRyt8p8io8=',
    alt: 'Students raising hands in classroom',
    link: '(link unavailable)'
  },
  {
    url: 'https://media.istockphoto.com/id/585609744/photo/school-kids-in-classroom.jpg?s=1024x1024&w=is&k=20&c=sFIkJXeH0JJl4RFCCit2NGIlFXi_3BFWuNa7C7bvnTE=',
    alt: 'School kids in classroom',
    link: '(link unavailable)'
  },
  {
    url: 'https://media.istockphoto.com/id/860597978/photo/group-of-school-kids-raising-hands-in-classroom.jpg?s=1024x1024&w=is&k=20&c=6O-LJOWFRg47u2r9ZrMjI9k0yvt0hk9X66Hq9Bsh_Sc=',
    alt: 'Group of school kids raising hands',
    link: '(link unavailable)'
  },
];
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full flex justify-center custom-slider-padding">
      <div className="w-full">
        <Slider {...settings} className="rounded-lg shadow-lg overflow-hidden">
          {imageUrls.map((image, index) => (
            <div key={index} className="w-full h-60">
              <a href={image.link} target="_blank" rel="noreferrer">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SimpleSlider;
