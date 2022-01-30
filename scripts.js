const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            return resolve();
        },delay);
    })
}

const phraseButton = document.getElementById("phraseButton");

const randomNumber = () => {
    const number = Math.floor(Math.random() * 20);
    return number;
}

phraseButton.addEventListener('click',()=>{
    const ranNumber = randomNumber();
    switch(ranNumber){
        case 0:
            alert("“What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?” — Rick");
            break;
        case 1:
            alert("“Wubba Lubba Dub Dub!” — Rick")
            break;
        case 2:
            alert("“Boom! Big reveal! I turned myself into a pickle!” — Rick");
            break;
        case 3:
            alert("“Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.” — Morty");
            break;
        case 4:
            alert("“To live is to risk it all; otherwise you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.” — Rick");
            break;
        case 5:
            alert("“Weddings are basically funerals with a cake.” — Rick");
            break;
        case 6:
            alert("“Sometimes science is more art than science.” — Rick");
            break;
        case 7:
            alert("“If I let you make me nervous, then we can’t get schwifty.” — Rick");
            break;
        case 8:
            alert("“Have fun with empowerment. It seems to make everyone that gets it really happy.” — Rick");
            break;
        case 9:
            alert("“Listen, I’m not the nicest guy in the universe, because I’m the smartest, and being nice is something stupid people do to hedge their bets.” — Rick");
            break;
        case 10:
            alert("“I know that new situations can be intimidating. You’re lookin’ around and it’s all scary and different, but y’know, meeting them head-on, charging into ‘em like a bull — that’s how we grow as people.” — Rick");
            break;
        case 11:
            alert("“You gotta do it for Grandpa, Morty. You gotta put these seeds inside your butt.” — Rick");
            break;
        case 12:
            alert("“Honey, stop raising your father’s cholesterol so you can take a hot funeral selfie.” — Beth");
            break;
        case 13:
            alert("“So what if he’s the devil, Rick? At least the devil has a job. At least he’s active in the community.” — Summer");
            break;
        case 14:
            alert("“Unity, I’m sorry. I didn’t know freedom meant people doing stuff that sucks. I was thinking more of a ‘choose your own cellphone carrier’ thing.” — Summer");
            break;
        case 15:
            alert("“Excuse me. Coming through. What are you here for? Just kidding, I don’t care.” — Rick");
            break;
        case 16:
            alert("“Yeah, sure, I mean, if you spend all day shuffling words around, you can make anything sound bad, Morty.” — Rick");
            break;
        case 17:
            alert("“Don’t get drawn into the culture, Morty. Stealing stuff is about the stuff, not the stealing.” — Rick");
            break;
        case 18:
            alert("“I’m sorry, but your opinion means very little to me.” — Rick");
            break;
        case 19:
            alert("“B*tch, my generation gets traumatized for breakfast!” — Summer");
            break;
        default:
            alert("“I’m a scientist; because I invent, transform, create, and destroy for a living, and when I don’t like something about the world, I change it.” — Pickle Rick");
            break;
    }
})


// for(let i = 0; i <= 10; i++){
//     delayedColorChange('#264653',1000)
        
//         .then(()=> delayedColorChange('#e76f51',1000))
//         .then(()=> delayedColorChange('#184e77',1000))
//         .then(()=> delayedColorChange('#22223b',1000))
//     i++;
// }

// delayedColorChange('#264653',1000)