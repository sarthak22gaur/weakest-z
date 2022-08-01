import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      {/* <div className="relative"> */}
      <div className="flex justify-center">
      <div className="flex flex-col items-center max-w-lg text-justify leading-9 text-gray-400 text-2xl m-4 p-4">
        <div className="">
          <h1 className="font-bold text-3xl">Why?</h1>
          <p className="pt-4 text-white">
            Cuz everyone knows Chichi is the strongest, so it was time to find
            out who is the weakest.
          </p>
        </div>
        <div>
          <h1 className="text-xl mt-12 font-bold text-gray-400">
            This is made with the t3 stack(trpc, tailwind typescript)
            bootstraped by create-t3-app
          </h1>
          <p className="text-lg">
            Learn more at 👉🏻{" "}
            <a
              className="text-cyan-500 font-semibold"
              href="https://init.tips/"
            >
              init.tips
            </a>
          </p>
        </div>
        <div className="mt-16 text-lg">
          <p>
            Inspired from Theo&apos;s roundest pokemon polling site that he
            built during one of his livestreams👉🏻{" "}
            <span className="font-bold tracking-wide">
              <a className="text-cyan-500" href="https://roundest.t3.gg/">
                roundest.t3.gg
              </a>
            </span>
          </p>
        </div>
      </div>
      </div>
      {/* </div> */}
    </>
  );
}
