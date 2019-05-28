import Turn from "./Turn";
import FastMoney from "./FastMoney";
class Round {
  constructor (currentRound, currentPlayer, data, num) {
    this.randomNum = num || (Math.floor(Math.random() * (15 - 1 + 1)) + 1);
    this.currentRound = currentRound;
    this.currentPlayer = currentPlayer;
    this.data = data;
    this.survey = (this.pullSurveys(this.randomNum));
    this.answers = this.findAnswers()
    this.turn = (this.startNewTurn())
  }

  findAnswers() {
    let answers = [...this.data.answers]
    let filteredAnswers = answers
      .filter(steve => steve.surveyId === this.survey.id)
    let sortedAnswers = filteredAnswers
      .sort((a, b) => b.respondents - a.respondents)
    return sortedAnswers
  }

  pullSurveys(randomSurveyID) {
    let survey = this.data.surveys.find(survey => survey.id === randomSurveyID);
    return survey;
  }

  removeSurvey() {
    let index = this.data.surveys.indexOf(this.survey)
    return this.data.surveys.splice(index, 1)
  }

  startNewTurn() {
    if (this.currentRound < 3) {
      return this.turn = new Turn(this.answers, this.currentPlayer);
    } else {
      return this.turn = new FastMoney(this.answers, this.currentPlayer)
    }
    
  }
} 

export default Round