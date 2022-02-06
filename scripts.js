// const body = document.getElementById("body-container")

// const randomRGB = () => {
//     const R = Math.floor(Math.random() * 255);
//     const G = Math.floor(Math.random() * 255);
//     const B = Math.floor(Math.random() * 255);
//     const RGB = `rgb(${R},${G},${B})`;

//     return RGB;
// }

// const randomizeColor = () => {
//     body.style.backgroundColor = randomRGB();
// }

// setInterval(randomizeColor, 2000);

const phraseButton = document.getElementById("phraseButton");

const randomNumber = () => {
    const number = Math.floor(Math.random() * 30);
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
        case 20: 
            alert("“I’ll tell you how I feel about school, Jerry: It’s a waste of time. Bunch of people runnin’ around bumpin’ into each other, got a guy up front says, ‘Two plus two,’ and the people in the back say, ‘Four.’ Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin’. I mean, it’s not a place for smart people, Jerry. I know that’s not a popular opinion, but that’s my two cents on the issue.” — Rick");
            break;
        case 21: 
            alert("“Listen, Morty, I hate to break it to you, but what people call ‘love’ is just a chemical reaction that compels animals to breed.” — Rick");
            break;
        case 22: 
            alert("“Ooh yeah, shame me. At least when I’m disgusting, it’s on purpose.” — Summer Smith");
            break;
        case 23: 
            alert("“I realize now I’m attracted to you for the same reason I can’t be with you; you can’t change. And I have no problem with that, but it clearly means I have a problem with myself.” — Unity");
            break;
        case 24: 
            alert("Mr. Nimbus: Say goodbye to your precious dry land! For soon it will be wet! - Rick: Yeah, global warming is already doing that. But sure, yeah, go for it. Make us slightly more wet.");
            break;
        case 25: 
            alert("“You don’t get to tell anyone what’s sad. You’re like a one-man Mount Sadmore. So I guess like a Lincoln Sadmorial.” — Rick");
            break;
        case 26: 
            alert("“Wait a minute! Is that Mountain Dew in my quantum-transport-solution?” — Rick");
            break;
        case 27: 
            alert("“There’s a lesson here, and I’m not going to be the one to figure it out.” — Rick");
            break;
        case 28: 
            alert("“Listen, Morty, I hate to break it to you, but what people call love is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science.” — Rick");
            break;
        case 29: 
            alert("“Life is effort and I’ll stop when I die!” — Jerry");
            break;
        default:
            alert("“I’m a scientist; because I invent, transform, create, and destroy for a living, and when I don’t like something about the world, I change it.” — Pickle Rick");
            break;
    }
})