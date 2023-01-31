---
id: happy-path
title: Happy Path
sidebar_label: Happy Path
---

> :warning:&nbsp; **WARNING:** Never send funds (tokens or ETH) directly to the escrow smart contract. Those funds will not be recoverable.

1. Save Campaign lead (i.e., <span id='monk'>Cleric</span> or <span id='monk'>Monk</span>) [creates an escrow](https://xdai.escrow.raidguild.org/) for the campaign, with the following info:
    - **Save Campaign multisig address** (xDAI Gnosis Safe Address)
    - **The client's address**
    - **Total payment amount**
    - **Number of milestones** (a typical campaign will have 2). Currently, milestones must have uniform payments. Future versions may allow different payment amounts per milestone.
    - **Safety valve withdrawal date**. This is the date past which the client can withdraw any remaining funds in escrow, on the assumption that the campaign has not delivered on its promise. Make sure to leave plenty of buffer after the expected end of the campaign.
2. Save Campaign lead sends the client the campaign ID (from Save Central -- Campaign V2) or the url to the campaign escrow.
3. Client `Deposits` total campaign payment (note: must use the `Deposit` function).
4. Client `Releases` first milestone payment
5. Save commences
6. Once next milestone is reached, client releases the next payment
7. Repeat 6 until all milestones have been completed and all money has been released

> Note: currently, the escrow contract requires that clients deposit the entire payment amount at once. For larger campaigns, this may be burdensome for clients. Future versions will allow clients to deposit enough to cover the next milestone and then top up as milestones are finished. For now, this escrow service may be best applied to smaller campaigns or where clients already have all funds on hand.
