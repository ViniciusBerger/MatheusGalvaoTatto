export default function Background() {
  return (
    <video
      className="m-5 ml-10 text-center w-full sm:w-3/4 md:w-2/5 max-h-1/4 object-cover rounded-xl shadow-lg"
      autoPlay
      loop
      muted
    >
      <source src="/videocard.mp4" type="video/mp4" />
      {/* Ensure the file exists in the public folder */}
      Your browser does not support the video tag.
    </video>
  );
}