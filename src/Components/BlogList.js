import "../index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import IntervalsCarousel from "./Carousel";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BlogList = ({ blogs, title }) => {
  return (
    <div className="container mt-3">
      {/* Content */}
      <h1>
        <b>{title}</b>
      </h1>
      <h5 className="text-end text-secondary">Lihat Selengkapnya</h5>
      <Slider {...settings}>
        {blogs.map((blog) => (
          <div className="col">
            <div className="card">
              <img src={blog.images} className="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 className="card-title fw-bold">{blog.title}</h5>
                <p className="card-text">{blog.stars}</p>
                <span className="pl-5">
                  <p className="card-text">
                    <i class="bi bi-geo-alt"></i>
                    {blog.location}
                  </p>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogList;
