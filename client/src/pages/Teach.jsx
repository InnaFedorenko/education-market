
import { useQuery } from '@apollo/client';
import {QUERY_VERSES} from '../utils/queries';
import VerseList from '../components/VerseList';

// import projects from '../data/projects'; // Import the updated projects array
// import gitLogo from '/public/img/logos/github.svg';

const Teach = () => {
  const { loading, data } = useQuery(QUERY_VERSES);
  const verses = data?.verses || [];
    return (
      <main>
       <div >
        {/* <h2>Explore Teaching</h2>
        <div > */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <VerseList
              verses={verses}
              title="Explore Teaching Topics"
              type="false"
            />
          )}
        {/* </div> */}
      </div>
      </main>
    );
  };
  export default Teach;