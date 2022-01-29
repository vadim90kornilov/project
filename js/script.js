"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели', '');
        while (personalMovieDB.count =='' || personalMovieDB.count ==null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели', '');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count >= 30) {
            console.log ('Вы киноман');
            }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log ('Вы классический зритель');
            }else if (personalMovieDB.count < 10) {
            console.log ('Просмотрено мало фильмов');
            }else {
                console.log ('Произошла ошибка');
            }
    
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt ('Один из последних просмотренных фильмов','');
            
            if (a !=null && a.length > 0 && a.length < 50) {
                const b = +prompt( 'На сколько оцениваете его?', '5');
            personalMovieDB.movies[a] = b;
        }else{
            alert ('Название фильма превышает 50 символов или не указано');
            i--;
        }
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
         const a = prompt (`Ваш любимый жанр под номером ${i+1}`);
            if (a == null || a =='') {
            i--;
            }else{  
                personalMovieDB.genres[i] = a;
            }
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log (`Любимый жанр # ${++i} - это ${item}`);
        });
    },
    toogleVisibleMyDB : function (){
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else{
            personalMovieDB.private = true;
        }
    }

};

function showMyDB() {
    if (!personalMovieDB.private) {
        console.log (personalMovieDB);
    }
}


personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
showMyDB();
//personalMovieDB.toogleVisibleMyDB();
//








