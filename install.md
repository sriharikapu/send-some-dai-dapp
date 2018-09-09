Inspiration
Both Eduardo and I are from the Dominican Republic. It's cumbersome to send money to family and friends in our home country. The banking and remittances systems take a couple of days, and charge anywhere from 6 to 12% in transfer fees.

Transfer of digital currency is already possible via multiple distributed ledger networks, but it requires certain knowledge: how to setup a wallet, how to properly manage private keys, keeping mnemonic recovery seeds secure, understanding what gas is, etc.

What it does
The app allows folks that are not tech-savvy to receive stable funds in a straightforward and easy way.

The app has the following actors:
Sender. This person knows how to use Ethereum and Metamask. Can interact with our dApp that exchanges ETH for Dai, and generates a disposable wallet for sending the funds.
Receiver. Does not know about ETH/Crypto. Receives a link that redirects them to a mobile app with a one-time use wallet. The app is very simple, only shows the balance sent, and a transfer button.
Local Exchange Community. Practically every major city has a local cryptocurrency trading community. These are also tech-savvy folks that will exchange stable coins for actual fiat. Probably earning a small 1-2% commision on the exchange rate from USD/Pesos.
How we built it
We had a few ideas we discussed. Ended up going for SendDai because it was doable within the weekend. We wrote down the idea on Friday night, and sent an e-mail to Andy with the outline so he could start thinking about the interface.

We defined the major building blocks:

Mockups of the interface. What are the most basic features we needed for an MVP
What technology would we use? we decided to go with Javascript and React since they're great for prototyping and both Ed and I use it in our day-to-day jobs
How would we store private keys for the temporary wallets? there's always a security risk
We were tired from travel, so we went to our hotel after the kickoff and started again early next morning

The next morning we started building the basic infrastructure:

Bought the domain
Setup a slack channel
Started defining the workflow / screens
Divided the work between web app and interaction with smart contracts
Amhed worked on front-end and Eduardo worked mostly with web3.js
By the afternoon Andy had some great designs and we started decorating all the screens with nicer colors and layouts
Stuff we worked on next:
Logging in via Metamask instead of username and password
How to convert the Dai, would we need to create CDPs? or simply buy Dai from the market?
How to keep state in the whole app
How to execute all transactions (dai wrap, allowance, conversion, wallet creation, and transfer) with good UX?
We worked steadily until Sunday morning, it's about 7 AM as I write this recap. We can still go on, but our productivity isn't that great :D
Work we completed:
The sender can send funds via Eth/Dai to a disposable wallet
We generate a link that can used to retrieve said funds
The screens for the mobile app, to access and transfer from the disposable wallet
Work we couldn't complete
We couldn't package the mobile screens into an app that would handle state locally. Time ran out
Challenges we ran into
What happens when the operation is not atomic. i.e. one of the 4 transactions fail. How does the UX communicate to the customer?
DEX APIs. We tried different APIs from RadarRelay, TheOcean, and the base 0xConnect library, but settled for placing the order directly on the Oasis.
Gas prices. If gas fees get too high, using our app is no better than using a traditional bank, at least in terms of fees paid to move the money.
Mobile application. We ran out of time.
Accomplishments that we're proud of
Got an MVP off the ground in a day
Defined a clear path to possible future improvements
What we learned
General
We made friends at the hackathon. Found other folks that had the same problems as we did related to scope. Next hackathon will spend more time team building before starting to code.
Technical
Eduardo learned about web3 and interacting with smart contracts.
Amhed learned how to configure Redux + React-Router from scratch
Viability
One thing we hadn't thought about was the fact that the receiver also needs to receive a little bit of ETH so that they can later move the funds when exchanging. We need to figure out an efficient way to both transfer dai and a bit of ether without incurring in large fees.
What's next for SendSomeDai
on Features
Better model for generating the wallets. How can we improve the security
Porting the mobile demo to a React-Native or Cordova app so that we can keep state locally on the device and not have to store private keys after the user has claimed their wallet
Managing accounts I can send money to. Emails or phone numbers to keep track/view current balance and allow me to send or not
Improving efficiency for spent gas. Perhaps some of the transactions can be grouped in one smart contract that we deploy ourselves
on moving the product forward
We still need to validate this is useful. Getting the app in the hands of some of our family members and sending them money will be the first real trial we do
If that proves to be useful then we'll announce the project and attempt to get community support for improving it. That said, the code is currently on Github with an open source license, and anyone can use it if they wish.
Built With
react
react-router
web3js
mongodb
javascript
express.js
infura
