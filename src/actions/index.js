// Action creator, click start btn, returns an action
export const clickStart = (timerRuns) => {
  return {
    type: 'BUTTON_CLICKED',
    payload: !timerRuns
  }
}