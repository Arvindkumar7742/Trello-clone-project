import { ScaleLoader } from "react-spinners";

const ScaleLoading = ({ loading }) => {
  return (
    <ScaleLoader
      height={40}
      width={4}
      loading={loading}
      color="#e2dada"
      className="mx-auto mt-[50px]"
    />
  );
};

export default ScaleLoading;
