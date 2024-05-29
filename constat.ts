import { useSecondStore } from "./zu";

const getData = () => {
  const height = useSecondStore.getState().height;
  console.log(height);
};

export default getData;
