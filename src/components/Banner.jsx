import { ParallaxBanner } from "react-scroll-parallax";

const Banner = ({ image, title, text }) => {
  return (
    <ParallaxBanner
      layers={[{ image: `${image}`, speed: -10 }]}
      className="aspect-[3/1] relative"
    >
      <div
        style={{
          background: `rgba(21, 21, 21, 0.60)`,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 py-5 md:py-8 lg:py-10 text-white text-center"
      >
        <h1 className="mb-5 text-2xl lg:text-5xl font-bold">{title}</h1>
        <p className="text-base md:text-lg text-slate-300">{text}</p>
      </div>
    </ParallaxBanner>
  );
};

export default Banner;
