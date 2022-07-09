import "./App.css";
import { Router } from "./router/Router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadPosts } from "./features/posts/postSlice";
import { loadUsers } from "./features/users/userSlice";
import { PostUploadModal, Modal } from "./Components";

function App() {
  const dispatch = useDispatch();
  const { encodedToken, userAccountName } = useSelector((store) => store.auth);
  const { displayModal } = useSelector((store) => store.posts);

  useEffect(() => {
    if (encodedToken && userAccountName) {
      dispatch(loadPosts());
      dispatch(loadUsers());
    }
  }, [encodedToken, userAccountName, dispatch]);

  return (
    <div className="App">
      <Router />
      {displayModal && (
        <Modal>
          <PostUploadModal />
        </Modal>
      )}
    </div>
  );
}

export default App;
