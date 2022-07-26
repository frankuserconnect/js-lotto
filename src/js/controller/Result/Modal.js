import store from '../../store/index.js';
import getRankCounts from '../../domain/lotto/getRankCounts.js';
import ResultTable from './Table.js';
import ResultYield from './Yield.js';
import ButtonRestart from '../ButtonRestart.js';

export default function ResultModal() {
  const render = () => {
    const countByRank = getRankCounts({
      lottos: store.state.lottoList,
      wonLotto: store.state.wonLotto,
      bonusNumber: store.state.bonusNumber,
    });

    ResultTable(countByRank);
    ResultYield(countByRank);
  };

  ButtonRestart();
  render();
}
