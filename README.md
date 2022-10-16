# NodeServerWebHooks
Node.js server for Helius Webhooks

We use a Node.js server to respond to/interact with webhooks created using the Helius API and service. 
This allows us to listen to on-chain events and react to specific events.
This specific implementation alerts you once a sepcific account has a balanace below a pre-specified amount. 
It only checks the account's balance every time that money is withdrawn from the account.

Process
- Created API key and custom webhooks with helius's beta webhooks service(https://dev.helius.xyz/webhooks/). 
- The Node.JS server uses Helius's Solana API which gives us proxy access to Solana's RPC methods
