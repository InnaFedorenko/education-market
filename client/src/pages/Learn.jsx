import { useQuery } from '@apollo/client';
import {QUERY_VERSES, QUERY_USER} from '../utils/queries';
import VerseList from '../components/VerseList';

const Learn = () => {
  // const { loading: loading, data: data, refetch: refetch } = useQuery(QUERY_VERSES);
  // const verses = data?.verses || [];
  // const { loading: userLoading, data: userData , refetch: userRefetch} = useQuery(QUERY_USER);
  // const profile = userData?.me || {};
  //const clientName = profile.name;
    return (
      <main>
       <div >
          {/* {loading ? (
            <div>Loading...</div>
          ) : ( */}
            <VerseList
              verses1= "" //{verses}
              profile1="" //{profile}
              title="Explore Learning Topics"
              type="false"
            />
          {/* )} */}
      </div>
      </main>
    );
  };
  export default Learn;