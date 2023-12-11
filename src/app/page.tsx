import SliderHeader from "@/components/headerSlider/slider";
import MostPopular from "@/components/mostPopular/mostPopular";
import New from "@/components/new/new";
import Advertising from "@/components/reklama/advertising";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <SliderHeader />
        <MostPopular />
        <Advertising />
        <New />
      </div>
    </div>
  );
}
