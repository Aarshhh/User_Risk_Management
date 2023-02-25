// {Name: Alan_Integrations_Example}
// {Description: Contains examples on how to integrate Alan with different platforms and frameworks}

// Alan can be integrated with any application on most popular platforms and supports many different frameworks.
// This example will guide you through how to do a basic integration of Alan with your app.

// In case you don't have your own app yet, we also have premade examples for different platforms and languages available on our GitHub (https://github.com/alan-ai).
// All you'll need to do is clone the repository, load the example you are interested in, and run/explore it in your preferred IDE.
//
// iOS Integration Examples
// - Swift: https://github.com/alan-ai/alan-sdk-ios/tree/master/examples/alan-example-integration-swift
// - ObjectiveC: https://github.com/alan-ai/alan-sdk-ios/tree/master/examples/alan-example-integration-objectivec
//
// Android Integration Examples
// - Java: https://github.com/alan-ai/alan-sdk-android/tree/master/examples/alan-example-integration-java
// - Kotlin: https://github.com/alan-ai/alan-sdk-android/tree/master/examples/alan-example-integration-kotlin
//
// Web Integration Examples
// - React: https://github.com/alan-ai/alan-sdk-web/tree/master/examples/alan-example-integration-react
// - Angular: https://github.com/alan-ai/alan-sdk-web/tree/master/examples/alan-example-integration-angular
// - Vue: https://github.com/alan-ai/alan-sdk-web/tree/master/examples/alan-example-integration-vue
// - Ember: https://github.com/alan-ai/alan-sdk-web/tree/master/examples/alan-example-integration-ember
// - Electron: https://github.com/alan-ai/alan-sdk-web/tree/master/examples/alan-example-integration-electron

// If you want to try one of these examples connected to this project, open the Embed Code popup located in the top menu in the Alan Studio.
// Here you will find an Alan SDK Key. Simply copy it and replace this key '314203787ccd9370974f1bf6b6929c1b2e956eca572e1d8b807a3e2338fdd0dc/prod' in your project.

// If you want to integrate Alan with your existing app, you can find platform-specific guidance in the Embed Code popup.
// Platform-specific topics on how to integrate Alan with your application are also covered in our documentation.
//
// iOS Integration
// - Swift: https://alan.app/docs/client-api/ios/ios-api#integrate-into-swift
// - ObjectiveC: https://alan.app/docs/client-api/ios/ios-api#integrate-into-objective-c
//
// Android Integration
// - Java: https://alan.app/docs/client-api/android/android-api
// - Kotlin: https://alan.app/docs/client-api/android/android-api
//
// Web Integration
// - React: https://alan.app/docs/client-api/web/react
// - Angular: https://alan.app/docs/client-api/web/angular
// - Vue: https://alan.app/docs/client-api/web/vue
// - Ember: https://alan.app/docs/client-api/web/ember
// - JavaScript: https://alan.app/docs/client-api/web/vanilla
// - Electron: https://alan.app/docs/client-api/web/electron
// - Web Component: https://alan.app/docs/client-api/web/web-component


question('(Hi|Hello), can you help me with a loan?', p =>  {
    p.play('Hi there! I am your Mitra. Before we get started, can you please provide me with your Person ID?')
});
question('(Hi|Hello), I (would like|want) to take a loan?', p =>  {
    p.play('Hi there! I am your Mitra. Before we get started, can you please provide me with your Person ID?')
});

question('My Person ID is (212|30|20)', p =>  {
    p.play('Thank you. Based on your profile, I can see that your initial investment was 5000 rupees and your current investment is 2000 rupees. Can you please confirm your investment type?')
});

question('I want to invest in (stocks|bonds|Real Estate)', p => {
    p.play('Understood. What is the amount of loan you are looking to borrow?');
});
question('I (want to|would like to) (take|borrow) a loan of (50,000|20,000|30,000|10,000) rupees', p => {
    p.play(' Alright. Based on your investment amount and risk tolerance, we can offer you an interest rate of 4%. Would you like to proceed with the loan application?')
})
         
question('(Yes, that sounds reasonable |Sure, proceed with the application|Yes,proceed|yes)', p => {
    p.play('Great. Can you please provide your age, gender, income level and education level?')  
})

question(' my age is 19,I am a male, my income level is 5000 rupees and education level is high school', p => {
    p.play('Thank you. Based on your profile, you have a moderate risk tolerance. Please note that the loan repayment period will be 12 months, and the monthly installment amount will be approximately 300 rupees. Are you comfortable with this repayment plan?')  
})

question('(Yes, that works for me.|Yes,proceed|Yes, I am comfortable|yes)', p => {
    p.play('Wonderful. I will now proceed to initiate the loan application process. Please provide your contact details, and our representative will get in touch with you shortly.')  
})

question('My phone number is 9876543210', p => {
    p.play('Thank you. We will get back to you soon. Have a nice day!')  
})
