import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";


function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>item 1</CarouselItem>
        <CarouselItem>item 2</CarouselItem>
        <CarouselItem>item 3</CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
