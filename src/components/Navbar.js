import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/authActions";
import { fetchCategory } from "../redux/actions/categoryActions";
import { fetchProfile } from "../redux/actions/profileAction";

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {profile} = useSelector(state => state.profileR)
  const {isLogin} = useSelector(state => state.authR)
  const {auth} = useSelector(state => state.authR)

  useEffect(() => {
    dispatch(fetchProfile(isLogin ? auth.access_token : ""))
  }, [])
  return (
    <header className="sticky-top">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            <img src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.6435-9/80017279_2500547220233420_1875036224394100736_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFg1ifFo6ZF1FQZyuShyfaTDcnh98phrb0NyeH3ymGtvTMxKFiWTBanQExO1MVwdvN4KXskZl7-YX0x_k6Y4ti0&_nc_ohc=VCUITwXvoUAAX8Dm0DL&_nc_ht=scontent.fpnh10-1.fna&oh=00_AfCiDKqKoQjfrSkGCaHHwzrQJgghrqrLeDwBPF_6vptyow&oe=649D703D" alt="" width={50} className="rounded-circle mx-2" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/editor"}>
                  Editor
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/datatable"}>
                  Data Table
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/products"}>
                  Products
                </Link>
              </li>
            </ul>
            <Link to={"/profile"}>
              <img 
                src={isLogin ? profile.avatar : "https://eduport.webestica.com/assets/images/avatar/01.jpg"}
                alt="" 
                width={40} 
                className="rounded-circle mx-3 my-2" />
            </Link>
            <button 
              class="btn btn-outline-success"
              onClick={() => isLogin ? 
                dispatch(logout())
                : 
                navigate("/login")}
            >
              {
                isLogin ? "Logout" : "Login"
              }
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
