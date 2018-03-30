P2P Web of Trust Comparisons
In the third part of my series on peer to peer web of trust / spending permission tokens, I will be looking at similar projects, and comparing them.
A while back I shared a very rough outline of this concept:



I also shared some coarse notes that led to this concept here.
My Twitter feed blew up, and I was humbled by what a rich history of thought has gone into this domain. Below I’ll list each project that was suggested as a comparison in the order it was suggested, and write some thoughts on how they relate to the concept I am suggesting.
Curved Token Issuance



Simon de la Rouviere has been working on tokenizing community since you had to mine your own coins to do it. Curation markets are a way of designating voting tokens for curating a given idea space, and one way of ensuring they hold some value is to have a continuous buyback at a certain price, while a constant offering of new tokens at a slightly higher price.
One basic difference between what I’ve suggested above and a curved token bond is that a curved token bond is designed for a mostly public community (where tokens are available for sale to anyone). Since these tokens can be bought by anyone, there is much less trust established in the token holders, which is why you have to constantly adjust your buyback price to account for runs on the bank.
The parameterization of buyback price was one revelation to me about my assumptions, which hadn’t occurred to me at all. If we accept that a person’s token can be backed arbitrarily by whatever they want, and it has no inherent value other than the reputation they can build for it, there’s really no reason to limit how they manipulate its base supply or buyback price.
Since I already had a notion that issued permission tokens could be burned by their issuer at any time, adjusting the buyback rate is basically an elegant way for a person to proportionally adjust their allocated trust across the board.
I know this is a tough way to start this article, because the cynics will say “if a token can be manipulated by its issuer freely, than it’s completely without value, no concrete worth can be assigned to it”, but I think the truth is a lot more nuanced. Modern fiat banks are also manipulated freely, and what they can be sold back for has changed over time, but this has not fundamentally altered their utility. The real value to a fiat currency is not its lack of manipulation, but its general historical consistency, or reputation.
Ultimately, the worth of a personally issued trust token will need to be evaluated on a very personal level, with each person subscribing to their own method of appraisal, which fits nicely with my philosophy of flat, subjective value systems. This appraisal system might be able to leverage the work on OpenReputation, which has relevant benefits:
History aware
Context dependent
Any analytical method that one chooses

A multinational corporation might be gracious to accept a person’s coins if they’ve been fully backed for years and the buy-back rate has never been manipulated. A local business might be happy enough if the reserve tended towards an amount over the purchase size, while a close friend might be fine trusting another with great leverage.
In fact, one of my favorite responses points out that even “backing with tokens” is itself a fairly arbitrary parameter, and if your trust network is strong enough to resist runs on your bank, you don’t actually need collateral at all!



While I do ultimately love Andy’s point, where in a strongly enough trusting community, currency can be minted freely, the option of backing a personal currency, and proving its history of backing establishes a baseline of trust in that currency that can be more readily extended outside of that person’s core group.
Bancor



Bancor’s SmartToken protocol has a lot in common with what I’ve proposed: A token holds another token in reserve, and issues another token that can be redeemed for it. However, its reserve value is based on an algorithm with a parameter set by that SmartToken’s creator, making it basically the same as the Curved Token Issuance proposed by Simon de la Rouviere. From the Bancor white paper:
This is a powerful pattern for creating liquidity in a public market, and for all I know, it could be the device that makes the larger economic splash.
One basic difference between these tokens and my basic allowance token is that I suggest that a single allowance token is always redeemable for a single backing token, and they are always issued manually. This makes them unfit for selling (a rational actor would always cash out), and so it enforces a much more intimate ritual of extending trust.
Since these tokens can be revoked freely, have their backing manipulated, and buy-back rate changed, they are unfit for selling publicly (a rational actor would always cash out immediately), and so it enforces a much more intimate ritual of extending trust.
By keeping issuance in “manual mode”, people are forced to take responsibility for their own economy. Whether or not you think people can be trusted with this responsibility is a reflection of your own opinion of human nature, and rather than impose my own, I am eager and curious to see if this mechanism can be introduced to humanity in a way that preserves its sanctity.
Circles UBI



