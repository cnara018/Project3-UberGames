import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import Education from './education';
// import Experience from './experience';
// import Skills from './skills';


class TermsOfService extends Component {
  render() {
    return(
      <div>
       <h1 style = {{margin: "auto", width: "50%",  padding: "10px"}}>Terms of Service</h1>

<h3 style = {{margin: "auto", width: "50%",  padding: "10px"}}> 1. About UberGames </h3>

<p style = {{margin: "auto", width: "50%",  padding: "10px", fontSize: "20px"}}>
Ubergames is a community of gamers aiming to build the greatest resource for buying and selling games. The platform’s objective is to connect consumers with sellers to negotiate the best deal on their video game purchase.
Any guidance we provide as part of our Services, such as pricing, shipping, listing, and sourcing is solely informational and you may decide to follow it or not. Also, while we may help facilitate the resolution of disputes through various programs, UberGames has no control over and does not guarantee: the existence, quality, safety or legality of items advertised; the truth or accuracy of users' content or listings; the ability of sellers to sell items; the ability of buyers to pay for items; or that a buyer or seller will actually complete a transaction or return an item.
</p>


<h3 style = {{margin: "auto", width: "50%",  padding: "10px"}}> 2. Using UberGames </h3>
<p style = {{margin: "auto", width: "50%",  padding: "10px", fontSize: "20px"}}>
  In connection with using or accessing our Services you will not:
  <br></br>
•	post, list or upload content or items in inappropriate categories or areas on our sites;
<br></br>
•	breach or circumvent any laws, regulations, third-party rights or our systems, Services, policies, or determinations of your account status;
<br></br>
•	use our Services if you are not able to form legally binding contracts (for example, if you are under 18 years old), or are temporarily or indefinitely suspended from using our Services, or are a person with whom transactions are prohibited under economic or trade sanctions;
<br></br>
•	fail to pay for items purchased by you, unless you have a valid reason as set out in an UberGames policy, for example, the seller has materially changed the item's description after you bid, a clear typographical error is made, or you cannot contact the seller (see our Unpaid item policy);
<br></br>
•	fail to deliver items sold by you, unless you have a valid reason as set out in an UberGames policy, for example, the buyer fails to comply with the posted terms in your listing or you cannot contact the buyer;
<br></br>
•	manipulate the price of any item or interfere with any other user's listings;
<br></br>
•	post false, inaccurate, misleading, deceptive, defamatory, or libelous content;
</p>
      </div>
    )
  }
}

export default TermsOfService;