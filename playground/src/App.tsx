import "../../lib/theme/theme.css";
import "../../lib/styles/index.css";

import FormCard from "../../lib/components/FormCard";

function App() {
  return (
    <>
      <FormCard
        icon={"Pipette"}
        description={"Hi"}
        selected={true}
        // style={{ marginBottom: 10 }}
      />
      <FormCard
        icon={"Pipette"}
        description={"Hi"}
        style={{ marginBottom: 10 }}
      />
      <FormCard
        icon={"Pipette"}
        description={"Hi"}
        style={{ marginBottom: 10 }}
      />
    </>
  );
}

export default App;
