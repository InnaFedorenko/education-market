import { useQuery } from '@apollo/client';
import {QUERY_VERSES} from '../utils/queries';
import VerseList from '../components/VerseList';

const Learn = () => {
  const { loading, data } = useQuery(QUERY_VERSES);
  const verses = data?.verses || [];
    return (
      <main>
       <div >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <VerseList
              verses={verses}
              title="Explore Learning Topics"
              type="false"
            />
          )}
      </div>
      </main>
    );
  };
  export default Learn;