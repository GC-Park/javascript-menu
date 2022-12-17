const MissionUtils = require("@woowacourse/mission-utils");
const Coach = require("../model/Coach")
const {
	MENU_RECOMMEND_START,
  COACH_NAME_INPUT,
  UNABLE_TO_EAT,
  RECOMMEND_COMPLETE,
  RESULT_MENU_RECOMMEND,
  DIVISION_DAY,
  CATEGORY,
	KOREAN_FOOD,
  JAPANESE_FOOD,
  CHINESE_FOOD,
  ASIAN_FOOD,
  AMERICA_FOOD,
  START_BRACKET,
  CLOSE_BRACKET} = require("../utils/constant")

  const {
  coachValidate,
  unableToEatValidate
  } = require("../validationFunction")

const InputView = {
  insertCoachName(writeCoachName){
		MissionUtils.Console.readLine(COACH_NAME_INPUT,(name)=>{
      if(coachValidate(name)) return this.insertCoachName(writeCoachName);
			writeCoachName(name)
		});
	},

  unableToEat(writeUnableToEat, coach){
		MissionUtils.Console.readLine(`${coach}`+UNABLE_TO_EAT, (menu)=>{
      if(unableToEatValidate(menu)) return this.unableToEat(writeUnableToEat, coach);
			writeUnableToEat(menu)
		})
	}

}

module.exports = InputView;