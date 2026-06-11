import Image from "next/image";

export default function BookFlight() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between">
        <div>
        <h2 className="text-2xl font-black text-gray-900">Fall into travel</h2>
        <p className="mt-1 text-sm text-gray-600 max-w-xl">
            Going somewhere to celebrate this season? Whether you're going home
            or somewhere to roam, we've got the travel tools to get you to your destination.
        </p>
          </div>
        <button className="shrink-0 rounded-lg border border-gray-300 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50">See All
        </button>
        </div>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative bg-emerald-300 rounded-2xl p-6 flex flex-col justify-between">
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg text-sm font-semibold shadow"> From<br/><span className="text-black">$700</span></div>

        <div>
        <h3 className="text-2xl font-bold text-gray-900">
        Backpacking <br/> Sri Lanka
        </h3>
        <p className="mt-4 text-sm text-gray-800">
        Traveling is a unique experience as it's the best way to unplug from
        the pushes and pulls of daily life. It helps us forget about our
        problems, frustrations and fears at home.
        </p>
        </div>
        <button className="mt-6 bg-white py-3 rounded text-sm font-semibold hover:bg-gray-100 text-black">Book Flight
        </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
        <div className="relative h-[140px] sm:h-[160px] rounded-xl overflow-hidden"><img src="/b1.jpg" /></div>
        <div className="relative h-[140px] sm:h-[160px] rounded-xl overflow-hidden"><img src="/b2.jpg" /></div>
        <div className="relative h-[140px] sm:h-[160px] rounded-xl overflow-hidden"><img src="/b3.jpg" /></div>
        <div className="relative h-[140px] sm:h-[160px] rounded-xl overflow-hidden"><img src="/b4.jpg" /></div>
          
          </div>

        </div>

      </div>
    </section>
  );
}

