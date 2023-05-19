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
      </main>
    </main>
  );
}
