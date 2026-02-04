import Heading from "../Heading";


function OurProcess() {
  return (
    <div className="text-white mx-auto container">
      <Heading
        text="our process"
        level={6}
        className="mb-5 text-white"
      />
      <Heading text="We Don’t Guess <br> We Strategize" className="gradient-blue-white" level={2} />
    </div>
  );
}

export default OurProcess;
