const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const MINIMUM_BALANCE = 10;
const wallet = "39mE6bYktM1XAKKmB6WN971X3Sa1yGkHxtCTWMkVrwN2";

app.post("/webhooks", async (req, res) => {
  console.log("HELLO");
  const { body } = req;
  if (body?.type == "WITHDRAW") {
    const txn = body.nativeTransfers.find(x => x.fromUserAccount == wallet)
    if (!txn) { return; }
    const { data } = await axios.get(`https://api.helius.xyz/v0/${wallet}/balances?api-key=39mE6bYktM1XAKKmB6WN971X3Sa1yGkHxtCTWMkVrwN2`)
    const { nativeBalance: balanceRemaining } = data
    if (balanceRemaining < MINIMUM_BALANCE) {
      invokeAlertingFunction();
    }
  }
})

app.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
})