export default function Title({ title, description }) {
  return (
    <>
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
}
