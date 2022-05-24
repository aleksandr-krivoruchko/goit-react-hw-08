import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import avatar from '../../img/avatar.jpg';

export function UserMenu() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    isLoggedIn && (
      <div className="user">
        <img src={avatar} alt="" width="30px" />
        <p>{`Greetings, ${userName}`}</p>
        <button
          type="button"
          className="logout"
          onClick={() => dispatch(authOperations.logOut())}>
          LogOut
        </button>
      </div>
    )
  );
}