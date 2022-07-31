import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Image from "next/image";

const Results = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center text-5xl">Results</h1>
        <Podium />
      </div>
    </>
  );
};

const Podium = () => {
  return (
    <>
      <ul className="flex justify-center gap-16 h-52">
        <li className="flex flex-col justify-end text-center">
          <p>3</p>
          <Image
            className="rounded-2xl"
            width="100px"
            height="100px"
            src="https://cdn.myanimelist.net/images/characters/10/238647.jpg"
            alt=""
          />
          <p>Test</p>
        </li>
        <li className="flex flex-col justify-start text-center">
          <p>1</p>
          <Image
            className="rounded-2xl "
            width="100px"
            height="100px"
            src="https://cdn.myanimelist.net/images/characters/10/238647.jpg"
            alt=""
          />
          <p>Test</p>
        </li>
        <li className="flex flex-col justify-center text-center">
          <p>2</p>
          <Image
            className="rounded-2xl"
            width="100px"
            height="100px"
            src="https://cdn.myanimelist.net/images/characters/10/238647.jpg"
            alt=""
          />
          <p>Test</p>
        </li>
      </ul>
    </>
  );
};

const PodPlace = () => {
  return (
    <>
      <li className="flex flex-col justify-center text-center">
        <p>2</p>
        <Image
          className="rounded-2xl"
          width="100px"
          height="100px"
          src="https://cdn.myanimelist.net/images/characters/10/238647.jpg"
          alt=""
        />
        <p>Test</p>
      </li>
    </>
  );
};

export default Results;
