$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
});


function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,5);
    $('#time').text(datetime);           /*자바스크리트에서는 #time의 #은 id를 의미한다. .*/                            
});
}


function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;         /*자바스크리트에서는 #content의 #은 id를 의미한다. .*/
            let author = `- ${data['author']} -`;              /*자바스크리트에서는 #author의 #은 id를 의미한다. .*/
            $('#content').text(content);
            $('#author').text(author);
        });
}