import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// TODO Sekcja 12. Appendix A - Build the UI

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/*    NAVBAR*/}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                Signin
              </button>
              <button className="border p-1 px-4 rounded">Signup</button>
            </div>
          </div>
        </nav>
        {/*    NAVBAR*/}
        {/*HEADER*/}
        <div className="h-96 overflow-hiddern">
          <div className="bg-center bg-gradient-to-r from-blue-950 to-cyan-500 h-full flex justify-center items-center">
            <h1 className="text-7xl text-white capitalize text-shadow text-center">
              Milestones Grill (Toronto)
            </h1>
          </div>
        </div>

        {/*HEADER*/}

        {/*  DESCRIPTION PORTION*/}

        <div className="felx m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w=[70%] rounded p-3 shadow">
            {/*  RESTAURANT NAVBAR*/}
            <nav className="flex text-reg border-b pb-2">
              <a href="" className="mr-7">
                Overview
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>
            {/*  RESTAURANT NAVBAR*/}
            {/*  TITLE*/}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milestone Grill</h1>
            </div>
            {/*  TITLE*/}
            {/*  RATING*/}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <p className="text-reg ml-4">600 Review</p>
            </div>

            {/*  RATING*/}
            {/*  DESCRIPTION*/}
            <div className="mt-4">
              <p className="text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
            </div>
            {/*  DESCRIPTION*/}
            {/*  IMAGES*/}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                5 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1684238228/static-takeaway-com/images/restaurants/pl/31NQ7R7N/products/zestaw_1"
                  alt="Food img"
                  className="w-56 h-44 mr-1 mb-1"
                />
                <img
                  src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1684238228/static-takeaway-com/images/restaurants/pl/31NQ7R7N/products/zestaw_5"
                  alt="Food img"
                  className="w-56 h-44 mr-1 mb-1"
                />
                <img
                  src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1684238228/static-takeaway-com/images/restaurants/pl/31NQ7R7N/products/zestaw_11"
                  alt="Food img"
                  className="w-56 h-44 mr-1 mb-1"
                />
                <img
                  src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1684238228/static-takeaway-com/images/restaurants/pl/31NQ7R7N/products/zestaw-hit"
                  alt="Food img"
                  className="w-56 h-44 mr-1 mb-1"
                />
                <img
                  src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1684238228/static-takeaway-com/images/restaurants/pl/31NQ7R7N/products/swiateczny-luksusowy500x500-1"
                  alt="Food img"
                  className="w-56 h-44 mr-1 mb-1"
                />
              </div>
            </div>

            {/*  IMAGES*/}

            {/*  REVIEWS*/}

            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                {/*  REVIEW CARD*/}
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">MJ</h2>
                      </div>
                      <p className="text-center">Michael Jordan</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  REVIEW CARD*/}
              </div>
            </div>

            {/*  REVIEWS*/}
          </div>
        </div>

        {/*  DESCRIPTION PORTION*/}
      </main>
    </main>
  );
}
