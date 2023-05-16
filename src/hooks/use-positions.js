import { useSelector } from "react-redux";
import { selectVisiblePositions } from "../feature/positions/slice-positions";

import { selectFilter } from "../feature/filter/slice-filter";
export const usePositions = () => {
  const currentFilter = useSelector(selectFilter);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilter)
  );

  return positions;
};
