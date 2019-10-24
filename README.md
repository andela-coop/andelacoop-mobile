# andelacoop-mobile
Mobile repo

# Setup

### Dependencies

- [NodeJS](https://github.com/nodejs/node) - A JavaScript runtime environment
- [Yarn](https://yarnpkg.com/en/docs/instal) - Package manager

### Installation

- Clone the repository by running the command

  ```
  git clone https://github.com/andela-coop/andelacoop-mobile.git
  ```

- Navigate into the project directory & Install the application's dependencies by running the command

  ```
  yarn install or npm i
  ```


- Link all Unlinked dependencies
  ```
  yarn react-native link
  ```

run `yarn start` to start both android and ios simulations. Ensure you android simulator is running before this.

### Likely Errors and Pre-emptive solutions
- You may have to create a `local.properties` file in your android folder and paste a path to your android SDK, mine looks like this
  ```
  sdk.dir = /Users/christopherakanmu/Library/Android/sdk
  ```

- If you get an `Could not find iPhoneX simulator` error when you start ios, this means that your xCode does not have an iPhoneX simulator
  run
  ```
  yarn ios --simulator=iPhone 11
  ```
  or anyother iphone simulator that you have.

- Solutions to other ios issues may include deleting the Podfile.lock file int the /ios folder. Then run
  ```
  yarn cd ios && pod install
  ```
