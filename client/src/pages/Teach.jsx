
import { useQuery } from '@apollo/client';
import {QUERY_VERSES, QUERY_USER} from '../utils/queries';
import VerseList from '../components/VerseList';

const Teach = () => {
  const { loading, data } = useQuery(QUERY_VERSES);
    return (
      <main>
       <div >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <VerseList
              title="Explore Teaching Topics"
              type="true"
            />
           )}  
      </div>
      </main>
    );
  };
  export default Teach;