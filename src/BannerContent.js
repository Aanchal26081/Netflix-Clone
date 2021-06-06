
    const text1 = document.querySelector('.banner_title')
    const text2 = document.querySelector('.banner_description')
    const strText1 = text1.textContent;
    const strText2 = text2.textContent;
    const splitText1 = strText1.split("");
    const splitText2 = strText2.split("");
    text1.textContent = "";
    text2.textContent = "";
    console.log(strText1)
    console.log(strText2)
    for(let i=0; i<splitText1.length;i++){
        text1.innerHTML += "<span>" + splitText1[i] + "</span>";
    }
    for(let j=0; j<splitText2.length;j++){
        text1.innerHTML += "<span>" + splitText2[j] + "</span>";
    }
    let char = 0;
    let timer = setInterval(onTick,50);
    function onTick(){
        const span1 = text1.querySelectorAll('span')[char];
        span1.classList.add('fade');
        const span2 = text2.querySelectorAll('span')[char];
        span2.classList.add('fade');

        char++;
        if(char === splitText1.length){
            complete();
            return;
        }
        if(char === splitText2.length){
            complete();
            return;
        }
    }
    function complete(){
        clearInterval(timer);
        timer = null;
    }
