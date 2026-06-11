import Image from "next/image";

const searches = [
  { place: "Istanbul, Turkey", img: "/s1.jpg" },
  { place: "Sydney, Australia", img: "/s2.jpg" },
  { place: "Baku, Azerbaijan", img: "/s3.jpg" },
  { place: "Male, Maldives", img: "/s4.jpg" },
];

export default function RecentSearches() {
  return (
    <section className="w-full mt-[30vh]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h3 className="text-xl  text-gray-900">Your recent searches</h3>
        <div className="mt-4 gap-6 flex items-center justify-between flex-wrap pb-2">
          {searches.map((s) => (
          <div key={s.place} className="flex items-center gap-3 min-w-[180 px]">
            <div className="relative w-12 h-12 rounded  overflow-hidden shrink-0">
              <Image src={s.img} alt={s.place} fill className="object-cover" />
            </div>
            <div>
            <div className="text-sm font-semibold text-gray-900 leading-tight">
              {s.place}
            </div>
            <div className="text-xs text-gray-500">325 places</div>
          </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}