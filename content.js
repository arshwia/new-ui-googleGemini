function hideElements() {
  const userHeader = document.querySelector(".boqOnegoogleliteOgbOneGoogleBar");
  const userHeader2 = document.querySelector(
    ".ng-tns-c1718670305-0 ng-star-inserted .side-nav-expanded"
  );
  const geminiMistake_bar = document.querySelector(
    "[class*='hallucination-disclaimer']"
  );
  const box1 = document.querySelector("[class*='leading-actions-wrapper']");
  const box2 = document.querySelector("[class*='trailing-actions-wrapper']");
  const inputpromt = document.querySelector(
    ".input-gradient .ng-tns-c2657661529-2 .ng-tns-c1447758201-1 .ui-improvements-phase-1 .ng-star-inserted"
  );

  if (userHeader) userHeader.style.display = "none";
  if (userHeader2) userHeader.style.display = "none";

  if (geminiMistake_bar) geminiMistake_bar.style.display = "none";

  if (box1) box1.style.display = "none";
  if (box2) box2.style.display = "none";

  // TODO  باید ببینم چه طوری واقعا سایز این رو کوچیک نگه دارم
  if (inputpromt) inputpromt.style.setProperty("height", "35px", "important");
  if (inputpromt) inputpromt.style.margin = "0 !important";
  if (inputpromt) inputpromt.style.padding = "0 !important";
}

setTimeout(7000);

hideElements();

const observer = new MutationObserver(hideElements);
observer.observe(document.body, { childList: true, subtree: true });
