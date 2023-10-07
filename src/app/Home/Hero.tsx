import Navbar from "@/components/Navbar/Navbar";
import SwiperHeader from "./Swiper/SwiperHeader";
import Services from "./Services/Services";
import BestShirts from "./BestShirts/bestShirts";
import BestHoodies from "./BestHoodies/bestHoodies";
import Reviews from "../Reviews/Reviews";
export default function Example() {
  return (
    <div className="bg-white">
      <section>
        <div className="container">
          <SwiperHeader />
          <Services />
          <BestShirts />
          <BestHoodies />
          <Reviews />
        </div>
      </section>
    </div>
  );
}
