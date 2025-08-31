import "../../lib/theme/theme.css";
import "../../lib/styles/index.css";

import Card from "../../lib/components/Card";

function App() {
  return (
    <Card
      cardName="Nubank"
      cardHolder="Larissa Aparecida Costa Soares"
      cardNumber="1234"
      expirationDate={new Date()}
      isDefault={true}
      flag="mastercard"
    />
  );
}

export default App;
