import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../store/selectors/selectors-filter";
import {clearFilter, removeFilter} from '../store/actions/actions-filters'
import { Badge } from "../UI/Badge";
import { Card } from "../UI/Card";
import { Stack } from "../UI/Stack";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilter.map((filter) => {
            return <Badge onClear={() => dispatch(removeFilter(filter))} key={filter} variant="clearable">{filter}</Badge>;
          })}
        </Stack>

        <button onClick={() => dispatch(clearFilter)} className="link">Clear</button>
      </div>
    </Card>
  );
};

export { FilterPanel };
