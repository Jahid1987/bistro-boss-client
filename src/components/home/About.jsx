import chefService from "../../assets/home/chef-service.jpg";
const About = () => {
  return (
    <div
      className="my-4 md:my-6 lg:my-8 space-y-2 md:p-12 lg:p-24"
      style={{
        background: `url(${chefService}) lightgray -553.5px 0px / 183.864% 134.833% no-repeat`,
      }}
    >
      <div className="bg-white md:px-20 lg:px-40 md:py-12 lg:py-24 text-center space-y-3">
        <h3 className="text-[#151515] text-2xl md:text-3xl lg:text-4xl">
          Bistro Boss
        </h3>
        <p className="text-[#151515] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default About;
