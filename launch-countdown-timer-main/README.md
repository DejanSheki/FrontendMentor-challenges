# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

Your challenge is to build out this countdown timer and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](./images/screenshot.png)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

How to Listen for CSS Events in Javascript

```javascript
// element is an HTML element with a CSS animation property
const element = document.querySelector(".an-element");

element.addEventListener("animationstart", () => {
  console.log("animation has started");
});

element.addEventListener("animationend", () => {
  console.log("animation has ended");
});
```

The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.

```css
font-variant-numeric: normal;
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums; /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums; /* <numeric-figure-values> */
font-variant-numeric: proportional-nums; /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums; /* <numeric-spacing-values> */
font-variant-numeric: diagonal-fractions; /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions; /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions;
```

## Author

- [Website](https://www.dejanlukic.com)
- [FrontendMentor](https://www.frontendmentor.io/profile/DejanSheki)
- [Linkedin](https://www.linkedin.com/in/dejansheki/)
- [Twitter](https://twitter.com/DejanSheki)
- [CSSBattle](https://cssbattle.dev/player/dejansheki)
