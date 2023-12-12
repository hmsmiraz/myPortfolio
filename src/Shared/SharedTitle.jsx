
const SharedTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center my-8 md:w-4/12 pt-6">
        <h3 className="text-2xl py-2 uppercase text-black font-bold">{heading}</h3>
        <h6 className="text-base text-stone-500 font-medium">{subHeading}</h6>
      </div>
    );
};

export default SharedTitle;