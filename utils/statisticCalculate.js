import { dataUkr } from "../data/dataUkr";
import { dataEng } from "../data/dataEng";

export const uniqueNarrativesUKR = [];
dataUkr.map((c) => {
  if (!uniqueNarrativesUKR.includes(c.Narrative)) {
    uniqueNarrativesUKR.push(c.Narrative);
  }
  return c;
});

export const uniqueFakesUKR = [];
dataUkr.map((c) => {
  if (!uniqueFakesUKR.includes(c.Fakes)) {
    uniqueFakesUKR.push(c.Fakes);
  }
  return c;
});

export const uniqueMediasUKR = [];
dataEng.map((c) => {
  if (!uniqueMediasUKR.includes(c.Media)) {
    uniqueMediasUKR.push(c.Media);
  }
  return c;
}); 

export const uniqueNarrativesENG = [];
dataEng.map((c) => {
  if (!uniqueNarrativesENG.includes(c.Narrative)) {
    uniqueNarrativesENG.push(c.Narrative);
  }
  return c;
});

export const uniqueFakesENG = [];
dataEng.map((c) => {
  if (!uniqueFakesENG.includes(c.Fakes)) {
    uniqueFakesENG.push(c.Fakes);
  }
  return c;
});

export const uniqueMediasENG = [];
dataUkr.map((c) => {
  if (!uniqueMediasENG.includes(c.Media)) {
    uniqueMediasENG.push(c.Media);
  }
  return c;
});
