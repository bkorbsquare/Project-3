import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (
    // <div class="login-container">
 
<div class="login-form logout mx-auto bg-dark p-5 rounded-lg shadow">
    <h2 class="text-center text-light">Signup</h2>
    
    <div class="mb-3 row ">
      <div class="col-sm-10 mx-auto">
        <input type="text" class="form-control "placeholder="Username" id="username"></input>
      </div>
    </div>
 <div class="mb-3 row ">
    <div class="col-sm-10 mx-auto">
      <input type="text" class="form-control"placeholder="Email" id="signupemail"></input>
    </div>
  </div>
  <div class="mb-3 row">
    <div class="col-sm-10 mx-auto">
      <input type="password" class="form-control"  placeholder="Password" id="signuppassword"></input>
    </div>
    
    <div class="form-group">
    <button class="btn btn-dark formbtn" id="sighupbtn" type="submit">Sign Up</button>
  </div>
  </div>
</div>
  );
};

export default Home;