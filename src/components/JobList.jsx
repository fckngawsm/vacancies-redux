import { useSelector, useDispatch } from "react-redux";
import { selectVisiblePositions } from "../store/selectors/selectors-positions";
import { selectFilter } from "../store/selectors/selectors-filter";
import { addFilter } from "../store/actions/actions-filters";
import { JobPosition } from "../components/JobPosition";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilter)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
