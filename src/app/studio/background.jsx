export default function Background() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 my-8">
      <video
        className="w-full h-auto rounded-xl shadow-lg object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videocard.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
