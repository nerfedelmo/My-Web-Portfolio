import { activities } from "../data/activities";

function ActivityCard({ item }) {
  return (
    <div className="project-card-bg group flex flex-col w-full rounded-3xl hover:border hover:border-slate-300 transition-all duration-300 hover:scale-105 overflow-hidden shadow-[5px_5px_30px_rgba(0,0,0,0.7)] p-4">
      {/* Image area */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[linear-gradient(to_bottom_right,#06b6d433,#d946ef33)] flex justify-center items-center">
        {item.isCarousel ? (
          <>
            <img
              src={item.carouselImages[0]}
              alt="Activity 1"
              className="slider-img-1 absolute w-3/4 opacity-0 transition-transform duration-500 group-hover:scale-125 object-contain"
            />
            <img
              src={item.carouselImages[1]}
              alt="Activity 2"
              className="slider-img-2 absolute w-3/4 opacity-0 transition-transform duration-500 group-hover:scale-125 object-contain"
            />
            <img
              src={item.carouselImages[2]}
              alt="Activity 3"
              className="slider-img-3 absolute w-3/4 opacity-0 transition-transform duration-500 group-hover:scale-125 object-contain"
            />
            <img
              src={item.carouselImages[3]}
              alt="Activity 4"
              className="slider-img-4 absolute w-3/4 opacity-0 transition-transform duration-500 group-hover:scale-125 object-contain"
            />
          </>
        ) : (
          <img
            src={item.thumbnail}
            alt="Project Thumbnail"
            className={`${item.thumbnail.includes("assertion") ? "w-1/2" : "h-full"} transition-transform duration-500 group-hover:scale-125`}
          />
        )}
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col grow">
        <h3 className="whiteText text-xl font-bold">{item.title}</h3>
        {item.theme && <hr className="my-2" />}
        <p className="smallText text-sm mt-2 leading-relaxed">
          {item.issuer.includes("\n") ? (
            item.issuer.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < item.issuer.split("\n").length - 1 && <br />}
              </span>
            ))
          ) : (
            item.issuer
          )}
        </p>
        {item.theme && (
          <>
            <br />
            <p className="smallText text-sm mt-2 leading-relaxed">
              <strong>Theme:</strong> {item.theme}
            </p>
          </>
        )}
      </div>

      {/* Footer */}
      {item.badgeUrl ? (
        <div className="mt-auto pt-6 flex justify-between items-center">
          <small className="smallText text-sm">{item.date}</small>
          <div className="mt-auto pt-6 flex justify-end">
            <a
              href={item.badgeUrl}
              target="_blank"
              rel="noreferrer"
              className="glow-button flex gap-2 items-center text-sm font-bold cursor-pointer bg-black text-white px-6 py-2 rounded-4xl border border-transparent transition-all duration-300 active:scale-95"
            >
              View Badge
              <img src="/images/new-window-svgrepo-com.png" alt="Details" className="w-4 h-4 invert" />
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-auto pt-6 flex items-left">
          <small className="smallText text-sm">{item.date}</small>
        </div>
      )}
    </div>
  );
}

export default function Activities() {
  return (
    <section id="activities" className="mb-20 px-10">
      <h1 className="text-3xl font-black mb-10 text-center xl:text-left xl:pl-60">
        ACTIVITIES & CERTIFICATIONS
        <div className="grow h-0.5 bg-slate-400 mt-4"></div>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-15 max-w-8xl mx-auto lg:px-50 justify-items-center mb-7">
        {activities.map((item, index) => (
          <ActivityCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
