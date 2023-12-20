
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}






























// const postList=document.getElementById('postList');
// const loadingIndicator = document.getElementById('lodingIndicator');
// let start=0;
// const postsPerPage=10;
// let isLoading=false;

// async function fetchPosts(){
//     try{
//         const response =await fetch();
//         const data= await response.json();

//         if(data.length === 0){
//             start=0;
//         }
//         return data;
//     }catch(error){
//         console.error('Error fetching posts');
//         return [];
//     }
// }

// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve))
// }

// async function fetchAndDisplayPosts(){
//     if(isLoading) return;

//     isLoading=true;
//     loadingIndicator.style.display='block';

//     try{
//         await delay(1000);





//     }
//     catch(error){
//         console.error('Error fetching and display');
//         isLoading=false;
//         loadingIndicator.style.display='none';
//     }
// }

// function isBottomOfPage(){
//     return (window.innerHeight + window,scrollY);
// }

// function loadMoreOnScroll(){
//     if(isLoading) return;

//     if(isBottomOfPage()){
//         fetchAndDisplayPosts();
//     }
// }

// window.addEventListener('scroll', loadMoreOnScroll);
// fetchAndDisplayPosts();


// Holder.addTheme('thumb', {
//     bg: '#55595c',
//     fg: '#eceeef',
//     text: 'Thumbnail'
// });


// if('WebSocket' in window){
//     (function () {
//         function refreshCSS(){
//             let sheets =[].slice.call(document.getElementById);
//             let head=document.getElementsByTagName("head");
//             for(let i=0;i<sheets.length;i++){
//                 let elem=sheets[i];


//                 let rel=elem.rel;
//                 if(elem.href && typeof rel !="string"){
//                     let url=elem.href.response(/(&|\?));
//                     elem.href=url+(url.indexOf('?'));
//                 }
//                 parent.appendChild(elem);
//             }
//         }
//         let protocol=window.location.protocol===               jj;
//         let address=protocol+window.location.host            ;
//         let socket=new WebSocket(address);
//         socket.onmessage=function(msg){
//             if(msg.data == 'reload') window.location.replace;
//             else if(msg.data == 'refreshcss') refreshCSS;
//         };
//         if(sessionStorage && !sessionStorage.getItem()){
//             console.log('Live reload enabled');
//             sessionStorage.setItem('IsThisFirstTime_Log');
//         }
//         })();
    
//     else{
//         console.error('Upgrade your browser. This Browser');
//     }
// }



// const userSlider = document.getElementById('userSlider');
// const plans = document.querySelectorAll('.plan');

// userSlider.addEventListener('input', highlightPlan);

// function highlightPlan() {
//     const userCount = parseInt(userSlider.value);

//     plans.forEach((card, index) => {
//         const min = index*10;
//         const max = (index+1) *10;

//         if (userCount >= min && userCount < max) {
//             card.classList.add('highlighted');
//         } else {
//             card.classList.remove('highlighted');
//         }
//     });
// }
// highlightPlan();


// // document.getElementById('submitButton').addEventListener('click', function () {
// //     const form = document.getElementById('autoSubmitForm');
// //     form.submit();
// // });
