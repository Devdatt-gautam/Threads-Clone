import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Lets talk about threads"
      />
      <UserPost
        likes={700}
        replies={239}
        postImg="/post2.png"
        postTitle="This is a random post"
      />
      <UserPost
        likes={1900}
        replies={491}
        postImg="/post3.png"
        postTitle="KNowledge is evil"
      />
      <UserPost likes={190} replies={81} postTitle="LOves to eat breakfast" />
    </>
  );
};

export default UserPage;
