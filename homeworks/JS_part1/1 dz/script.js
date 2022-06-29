let old = prompt("В каком году вы родились?");
old = +old;
let this_year = 2022;
let Answer = this_year - old;

if (Answer < 0){
    // alert("you are" + Answer + " years old");
    alert("Вы еще не родились, и как вы пишите?");
}else if(Answer > 30 && Answer < 60){
    alert("Кризис среднего возраста");
}else if(Answer < 30){
    alert("Вам меньше 30")
}else if (Answer > 60){
    alert("Вам советуется посетить доктора");
}else("Извените вышла ошибка, Повтроите пожалуйсто")