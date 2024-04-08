import Quests from "../models/QuestModel";

export const getQuests = async (req, res) => {
  try {
    const quests = await Quests.findAll();
    let questWithLink;
    quests.map(async (quest) => {
      questWithLink.quest = quest;
      const questsCharacters = await QuestsCharacters.findAll({
        where: {
          questId: quest.id,
        },
      });
      questWithLink.links = questsCharacters;
    });

    res.json(questWithLink);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
export const getQuestById = async (req, res) => {
  try {
    const quest = await Quests.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(quest.dataValues);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
