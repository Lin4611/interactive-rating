import { useState } from "react";
import star from "../imgs/icon-star.svg";
import banner from "../imgs/illustration-thank-you.svg";
const RatingCard = () => {
  const [rating, setRating] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const nums = [1, 2, 3, 4, 5];
  return (
    <>
      <section className="max-w-[400px] w-full bg-neutral-grey-950 rounded-3xl py-10 px-4 flex justify-center items-center shadow shadow-neutral-grey-500">
        <div
          className={`w-full ${
            isSubmit ? "flex" : "hidden"
          } flex-col gap-4 items-center`}
        >
          <img
            src={banner}
            alt="banner"
            className="w-[162px] h-full object-cover"
          />
          <div className="w-full bg-neutral-grey-900 text-primary-orange-500 rounded-3xl max-w-[200px] flex justify-center items-center py-2">
            You selected {rating} out of 5
          </div>
          <h2 className="text-neutral-white font-bold text-[32px]">
            Thanks You!
          </h2>
          <p className="text-neutral-grey-500 font-light tracking-wide">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
        <div className={`${isSubmit ? "hidden" : "flex"} flex-col gap-6`}>
          <div className="w-12 h-12 rounded-full bg-neutral-grey-900 flex justify-center items-center">
            <img src={star} alt="" className="w-4 h-4 object-cover" />
          </div>

          <div className="w-full flex flex-col gap-3 justify-between items-center">
            <h2 className="text-[32px] font-bold text-white">How did we do?</h2>
            <div className="flex justify-center items-center text-neutral-500 mt-6">
              <p className="text-center">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between px-4">
            {nums.map((num) => {
              return (
                <button
                  type="button"
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    rating === num
                      ? "bg-neutral-white text-neutral-grey-900"
                      : "bg-neutral-grey-900 text-neutral-grey-500 hover:bg-primary-orange-500 hover:text-neutral-white"
                  }`}
                  key={num}
                  onClick={() => {
                    setRating(num);
                    setIsAlert(false);
                }}
                >
                  {num}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center bg-primary-orange-500 text-neutral-grey-950 font-bold rounded-4xl py-2 hover:bg-neutral-white"
            onClick={() => (rating ? setIsSubmit(true) : setIsAlert(true))}
          >
            SUBMIT
          </button>
          <p className={`${isAlert ? 'block' : 'hidden'} text-primary-orange-500`}>No rating selected yet</p>
        </div>
      </section>
    </>
  );
};
export default RatingCard;
