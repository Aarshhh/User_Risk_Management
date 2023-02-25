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

question('what is this', p =>  {
    p.play('This is an example app with voice capabilities. (Powered by Alan|Voice support is provided by Alan)');
});

question('what is Alan (AI|Platform|)', p => {
    p.play('Alan (AI|Platform) is a platform that will allow you to voice enable any application. Be it mobile app on iOS or Android, or a web page.');
});

question('what (platforms|SDK|frameworks) are supported', p => {
    p.play('Alan (AI|Platform) supports native iOS, Android, and Web applications. As well as Flutter, Ionic and many other popular frameworks.');
});
question('I am not feeling (well|good)', p => {
    p.play('I\'m sorry to hear that. Can you tell me a little bit more about how you\'re feeling? Are you experiencing any specific symptoms or emotions?')
})
question('(Hello|Hi|hi|hello|Hey|hey)', p => {
    p.play('Hi there! I am your Mitra, How can I help you?')
})
question('I (am feeling|feel|am having) (Depressed|sad|anxious|anxiety)', p => {
    p.play('Sorry to hear that, try diverting your mind by engaging in any physical activity to avoid thinking about something that makes you feel sad.')
})
question('How (can I|to) (manage|handle) (anxiety|stress|anger)?' , p => {
    p.play('Try practicing relaxation techniques, such as deep breathing or mindfulness meditation.')
})
question('What (should I do|are some) strategies for (depression|anger|sadness|anxiety?)', p=> {
    p.play('Engage in (regular exercise|physical activites), eat a (balanced diet|healthy diet), try (to seek support from|talking to) friends or a mental health professional.')
})
question('How can I support a friend or family member with a mental health condition?', p=> {
    p.play('Listen without judgment, offer practical support, and encourage them to seek professional help.')
})
question('What are some (signs|symptoms) of bipolar disorder?', p=> {
    p.play('Episodes of mania or hypomania, followed by periods of depression.')
})
question('What are some common symptoms of PTSD?', p=> {
    p.play('Intrusive thoughts or memories, avoidance of triggers, and hyperarousal.')
})
question('What should I do if I\'m feeling overwhelmed?', p=> {
    p.play('Take a break and practice self-care, such as taking a walk or talking with a friend.')
})
question('(Thanks|Thank you)', p=> {
  p.play('I am glad I could help you.')  
})
