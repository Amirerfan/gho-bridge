# GhoBox: Liquidity Unifier Without Shifting Collateral

## Overview

[GhoBox](https://gho-bridge.vercel.app/) is a revolutionary contract that streamlines liquidity management across multiple blockchains without the need to shift collateral. It enables users to provide liquidity to Aave on any supported chain and delegate borrowing power to GhoBox. This unique system allows GhoBox to efficiently handle loans using the user's liquidity. Utilizing the Cross-Chain Interoperability Protocol (CCIP), GhoBox adeptly coordinates loans across different blockchains, encompassing all necessary steps – borrowing, burning, and minting of GHO tokens. This process significantly simplifies cross-chain asset utilization without the need to move collateral. For detailed insights into the contract mechanics, visit our [contracts repository](hhttps://github.com/zkfriendly/snow).

## How It Works: A Running Example

Imagine Alice, who aims to leverage her assets across Ethereum and Polygon without relocating her collateral. GhoBox facilitates this process in the following steps:

### Step 1: Supplying Liquidity to Aave

- **Alice’s Action**: She provides liquidity to the Aave protocol on both Ethereum and Polygon networks.

### Step 2: Delegating Credit to GhoBox

- **Alice’s Action**: Alice delegates her GHO borrowing credit to the GhoBox instances operating on Ethereum and Polygon.

### Step 3: Requesting a GHO Loan

- **Alice’s Action**: Seeking a total of 1000 GHO, Alice opts to borrow 600 GHO against her Ethereum liquidity and 400 GHO against her Polygon liquidity.
- **Process**: She requests the loan via the Ethereum GhoBox, specifying the desired amounts from each blockchain.

### Step 4: Coordinating Loan Across Chains

- **GhoBox’s Role**: The Ethereum-based GhoBox coordinates with its Polygon counterpart for the execution of Alice's loan.

### Step 5: Loan Execution on Polygon

- **GhoBox’s Action**: The Polygon GhoBox secures a 400 GHO loan and immediately proceeds to burn it, as required in the process.

### Step 6: Confirmation via CCIP

- **GhoBox’s Action**: The loan burning on Polygon is confirmed through the Cross-Chain Interoperability Protocol.

### Step 7: Minting and Loan Fulfillment on Ethereum

- **Final Action**: With the burning confirmed, the Ethereum GhoBox mints the aggregate 1000 GHO (including the 400 GHO from Polygon) for Alice.

### Conclusion

- **Outcome for Alice**: Alice effectively accesses 1000 GHO on the Ethereum network by leveraging her combined liquidity from both Ethereum and Polygon, without the need for asset transfer.

This scenario exemplifies GhoBox's efficiency in facilitating complex cross-chain liquidity management.

## Features

- Effortless aggregation of liquidity across multiple chains without collateral transfer.
- Simplified credit delegation through GHO tokens.
- Advanced cross-chain loan management enabled by CCIP.
- Integration with leading protocols like Chainlink and Aave, ensuring robust and secure operations.
