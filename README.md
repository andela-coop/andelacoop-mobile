# andelacoop-mobile
Mobile repo

# Setup

Run `yarn install` or `npm i`

`yarn react-native link`


you may have to create a `local.properties` file in your android folder and paste a path to your android SDK, mine looks like this

`sdk.dir = /Users/christopherakanmu/Library/Android/sdk`

if you get an `` error when you start ios, this means that your xcode does not have an iPhoneX simulator
run `yarn ios --simulator=iPhone 11` or anyother iphone simulator that you have.