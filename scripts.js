const colorChange = () => {
    const r = Math.floor(Math.random() * 150);
    const g = Math.floor(Math.random() * 150);
    const b = Math.floor(Math.random() * 150);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

const QuotesArr = [
    "“What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?” — Rick",
    "“Wubba Lubba Dub Dub!” — Rick",
    "“Boom! Big reveal! I turned myself into a pickle!” — Rick",
    "“Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.” — Morty",
    "“To live is to risk it all; otherwise you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.” — Rick",
    "“Weddings are basically funerals with a cake.” — Rick",
    "“Sometimes science is more art than science.” — Rick",
    "“If I let you make me nervous, then we can’t get schwifty.” — Rick",
    "“Have fun with empowerment. It seems to make everyone that gets it really happy.” — Rick",
    "“Listen, I’m not the nicest guy in the universe, because I’m the smartest, and being nice is something stupid people do to hedge their bets.” — Rick",
    "“I know that new situations can be intimidating. You’re lookin’ around and it’s all scary and different, but y’know, meeting them head-on, charging into ‘em like a bull — that’s how we grow as people.” — Rick",
    "“You gotta do it for Grandpa, Morty. You gotta put these seeds inside your butt.” — Rick",
    "“Honey, stop raising your father’s cholesterol so you can take a hot funeral selfie.” — Beth",
    "“So what if he’s the devil, Rick? At least the devil has a job. At least he’s active in the community.” — Summer",
    "“Unity, I’m sorry. I didn’t know freedom meant people doing stuff that sucks. I was thinking more of a ‘choose your own cellphone carrier’ thing.” — Summer",
    "“Excuse me. Coming through. What are you here for? Just kidding, I don’t care.” — Rick",
    "“Yeah, sure, I mean, if you spend all day shuffling words around, you can make anything sound bad, Morty.” — Rick",
    "“Don’t get drawn into the culture, Morty. Stealing stuff is about the stuff, not the stealing.” — Rick",
    "“I’m sorry, but your opinion means very little to me.” — Rick",
    "“B*tch, my generation gets traumatized for breakfast!” — Summer",
    "“I’ll tell you how I feel about school, Jerry: It’s a waste of time. Bunch of people runnin’ around bumpin’ into each other, got a guy up front says, ‘Two plus two,’ and the people in the back say, ‘Four.’ Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin’. I mean, it’s not a place for smart people, Jerry. I know that’s not a popular opinion, but that’s my two cents on the issue.” — Rick",
    "“Listen, Morty, I hate to break it to you, but what people call ‘love’ is just a chemical reaction that compels animals to breed.” — Rick",
    "“Ooh yeah, shame me. At least when I’m disgusting, it’s on purpose.” — Summer Smith",
    "“I realize now I’m attracted to you for the same reason I can’t be with you; you can’t change. And I have no problem with that, but it clearly means I have a problem with myself.” — Unity",
    "Mr. Nimbus: Say goodbye to your precious dry land! For soon it will be wet! - Rick: Yeah, global warming is already doing that. But sure, yeah, go for it. Make us slightly more wet.",
    "“You don’t get to tell anyone what’s sad. You’re like a one-man Mount Sadmore. So I guess like a Lincoln Sadmorial.” — Rick",
    "“Wait a minute! Is that Mountain Dew in my quantum-transport-solution?” — Rick",
    "“There’s a lesson here, and I’m not going to be the one to figure it out.” — Rick",
    "“Listen, Morty, I hate to break it to you, but what people call love is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science.” — Rick",
    "“Life is effort and I’ll stop when I die!” — Jerry",
    "“I’m a scientist; because I invent, transform, create, and destroy for a living, and when I don’t like something about the world, I change it.” — Pickle Rick"
]


let idColorChange = setInterval(()=>{
    colorChange();
}, 1000)

const phraseButton = document.getElementById("phraseButton");

const randomNumber = () => {
    const number = Math.floor(Math.random() * QuotesArr.length - 1);
    return number;
}

phraseButton.addEventListener('click',()=>{
    clearInterval(idColorChange)
    const ranNumber = randomNumber();
    alert(QuotesArr[ranNumber]);
})