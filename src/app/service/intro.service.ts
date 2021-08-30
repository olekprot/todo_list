import {Injectable} from '@angular/core';
import * as introJs from "intro.js";

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  public static INTRO_VIEWED_KEY = 'intro-viewed'; // ключ
  public static INTRO_VIEWED_VALUE = 'done'; // значение

  public introJS = introJs();

  constructor() {
  }

  public startIntroJS(checkViewed: boolean) {
    if (checkViewed === true && localStorage.getItem(IntroService.INTRO_VIEWED_KEY) === IntroService.INTRO_VIEWED_VALUE) {
      return;
    }
    this.introJS.setOptions(
        {
          nextLabel: 'след. >',
          prevLabel: '< пред.',
          doneLabel: 'Выход',
          exitOnEsc: true,
          exitOnOverlayClick: false
        });

    this.introJS.start();
    this.introJS.onexit((_ : any) => localStorage.setItem(IntroService.INTRO_VIEWED_KEY, IntroService.INTRO_VIEWED_VALUE));
  }
}
