import GithubPopup from "@/Authentication/GithubPopup";
import GooglePopup from "@/Authentication/GooglePopup";

const Home = () => {
  return (
    <>
    <div className="flex items-center justify-center gap-2">
    <GooglePopup></GooglePopup>
    <GithubPopup></GithubPopup>
    </div>
    </>
  );
};

export default Home;
