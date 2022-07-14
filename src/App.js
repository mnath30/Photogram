import "./App.css";
import { Router } from "./router/Router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadPosts } from "./features/posts/postSlice";
import { loadUsers } from "./features/users/userSlice";
import { PostUploadModal, Modal, ProfileModal, Navigation } from "./Components";

function App() {
  const dispatch = useDispatch();
  const { encodedToken, userAccountName } = useSelector((store) => store.auth);
  const { displayModal } = useSelector((store) => store.posts);
  const { editProfile } = useSelector((store) => store.users);

  useEffect(() => {
    if (encodedToken && userAccountName) {
      dispatch(loadPosts());
      dispatch(loadUsers());
    }
  }, [encodedToken, userAccountName, dispatch]);

  return (
    <div className="App">
      {encodedToken && <Navigation />}
      <Router />
      {displayModal && (
        <Modal>
          <PostUploadModal />
        </Modal>
      )}
      {editProfile && (
        <Modal>
          <ProfileModal />
        </Modal>
      )}
    </div>
  );
}

export default App;
