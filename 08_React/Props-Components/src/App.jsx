import "./App.css";
import Card from "./Card";

function App() {
  const User = function (name, age, role, desc) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.desc = desc;
  };

  const user1 = new User("Pramod", 25, "FSD", "He's fully skilled in FSD");
  const user2 = new User(
    "Harman",
    27,
    "Backend-Developer",
    "He's fully skilled in Backend"
  );
  const user3 = new User("David", 26, "DSA", "He's fully skilled in DSA");

  return (
    <div className="flex flex-col">
      <div className="text-center text-5xl text-white bg-zinc-400 p-4 max-w-[800px] uppercase m-auto rounded-md mt-12 ">
        <h1>Props and Components</h1>
      </div>
      <div className="card_container flex flex-col md:flex-row lg:flex-row justify-around">
        <Card user={user1} />
        <Card user={user2} />
        <Card user={user3} />
      </div>
    </div>
  );
}

export default App;
