import SliderHeader from "@/components/headerSlider/slider";
import MostPopular from "@/components/mostPopular/mostPopular";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <SliderHeader />
        <MostPopular />
      </div>
    </div>
  );
}
