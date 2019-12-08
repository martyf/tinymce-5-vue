# TinyMCE 5 and Vue integration
Developed by [Marty Friedel](https://www.martyfriedel.com)

Last updated December 2019

Read along at [https://www.martyfriedel.com/blog/integrating-tiny-with-vue-in-a-real-world-application](https://www.martyfriedel.com/blog/integrating-tiny-with-vue-in-a-real-world-application)

## How to use
Open **index.html** in a web browser and you can see the pre-built code doing its thing.

You can also look at [https://tiny-vue.martyfriedel.com](https://tiny-vue.martyfriedel.com)

If you would like to play with the code, clone the repository then:
```
npm install
```

The source is compiled to the "dist" directory - and all source is in "src". When changes are made,
you will need to re-build the dist directory.

You can either 
```
npm run dev
```
Or, if you'd like to have webpack watch for changes,
```
npm run watch
```
A build script is available too which will hash each output file. For dev purposes, it is easier 
to not have to worry about the hashed files, so "dev" and "watch" are your best bet.

**IMPORTANT:** Don't forget to add your Tiny API key in "index.html". You can sign up for a free Tiny API at [https://tiny.cloud](https://tiny.cloud)