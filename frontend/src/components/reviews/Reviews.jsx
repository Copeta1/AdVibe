import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const commentsRes = await fetch("https://dummyjson.com/comments");
      const usersRes = await fetch("https://dummyjson.com/users");

      const commentsData = await commentsRes.json();
      const usersData = await usersRes.json();

      const merged = commentsData.comments.slice(0, 10).map((comment) => {
        const user = usersData.users.find((u) => u.id === comment.user.id);
        return {
          ...comment,
          user: user || {
            firstName: "Anonymous",
            lastName: "",
            username: "unknown",
            image: "https://i.pravatar.cc/150?img=69",
          },
        };
      });
      setComments(merged);
    };
    fetchData();
  }, []);

  return (
    <div className="items-center text-center px-16">
      <div className="flex flex-col">
        <h1 className="text-3xl">
          What <span className="text-orange-500">Clients</span> Say!
        </h1>
        <p className="text-gray-400 py-3">
          See How Our Digital Marketing Agency Helped <br /> Clients Achieve
          Their Goals
        </p>
      </div>
      <div className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={comments.length > 3}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {comments.map((comment) => (
            <SwiperSlide className="pb-16" key={comment.id}>
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col text-left">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={comment.user.image}
                    alt={comment.user.firstName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">
                      {comment.user.firstName} {comment.user.lastName}
                    </p>
                    <p className="text-sm text-gray-400">
                      @{comment.user.username}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3 flex-grow">"{comment.body}"</p>
                <p className="text-yellow-500 text-sm">
                  ⭐ {Math.floor(Math.random() * 3) + 3}/5
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
