DRAFT: Peer to Peer Web of Trust
About a year ago, I started having flashes of an idea that some kind of web of trust lending was possible. I initially read about the first p2p lending project I’d heard about, but after reviewing more closely, I wasn’t fully thrilled, and wrote about it here:

Phi: Decentralized Lending and Stable Currency Might Not Actually Be Stable

There are a lot of interesting projects related to lending and stable currencies on the Ethereum platform, like…
medium.com	
Since then, I’ve been occasionally trying to re-visualize the terms of this problem, but it’s been difficult, mostly because the problem is so abstract that use cases and examples have done a good job of quickly getting too complicated to reason about.

I believe I’ve made a valuable observation, as of last night, regarding this goal. I began tweeting about it and sharing a high-level description there:


Because I think those tweets are incredibly high-level summary, and can seem flippant and dismissive of other projects, I want to share more detailed notes, to clarify my reasoning.

I’ve been working on these notes to be part of a larger introductory article, but in the interest of sharing the thoughts with people who might be interested, I’m publishing them now. Here you go.

The Raw Notes
Once you believe in problems bigger than yourself, you are forced to allocate some of your trust to organizations that manage the many aspects of this big world that you cannot personally tend to.

When you have to pay someone else to deal with a problem in good faith, you are electing a governor.

To govern is to be trusted with the responsibility of allocating funding for a group’s interests.

Governors should be paid enough to stay honest to their constituents.

Constituents should have the ability to revoke governorship easily when trust is broken.

Transparency of the public funds entrusted is a fundamental tool in identifying broken trust.

Blockchains “smart contracts” are a perfect tool for creating transparent budgets.

Even profit-seeking companies utilize this structure. Executives allocating funds to employees.

In both cases, some funds are allocated to a certain goal, and at a certain scale, the chain of command becomes a chain of trust.

As soon as the funds are out of your hands, you’re just hoping they’re still in your interest.

I suggest there are two classes: The governors and the freelancers. The governors take a steady comfortable pay to be trusted to honestly delegate funds to freelancers who are capable of fulfilling their goals.

Like leaf and branch nodes of a merkle tree, the governor is made up of the sum of their allocations. Governors can help fund sub-committees and sub-governors.

Venal — A person willing to sell out their trust for personal gain.

What does trust cost? What should a governor be paid? Senators can set their own pay yet many still many remain venal.

Since our governors can never be trusted fully, the trust extended must be tenuous, cautious, watchful.

Create a highly liquid designation process, make it easy to revoke trust when it’s broken. If trust is broken at a leaf, it should break up the branch, but not affect the roots more than the branch is valuable.

Open question: Is there a pattern for allocating governorship so that a person never designates more trust than they are putting at risk?
I think the answer is no. There is no ultimate hedge against trust. Trust is a gambit. A leap of faith. If trust could be proven worthwhile, there would be no value in creating it. Instead, establishing trust is maybe the most valuable service in the world. Think of reviews; Amazon, Ali-baba, Netflix, Uber, Airbnb. Not to mention content ranking, which brings in Google, Facebook, WeChat, etc.

As a thought experiment, let’s imagine two people agreeing to work on a project together. To simplify the project management, the two create a smart contract for pooling resources. Each person might define the threshold that they are willing to outright risk in the other person’s hands, cash they’re willing to hand over while the other goes out for supplies. Any expense over that amount would require both parties explicitly participating, paying for it jointly.
 
 If both people contribute $500, for a total of $1k, and person A trusts person B with up to $100 of their own share, and person B trusts person A with up to $300 of their own share, and the project requires purchasing some materials costing $700, person A could make that expense immediately on their own, but person B would need person A with them to do it.
 
 Once person A proved they had purchased the materials in good faith, the trust thresholds could be re-calibrated. To simplify this re-calibration process, specifying fractional trust thresholds probably makes more sense than hard-defined values.

Scenario Z: Now imagine a third person. Each person could either explicitly note the amount of their own share that they trust with each other person, or they could leave some trust thresholds implicit. Let’s imagine a project where each person contributes $500, and:

A trusts B 20%
A trusts C 30%
B trusts A 20%
B trusts C 30 %
C trusts A 20%
C does not know or trust B.
If B were trusted to make a purchase, their limit would be:

Their contribution + sum_of ( their trustors’ contributions * their trustors’ trust thresholds in them, recursively)
B’s own $500 + (A’s $500 * A’s 20% trust in B) + (C’s $500 * C’s 20% trust in A * A’s 20% trust in B) = $620
I created a little github repository test suite for such an algorithm here.

By providing recursive transitive trust, a single person’s ability to spend on behalf of the group grows in proportion to the size of the network, even including nodes that do not trust them directly.

At the point of spending, there is a phase where a given expense is only deducted from a person’s own spending limit, and would not draw evenly from all contributions until a growing threshold of people approved the expense.

While a few major “whales”, or major stakeholders within the organization would be able to quickly dissolve an unapproved transaction, the approval of that transaction would not actually affect un-trust-connected members of the group’s spending limits until they themselves approved more loans. 
 
 I suspect there is a tax to distrusting people. It results in your investments serving as insurance instead of leverage. You are taxed continually to distrust people, and if we could more easily build reliable trust, we could leverage that community beyond any known limits.

Let’s now review the purchase resolution process:

Resuming with scenario Z, let’s imagine B makes a purchase on behalf of the group for nearly their full limit, at $600. Initially, that purchase is considered “pending” in the eyes of the organization. Naturally, the organization paid that amount, but the new question is how much B can spend now.

