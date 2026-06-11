import Image from "next/image";

const trips = [
  { title: "Melbourne", subtitle: "An amazing journey", price: 700, img: "/p1.jpg" },
  { title: "Paris", subtitle: "A Paris Adventure", price: 600, img: "/p2.jpg" },
  { title: "London", subtitle: "London eye adventure", price: 350, img: "/p3.jpg" },
  { title: "Columbia", subtitle: "Amazing streets", price: 700, img: "/p4.jpg" },
];

export default function Card() {
  return (
    <section className="w-full bg-white">
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

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trips.map((t) => (<div key={t.title} className="group overflow-hidden rounded-lg">
              <div className="relative h-[320px] w-full">
                <Image src={t.img} alt={t.title} fill className="object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <div className="text-base font-bold">{t.title}</div>
                      <div className="text-[11px] text-white/80">{t.subtitle}</div>
                    </div>
                    <div className="text-sm font-bold">${t.price}</div>
                  </div>
                  <button className="mt-3 w-full rounded-lg bg-emerald-200/80 py-2 text-xs font-semibold text-gray-900 hover:bg-emerald-200">Book a Hotel</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}