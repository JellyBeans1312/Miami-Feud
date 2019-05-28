import data from "../data";
import Turn from "./Turn";
import domUpdates from "./domUpdates";
import FastMoney from "./FastMoney";
class Round {
  constructor (currentRound, currentPlayer, num) {
    this.randomNum = num || (Math.floor(Math.random() * (15 - 1 + 1)) + 1);
    this.survey = (this.pullSurveys(this.randomNum));
    this.answers = this.findAnswers()
    this.currentRound = currentRound;
    this.currentPlayer = currentPlayer;
    this.turn = (this.startNewTurn())
  }

  findAnswers() {
    let answers = [...data.answers]
    let filteredAnswers = answers
      .filter(steve => steve.surveyId === this.survey.id)
    let sortedAnswers = filteredAnswers
      .sort((a, b) => b.respondents - a.respondents)
    return sortedAnswers
  }

  pullSurveys(randomSurveyID) {
    let survey = data.surveys.find(survey => survey.id === randomSurveyID);
    return survey;
  }

  removeSurvey() {
    let index = data.surveys.indexOf(this.survey)
    return data.surveys.splice(index, 1)
  }

  startNewTurn() {
    if (this.currentRound < 3) {
      return this.turn = new Turn(this.answers, this.currentPlayer);
    } else {
      console.log('fast money')
      return this.turn = new FastMoney(this.answers, this.currentPlayer)
    }
    
  }
} 

export default Round