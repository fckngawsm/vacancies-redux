import { useSelector } from 'react-redux';
import { selectAllPositions } from 'store/selectors/selectors-positions';
import { JobPosition } from './JobPosition';

const JobList = () => {
  const positions = useSelector(selectAllPositions);
  console.log(positions)
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};