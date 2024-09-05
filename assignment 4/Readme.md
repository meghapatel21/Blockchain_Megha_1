# assignment-repo
Blockchain Lab Assignment 4

## Overview

### 1. 
- **File:** `Q1`
- **Description:** This Node.js script finds an integer input that, when hashed with SHA-256, produces a hash starting with '00000'.
- **Features:**
  - Brute-Force Search: Sequentially hashes integer inputs.
  - Prefix Check: Compares hash prefixes to '00000'.
  - Returns: The first input with the desired hash prefix.

### 2. 
- **File:** `Q2`
- **Description:** This Node.js code snippet searches for an integer that, when appended to the string "meghapatel21" and hashed with SHA-256, produces a hash starting with a specified prefix.
- **Features:**
  - SHA-256 Hashing: Uses the crypto module to hash strings.
  - Prefix Matching: Checks if the hash starts with the given prefix.
  - Custom Prefix: Prepends "meghapatel21" to each integer before hashing.

### 3. 
- **File:** `Q3`
- **Description:** This Node.js script finds a nonce for given input strings such that the SHA-256 hash of the combined string (input string + nonce) starts with a specified prefix.
- **Features:**
  - SHA-256 Hashing: Utilizes the crypto module to compute hashes.
  - Brute-Force Search: Iteratively appends increasing nonces to the input string and checks the hash.
  - Prefix Matching: Looks for hashes starting with a given prefix.

### 5. 
- **File:** `Q5`
- **Description:** This Solidity smart contract enables users to donate Ether to other addresses and manage donation records.
- **Features:**
  - Donate: Users can donate Ether to specific recipients.
  - Track Donations: Records and queries donations between users.
  - Withdraw Funds: Contract owner can withdraw Ether from the contract.
  - Check Balance: Displays the contract's Ether balance.
  - `getName()`: Retrieves the name.

