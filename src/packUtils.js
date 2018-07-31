import _ from 'lodash';

export default class PackUtils {
  static getSolution(pack, selected) {
    if (pack.length == 0) return { isCorrect: false, explanation: '' };

    var packSorted = _.orderBy(pack, 'score', 'desc').filter(x => x.score);
    var answer = { isCorrect: false };
    if (packSorted[0].name == selected.name) {
      answer.isCorrect = true;
    }

    answer.explanation = PackUtils.getExplanation(packSorted, selected);
    return answer;
  }

}
