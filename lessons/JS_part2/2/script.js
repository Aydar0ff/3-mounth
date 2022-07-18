// const hi = () => {
//     console.log("hi");
// };

// setTimeout(hi, 2000)


// setTimeout(() => {
//     console.log("bue");
// }, 0)


// setInterval(() => {
//     console.log("interval");
// },1200);

// setTimeout(() => {
//     clearInterval(interval);
// }, 3000);

let positionX = 0;
let positionY = 0;

const move = () => {
    if (positionX <= 460){
        positionX += 16;
        block .style.left = `${positionX}px`;
        setTimeout(move, 100);
    }else if(positionX >= 460 && positionY <= 460){
        positionY += 16;
        block.style.top = `${positionY}ps`;
        setTimeout(move, 100);
    }
};

move();