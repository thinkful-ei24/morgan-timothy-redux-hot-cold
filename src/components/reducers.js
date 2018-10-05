import { MAKE_GUESS, GENERATE_AURAL_UPDATE, RESTART_GAME } from './actions'

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export default function gameReducer(state = initialState, action){
  switch(action.type){

    
    case MAKE_GUESS: 
      const guess = parseInt(action.guess, 10);
      if (isNaN(guess)) {
        return {
          ...state,
          feedback: 'Please enter a valid number' 
        };
      }

      const difference = Math.abs(guess - state.correctAnswer);

      let feedback;
      if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
      } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
      } else {
        feedback = 'You got it!';
      }
      return {
        ...state,
        feedback,
        guesses: [...state.guesses, action.guess]
      };   

    case RESTART_GAME:
      return initialState;
    
    case GENERATE_AURAL_UPDATE:
    const { guesses, feedback: stateFeedback } = state;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${stateFeedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    return {
      ...state,
      auralStatus
    };

    default: 
      return state;
  }
}