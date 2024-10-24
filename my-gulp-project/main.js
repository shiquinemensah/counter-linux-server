  /**
 * Prize data will space out evenly on the deal wheel based on the amount of items available.
 * @param text [string] name of the prize
 * @param color [string] background color of the prize
 * @param reaction ['resting' | 'dancing' | 'laughing' | 'shocked'] Sets the reaper's animated reaction
 */
  const prizes = [
    {
    
      text: "YES",
      color: "hsl(197 30% 43%)",
      reaction: "dancing"
    },
    { 
      text: "NO",
      color: "hsl(173 58% 39%)",
      reaction: "shocked"
    },
    { 
      text: "YES",
      color: "hsl(43 74% 66%)",
      reaction: "shocked" 
    },
    {
      text: "NO",
      color: "hsl(27 87% 67%)",
      reaction: "shocked"
    },
    {
      text: "YES",
      color: "hsl(12 76% 61%)",
      reaction: "dancing"
    },
    {
      text: "NO",
      color: "hsl(350 60% 52%)",
      reaction: "laughing"
    },
    {
      text: "YES",
      color: "hsl(91 43% 54%)",
      reaction: "laughing"
    },
    {
      text: "NO",
      color: "hsl(140 36% 74%)",
      reaction: "dancing"
    }
  ];



  
  const wheel = document.querySelector(".deal-wheel");
  const spinner = wheel.querySelector(".spinner");
  const trigger = wheel.querySelector(".btn-spin");
  const ticker = wheel.querySelector(".ticker");
//   const reaper = wheel.querySelector(".grim-reaper");
  const prizeSlice = 360 / prizes.length;
  const prizeOffset = Math.floor(180 / prizes.length);
  const spinClass = "is-spinning";
  const selectedClass = "selected";
  const spinnerStyles = window.getComputedStyle(spinner);
  let tickerAnim;
  let rotation = 0;
  let currentSlice = 0;
  let prizeNodes;
  let counter = 0;
  let counterElementYes = document.querySelector(".counter.yes");
  let counterElementNo = document.querySelector(".counter.no");

  let numberCounterYes = 0;
  let numberCounterNo = 0;

  
  const createPrizeNodes = () => {
    prizes.forEach(({ text, color, reaction }, i) => {
      const rotation = ((prizeSlice * i) * -1) - prizeOffset;
      
      spinner.insertAdjacentHTML(
        "beforeend",
        `<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
          <span class="text">${text}</span>
        </li>`
      );
    });
  };
  
  const createConicGradient = () => {
    spinner.setAttribute(
      "style",
      `background: conic-gradient(
        from -90deg,
        ${prizes
          .map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
          .reverse()
        }
      );`
    );
  };
  
  
  const setupWheel = () => {
    createConicGradient();
    createPrizeNodes();
    prizeNodes = wheel.querySelectorAll(".prize");
  };
  
  const spinertia = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const runTickerAnimation = () => {
    // https://css-tricks.com/get-value-of-css-rotation-through-javascript/
    const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
    const a = values[0];
    const b = values[1];  
    let rad = Math.atan2(b, a);
    
    if (rad < 0) rad += (2 * Math.PI);
    
    const angle = Math.round(rad * (180 / Math.PI));
    const slice = Math.floor(angle / prizeSlice);
  
    if (currentSlice !== slice) {
      ticker.style.animation = "none";
      setTimeout(() => ticker.style.animation = null, 10);
      currentSlice = slice;
    }
  
    tickerAnim = requestAnimationFrame(runTickerAnimation);
  };
  
  const selectPrize = () => {
    const selected = Math.floor(rotation / prizeSlice);
    prizeNodes[selected].classList.add(selectedClass);

    if (prizes[selected].text === 'YES') {
        console.log('yes hello');
        numberCounterYes++
        counterElementYes.textContent = numberCounterYes;

      }else {
        numberCounterNo++
        counterElementNo.textContent = numberCounterNo;
        console.log('no')
      }
  };
  
  trigger.addEventListener("click", () => {
     
    rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
    prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
    wheel.classList.add(spinClass);
    spinner.style.setProperty("--rotate", rotation);
    ticker.style.animation = "none";
    runTickerAnimation();
  });
  
  spinner.addEventListener("transitionend", () => {
    cancelAnimationFrame(tickerAnim);
    trigger.disabled = false;
    trigger.focus();
    rotation %= 360;
    selectPrize();
    wheel.classList.remove(spinClass);
    spinner.style.setProperty("--rotate", rotation);
  });



  // counter slice wheel changer


  // document.getElementById("btn-one").onclick = function() {
  //   prizes.pop()
  // }
  
  
  
  setupWheel();

