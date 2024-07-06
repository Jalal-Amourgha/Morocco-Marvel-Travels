import { FaStar, FaStarHalf } from "react-icons/fa6";

interface RatingProps {
  rate: string;
  color?: string;
  value?: boolean;
  classes?: string;
}

export const Rating = ({
  rate,
  color = "F2994A",
  value = true,
  classes,
}: RatingProps) => {
  const handleRaiting = (n: any) => {
    let arr = [];
    let stars = n;

    // returning number into interger Number
    if (!Number.isInteger(n)) {
      if (n === Math.fround(n)) {
        stars = n;
      } else if (+(n + "").split(".")[1] > 5) {
        stars = +(n + "").split(".")[0] + 0.5;
      } else {
        stars = (n + "").split(".")[0];
      }
    }

    // creating the stars array
    for (let i = 1; i <= 5; i++) {
      if (stars >= 1) {
        arr.push(<FaStar className={`text-[#${color}]`} />);
      } else if (stars === 0.5) {
        arr.push(<FaStarHalf className={`text-[#${color}]`} />);
        stars = stars - 0.5;
      } else if (stars <= 0) {
        arr.push(<FaStar className="text-gray" />);
      }

      stars = stars - 1;
    }

    return arr.map((icon, index) => <div key={index}>{icon}</div>);
  };
  return (
    <div className={`flex items-center ${classes} gap-1`}>
      {value ? <span>{rate}</span> : ""}
      {handleRaiting(rate)}
    </div>
  );
};
