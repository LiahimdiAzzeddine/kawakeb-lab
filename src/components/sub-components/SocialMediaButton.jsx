export const SocialMediaButton = ({ d, color, title, link }) => {

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="hover:scale-110" onClick={() => handleClick()}>
      <button
        type="button"
        className={`inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transform `}
        style={{ backgroundColor: color }}
        aria-label={title ? title : "Partager sur les réseaux sociaux"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d={d} />
        </svg>
      </button>
    </div>
  );
};

export default SocialMediaButton;
