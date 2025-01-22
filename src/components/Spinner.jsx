import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
  marginTop: "100px",
};
export const Spinner = ({ loading }) => {
  return (
    <>
      <ClipLoader
        color={"#026aa7"}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};
