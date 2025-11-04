const PostList = ({posts, onEditClick, onDeleteClick}) => {
  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((post) => (
          <>
            <div key={post.id} className="flex gap-2">
              <li
                className="bg-pink-500 text-white mb-2 text-bold py-2 rounded w-[400px] mx-auto"
                key={post.id}
              >
                {post.id} - {post.title}
              </li>{" "}
              <div className="flex gap-2 py-2">
                <button className="px-3 py-[5px] border border-green-500 rounded hover:bg-green-500 hover:border-green-500 transition" onClick={()=>onEditClick(post)}>
                  edit
                </button>
                <button className="px-3 py-1 border border-red-500 rounded hover:bg-red-500 hover:border-red-500 transition" onClick={()=>onDeleteClick(post.id)}>
                  delete
                </button>
              </div>
            </div>
          </>
        ))
      ) : (
        <span>Not Found Data</span>
      )}
      <li></li>
    </ul>
  );
};

export default PostList;
