import {catAndDogApi} from "./assets/api/api";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
const App = () => {
  const [score, setScore] = useState(0);
  const {isLoading, error, data, refetch} = useQuery({
    queryKey: ["DogCatapi"],
    queryFn: catAndDogApi,
  });
  const dogImgDetector = (isDog) => {
    if (isDog) {
      setScore((prev) => prev + 1);
    }
    refetch();
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  return (
    <div className="flex flex-col items-center gap-[80px] m-auto">
      <div className="flex flex-wrap justify-center gap-[50px] m-auto max-w-[1400px]">
        {data.map((res) => (
          <img
            onClick={() => dogImgDetector(res.isDog)}
            className="blur-sm w-[300px] h-[300px] cursor-pointer"
            src={res.url}
            alt="photos"
          />
        ))}
      </div>
      <p className="font-bold text-[30px]">score: {score}</p>
    </div>
  );
};

export default App;
