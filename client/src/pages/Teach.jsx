
import { useQuery } from '@apollo/client';
import {QUERY_VERSES, QUERY_USER} from '../utils/queries';
import VerseList from '../components/VerseList';

const Teach = () => {
  // const { loading, data } = useQuery(QUERY_VERSES);
  // const verses = data?.verses || [];
  // const { loading: userLoading, data: userData } = useQuery(QUERY_USER);
  // const profile = userData?.me || {};
    return (
      <main>
       <div >
          {/* {loading ? (
            <div>Loading...</div>
          ) : ( */}
            <VerseList
              verses1=""
              profile1=""
              title="Explore Teaching Topics"
              type="true"
            />
          {/* )} */}
      </div>
      </main>
    );
  };
  export default Teach;