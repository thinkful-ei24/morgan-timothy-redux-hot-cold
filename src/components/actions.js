export const MAKE_GUESS = 'MAKE_GUESS';
export const RESTART_GAME = 'RESTART_GAME';
export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';

export function makeGuess(guess){
  return {
    type: MAKE_GUESS,
    guess
  };
}

export function restartGame(){
  return {
    type: RESTART_GAME
  }

}

export function generateAuralUpdate(){
  return {
    type: GENERATE_AURAL_UPDATE,
  }
}

