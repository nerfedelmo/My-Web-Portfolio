import { contacts } from "../data/contacts";

export default function Contact() {
  return (
    <section id="contact" className="mb-20 px-10">
      <h1 className="text-3xl font-black mb-10 text-center xl:text-left xl:pl-60">
        CONTACT
        <div className="grow h-0.5 bg-slate-400 mt-4"></div>
      </h1>

      <div className="contact-card-bg w-full mx-auto flex flex-col xl:max-w-2/3 xl:flex-row justify-around items-center rounded-2xl px-8 py-12 shadow-[10px_10px_40px_rgba(0,0,0,0.4)] ring-1 ring-slate-900/5 bg-white gap-10">
        <div className="flex justify-center items-center shrink-0">
          <img
            src="/images/IMG_2792.jpg"
            alt="Joshua Manansala"
            className="w-80 h-auto xl:w-100 rounded-2xl object-cover shadow-2xl"
          />
        </div>

        <div className="flex-1 w-full max-w-2xl">
          <h2 className="whiteText text-xl font-bold mb-6 text-center xl:text-left">
            Connect with me here...
          </h2>

          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target={contact.url.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
            >
              <div
                className={`rgb-hover-card bg-slate-300 p-6 rounded-xl shadow-sm border border-slate-400 cursor-pointer hover:-translate-y-1 transition-transform ${
                  index === contacts.length - 1 ? "mb-0" : "mb-6"
                }`}
              >
                <div className="flex items-center gap-6 mx-auto">
                  <div
                    dangerouslySetInnerHTML={{ __html: contact.icon }}
                    className="shrink-0 flex items-center justify-center"
                  />
                  <div className="overflow-hidden">
                    <h3 className="text-md font-bold uppercase">{contact.label}</h3>
                    <p className="smallText text-sm truncate">{contact.display}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