My concept has a bit in common with Circles, but ultimately, I think it’s a compatible but distinct concept. They are similar in that they both involve webs of trust, but in Circles, a trust-extension is absolute, and represents a person’s total trust in the other’s “Circles”, making this kind of trust extension fairly high-stakes, and not suitable for small or fractional kinds of trust extension.
In Circles, anyone can register as a user and receive a regular basic income of the “Circles” currency. Anyone can designate another person as “trusted”, which means they are willing to receive that person’s currency directly, and for any two people to transact, there needs to be a line of trust connecting those two people, much like in Bancor.
I like Circles because it kick-starts the backed liquidity of individuals who don’t already have any. That said, in a high-enough trusting environment, credit could be extended indefinitely, making a “mere” basic income insignificant, or at least a mere stepping stone on the path to dynamically allocated community trust, as I would hope a true “web of trust” network could achieve.
Puddle



I really like the Puddle comparison by Stefano Bernardi, because Puddle was oriented towards small groups. I think the permission-token is a new enough behavioral pattern that people will have the most initial success with small groups of people, like a Puddle.
In Puddle, any group of people can assemble into a “Puddle”, and contribute whatever each of them wants to the group. Each member is then able to borrow up to 5x their individual contribution or the pool’s size, whichever is smaller, and is expected to repay in 3 or 6 months.
Some small group examples: Two neighbors building a fence, drawing from an essentially shared fund. Five friends getting a cabin for the weekend, simplifying the splitting of bills, and the permitting of buying supplies. Build temporary pools of trust wherever a group benefits from extending some financial liberty to each other.
The simple rules and repayment policies make Puddle a very easy p2p lending platform to grok, and is a pretty great way to get people comfortable with the premise of p2p lending groups.
Puddle could absolutely be built out of permission-tokens, wherein each member in a group extends their full contribution to each other member (up to a limit of 5x that other member’s contribution). What’s lost in this simplicity is the composability that you get when individuals assign allowances to each other:


Fixed spending limit keeps people safe, the platform doesn’t allow users to permit IOUs.
A person joining a group has to trust everyone else in that group.
The entire platform presumes a lending mentality, where the ledger should balance out at the end. This may somewhat miss out on the power of shared goals, where the “repayment” may not be financial.
A user cannot bridge trust between two other groups to increase their collective spending powers.
Since this is fiat and not a blockchain, each “withdraw” is an absolute drain on the group’s funds, and there is no option to spend the permission tokens themselves, missing out on the potential for fractional reserve effects, multiplying liquidity.

I can still see this tool as a mainstream stepping stone to alternative p2p financial tools. As people get comfortable with using things like this for small groups, tools can gradually become available that allow the composition of these same agreements into increasingly fractal organizations. Think sub-committees, subsidiary companies, or partnerships.
WeTrust



Having read more on WeTrust, I’ve learned about the concept of a ROSCA, or Rotating Savings and Credit Association. A ROSCA is an ad-hoc group of people who gather with the purpose of spontaneously increasing liquidity in the group.
In a ROSCA, members gather on a regular interval, dedicate a fixed contribution to the group, and the pool is allocated to one (rotating) member. It’s a bit like a more fair lottery, in my opinion. Its value is that it pools less significant quantities of funds to allow members bursts of higher liquidity, with which they can do things they usually couldn’t, like invest in a small business.
While ROSCAs are really cool, and their long history of practical success is impressive, they ultimately aren’t multiplying liquidity based on community trust, they’re just a mechanism for pooling and allocating it, making it fairly different from what I’m proposing here.
Ripple






Ripple’s TrustLines were a popular comparison! It has apparently evolved while under Ripple, to the point where the Raiden Team is building it on Ethereum.
My understanding is that Ripple’s own use of trustlines has been reduced to trusting “issuers”, which are slightly centralized entities, and they also removed the notion of transitive trust, so trust you give to one peer can not be shared with their peers.
The Raiden team’s trustlines project seems to be *very* similar, with some great educational materials, with the major difference being that their project is based on Lending and Payback:



My thoughts on Trustlines compared to this is decently summarized here:



Basically, I’m not proposing any lending system. I’m not proposing a repayment system, I think what I’m really proposing is a new standard parameter for tokens, related to what it could be instantly redeemed for. If this is part of a credit system, it is only the “extending the credit line” part of the system, it does not track the debt, or enforce repayment, that’s its own can of worms.
Curation Markets with Option to Burn



As I discussed with Simon de la Rouviere, this pattern that I’m presenting does resemble an aspect of curation markets, namely, using one token to back another. One way that my suggestion here is different from a standard curved token model is that users could retain the ability to burn tokens they’ve given out, the way a user can freely revoke trust. In that way, my suggestion here closely models a curation market with an option to burn.
OpenBazaar’s Trust is Risk





Kiva
Geo



InsurePal



Building Societies
