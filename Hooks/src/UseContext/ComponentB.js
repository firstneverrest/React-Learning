// The only way to use props from parent component is using UserContext.Consumer
// This not require useContext 
import UserContext from "./UserContext";

const ComponentB = () => {
  return (
    <UserContext.Consumer>
      {(context) => (
        <div>
          <h3>ComponentB</h3>
          <h4>{context.name}</h4>
          <button onClick={() => context.setName("Chitsanupong")}>
            Change Name to Chitsanupong
          </button>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default ComponentB;
