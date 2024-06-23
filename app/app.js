const $card = document.querySelectorAll(".slider");
const $prevBtn = document.querySelectorAll(".prev-btn");
const $nextBtn = document.querySelectorAll(".next-btn");
let cardsLength = $card.length - 1;
let countNext = 0;
let countPrev = cardsLength;
let startCard = 0;

$nextBtn.forEach(btn => {
    btn.addEventListener("click", e => {
    if($card[countNext] === $card[cardsLength]) {
        $card[0].classList.remove("next");
        $card[cardsLength].classList.add("next");
        countNext = 0;
        return;
    }

    $card[countNext].classList.add("next");
    countNext++;
    $card[countNext].classList.remove("next");
         })
    })

    $prevBtn.forEach(btn => {
        btn.addEventListener("click", e => {
        if(countPrev === -1) {
            $card[startCard].classList.add("next");
            $card[cardsLength].classList.remove("next");
            countPrev = cardsLength;
        }
        
        if($card[countPrev] === $card[cardsLength]) {
            $card[startCard].classList.add("next");
            $card[countPrev].classList.remove("next");
            countPrev--;
            console.log(countPrev);
            return;
        }

        $card[countPrev+1].classList.add("next");
        $card[countPrev].classList.remove("next");
        countPrev--;
        console.log(countPrev);
             })
            })