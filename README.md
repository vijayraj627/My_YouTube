<!-- 
    header
    body
        sidebar
        maincontainer
            buttonList
            videocarts

1) In App component calls header & body components
2) In header component built the UI
3) In body component called 2 components sidebar & maincontainer
4) Built the side bar UI
5) In Header if we click on hamburger icon we need to toggle sidebar, this functionality should happen on overall app, so we use redux for it, we create store for it, & create sidebarSlice.js in this we write toggleSidebar function & exported it, we give this store to our app using Provider in app component, in header if click on hambuger icon, we calls the dispatch function, in dipstach we calls toggleSidebar, now we use that global state in header by subscribing, to subscribe we use useSelector. Now using global state we can toggle side bar
6) In maincontainer component we called two components buttonlist & videocontainer
7) In buttonlist components we built button lists UI
8) In videocontainer component will fetch the data of videos using API which we calls from constats.js file
9) In videocontainer component we get all data of videos & we sent to videocart component data through props & we display the UI.
10) Now if we click on video we need to route to new page for this in app component we use routing
11) Need to route in body between maincontainer & watchvideo components, so in body component we make maincontainer component to outlet
12) In app comp we give 2 children components maincontainer & WatchVideo
13) In videContainer we link the VideoCart component and pass param to url
14) In WatchVideo component we use useSearchParams for getting Id from parameter of the url
15) In WatchVideo component used IFRAME to play the video and pass the ID to the url accordingly
16) when we type something in search bar suggestion need to show
17) For that we call Youtube_Search_Suggestions_API in header inside useeffect
18) When we type somthing in input box then only need to call api, so we use useeffect dependency of search
19) Whatever suggestion comes through API I have set those all in state called suggestions & map it


 -->

 