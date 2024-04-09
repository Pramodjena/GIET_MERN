function Card(user) {
  const { name, age, role, desc } = user.user;

  return (
    <div className="main_container mt-8">
      <div className="card max-w-sm border border-b-8 border-white text-white bg-lime-700 rounded-md">
        <div className="img_container w-fit rounded-md">
          <img
            className="w-sm rounded-t-md"
            src="https://avatars.githubusercontent.com/u/103576706?s=400&u=4b851b04d278ddc08aa1f6a10ccf949ad9be9fa2&v=4"
            alt="profile"
          />
        </div>
        <div className="text_container px-2 font-bold">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Role: {role} </p>
          <p>Description: {desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
