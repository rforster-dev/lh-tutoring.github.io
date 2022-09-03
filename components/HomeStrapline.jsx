export default function HomeStrapline() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-black-900">
            Contact me now to see my availability
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Lorem ipsum lorem ipsum
          </p>
          <a
            href="https://forms.gle/tyFeJdAa73PqZjNaA"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-700 border border-blue-700 rounded hover:bg-transparent hover:text-blue-700 active:text-indigo-500 focus:outline-none focus:ring"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