At this point:

A, B, and C have all made equal contributions to the organization.
The organization had $1500, now down to $900.
A simpler question is: “What are the spending limits of the other people, who have not made an expense?”
 
 Let’s consider A.

A’s original contribution is now worth 1/3 of the remaining pot, or $300.
C trusts A 20% of their $300 share = +$60
B trusts A 20% of their remaining $300 share = +$60
A has a total spending limit of $420.
Now let’s consider B:
 A naïve consideration of B’s expense suggests that having spent $600 of a $620 spending limit should leave a safe $20 to spend, even with the now spent funds. Let’s see if we can make that line up.

B’s original contribution is now worth 1/3 of the remaining pot, or $300,
A trust B 20% of their $300 share = $60
C trusts A 20% trusts B 20% of a $300 share = $12
Fully authorized, updated spending limit (all other members consent) would be $372, but is only $20 now.
That’s because his x`
Spent $600 of formerly $620 spending limit
So, that’s pretty difficult to think about. How do we go from $372 to $20, accounting for a pending $600 transaction? There are some tricky recursive leaps we need to make to do all the accounting.

A trusts B 20%
A trusts C 30%
B trusts A 20%
B trusts C 30 %
C trusts A 20%
C does not know or trust B.
Token Tries

Let’s try this problem again, with the use of tokens as an abstraction for ownership in the organization.

All three members A, B, and C contribute tokens to a joint fund, $500 each, for 500 tokens each. The trust graph is the same as before, and C has a spending limit of $620 and wants to make a purchase of $600.

To make this purchase, C proposes to the organization smart contract “Send this transaction X for $600”. At this time, the smart contract verifies C’s spending limit is >= that amount, and then creates a new data structure, called an Expense. The expense 
 
 
 costs him a fraction of his tokens equal to his spending limit but no one else? =>
 x/500 = 600/620 
 x = 483.8709677419

remaining = 16.1290322581

Org has remaining: $900.

Outstanding tokens remaining: 1016.1290322581

Value per token: $0.8857142857

costs everyone the fraction of trust that they have designated to that person =>

B contributes a fraction of their tokens equal to the portion of their spending limit they are spending into the Expense. 600/620 * 500 = 483.8709677419
Since A’s trust of 20% of B’s total $620 spending limit accounted for $100, 100/620ths of A’s share is bonded in the Expense, or 80.6451612903.
Since C’s 20% trust of A accounted for $20 of the $620 spending limit, C has 20/620ths of their stake bonded in the Expense, or 16.1290322581.
Combined, this means the expense has 483.8709677419 + 80.6451612903 + 16.1290322581 = 580.6451612903.
gets divided however B wants, up to those trust thresholds.

Maybe instead of having an explicit spending limit, which is freaking impossible to manage, requires a lot of recursive computing, isn’t very transactional or parallelizable, instead we say that actually these are a series of discrete loans:

For example, B is free to instantly spend their own $500 stake in the organization, it could practically be a transaction entirely outside of the organization, maybe compose it into an Expense struct.

If A trusts B 20% and has $500 bonded to the organization, then B can take out an instant $100 loan on that trust, and add it to the Expense.

An Expense has:

A proposed transaction, with a proposed value.
A series of contributions.
A method to sendTransaction, which will succeed if the sum of contributions’ values matches the proposed value.
A simpler model:

A big smart contract where anyone can post a bond for lending, and issue trust bonds to other people. A trust value can either be a fraction of the bond, or a fixed value.

A simpler model still:

A protocol for a new kind of smart contract.

Creating requires initializing with some amount of value.

Creating also allows the creator to issue any number of tokens, each one of which can be redeemed for a fixed fraction of the initial pool. Yes, I’m talking about fractional reserve lending peer to peer. You can pay a friend *the option to borrow from you*.

These tokens are composable:

A basket of them can be used as the bond for issuing a new set of tokens.

Yes, there is a game of chicken here, sometimes called a run on the bank. For this reason, giving out these tokens has a tenuous cautious property to it. If you give it to someone who just wants to cash out, they can drop the value for all holders.

This isn’t useful for just printing money. This is useful for building community.

Diff approach:

What if the Transaction is created, and

re non-participating un-trust-connected members)

Their bond serves as insurance against all the potentially bad deals they might not want to take part in, but up to the threshold they’ve trusted in others, they are bound to their ventures.

Notice that by using a recursive, “transitive trust”, C’s spending threshold can be higher than their own contribution, or the trusts directly placed in them. Instead, each person who places trust in them, places an implicit bond on behalf of the trust that others have placed in them.

You might notice that when someone “places trust in” someone else, there is a sort of fractional reserve banking taking place. The trust minted is not a direct funding with currency itself, but represents a potential promise for some amount of funds on reserve. There are funds ventured, but not necessarily spent, and ideally spent in an agreed on way.

This economy can be perfectly sound as long as a person cannot allocate more trust than they have “skin in the game”, so if everyone goes corrupt at once, at worst case, the person loses as much of their contribution as all the trust they had given out.

Whether a taxpayer, a legislator, a customer, a middle-manager, you’re constantly forced to make these leaps of trust with your money.

Conclusion
Those are the notes. That night I dreamed about this nonstop, and by this evening I had the idea well enough to begin to discuss it coherently. I’ll hopefully be writing a gentler introduction, description, and deeper exploration of similar projects soon.