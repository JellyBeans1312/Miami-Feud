import data from "../data";
import Turn from "./Turn";
import domUpdates from "./domUpdates";
class Round {
  constructor (currentRound, currentPlayer, num) {
    this.randomNum = num || (Math.floor(Math.random() * (15 - 1 + 1)) + 1);
    this.survey = (this.pullSurveys(this.randomNum));
    this.currentRound = currentRound;
    this.currentPlayer = currentPlayer;
    this.turn = new Turn(this.survey, currentPlayer);
  }

  pullSurveys(randomSurveyID) {
    let survey = data.surveys.find(survey => survey.id === randomSurveyID);
    return survey;
  }

  removeSurvey() {
    let index = data.surveys.indexOf(this.survey)
    return data.surveys.splice(index, 1)
  }
} 

export default Round