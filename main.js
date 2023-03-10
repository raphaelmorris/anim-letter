// Wrap every word in a span
let textWrapper = document.querySelectorAll('.anim-letters');

// Wrap full words to prevent awkward line breaks
//  ^          # the beginning of the string
//  [^\n ]*    # any character except: '\n' (newline), ' ' (0 or more times)
//  $          # before an optional \n, and the end of the string
textWrapper.forEach((wrapper) => {
    wrapper.innerHTML = wrapper.innerText.replace(/[^\n ]*/g, "<span class='anim-letters__word'>$&</span>");

    // Remove empty spans
    $(wrapper).find('.anim-letters__word:empty').remove();

});

// Wrap each letter
let wordWrapper = document.querySelectorAll('.anim-letters__word');
wordWrapper.forEach((word) => {
    word.innerHTML = word.textContent.replace(/\S/g, "<span class='anim-letters__letter-wrapper'><span class='anim-letters__letter'>$&</span></span>");
});

// Animate the letters
setTimeout(function(){
    anime.timeline({ loop: false })
    .add({
        targets: '.anim-letters .anim-letters__letter',
        translateY: [25, 0],
        translateZ: 0,
        rotate: [45, 0],
        opacity: [0,1],
        // easing: "linear",
        easing: "easeOutQuart",
        duration: 500,
        delay: (el, i) => 5 * i,
    })
}, 1500
)

anime({
    targets: ['.left', '.right'],
    opacity: {
        value: [0, 1],
        duration: 500,
        easing: 'linear',
        delay: anime.stagger(300, { from: 'center' })
    },
    scaleY: {
        value: [0, 1],
        duration: 500,
        easing: 'linear',
        delay: anime.stagger(300, { from: 'center' })
    },
    translateX: {
        value: function (target) {
            return target.classList.contains('left') ? '-100%' : '100%';
        },
        duration: 400,
        easing: 'linear',
        delay: 1500
    },
});