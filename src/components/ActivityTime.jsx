import PropTypes from "prop-types";

export const ActivityTime = ({ id, hours, prev, color, icon }) => {
  return (
    <>
      {/* We put each prop in its place */}
      <section
        style={{ backgroundColor: `${color}` }}
        className="rounded-tl-[20px] rounded-tr-[20px] rounded-br-[50px] rounded-bl-[50px] font-light relative w-full min-h-[210px] desktop:h-full "
      >
        <img className="ml-auto pr-5" src={`/${icon}`} alt="" />

        <div className="bg-[#1D204B] hover:bg-[#34397B] duration-300 ease-out text-white rounded-[20px] p-7 absolute bottom-0 right-0 w-full cursor-pointer">
          <div className="flex justify-between mb-8">
            <h4 className="text-xl">{id}</h4>
            <button className="opacity-60 text-2xl hover:opacity-100 transition duration-300 ease-out">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </button>
          </div>
          <div className="flex justify-between desktop:flex-col ">
            <h3 className="text-4xl desktop:text-5xl">
              <span>{hours}</span>hrs
            </h3>
            <p className="text-md mt-4 opacity-60">
              Last Week - <span>{prev}</span>hrs
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

ActivityTime.propTypes = {
  title: PropTypes.string.isRequired,
  hours: PropTypes.number.isRequired,
  lastWeek: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

ActivityTime.defaultProps = {
  title: "Others",
  hours: 0,
  lastWeek: 0,
  color: "#D9D6CE",
  icon: "icon-work.svg",
};
