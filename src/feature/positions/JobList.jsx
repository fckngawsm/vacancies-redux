import { useDispatch } from "react-redux";
import { addFilter } from "../filter/slice-filter";
import { JobPosition } from "./JobPosition";
import { usePositions } from "../../hooks/use-positions";
import { useFetchPostions } from "../../hooks/use-fetch-positions";

const JobList = () => {
  useFetchPostions();

  const positions = usePositions();
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  )
}

export { JobList };
