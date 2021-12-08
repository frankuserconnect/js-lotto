import { countLottoRank, calculateProfitRate } from "./utils/functions.js";
import { resultLottoTemplate, profitRateTemplate } from "./utils/templates.js";

export default class ResultModal {
	constructor({
		purchasedLottos,
		winningNumberArray,
		$showResultButton,
		$modal,
		$modalClose,
		$resultTable,
		$resultProfitRate,
	}) {
		this.purchasedLottos = purchasedLottos;
		this.winningNumberArray = winningNumberArray;
		this.$showResultButton = $showResultButton;
		this.$modal = $modal;
		this.$modalClose = $modalClose;
		this.$resultTable = $resultTable;
		this.$resultProfitRate = $resultProfitRate;

		const onModalShow = () => {
			if(this.purchasedLottos.length < 1) return
			this.$modal.classList.add("open");
		};

		const onModalClose = () => {
			this.$modal.classList.remove("open");
		};

		this.$showResultButton.addEventListener("click", onModalShow);
		this.$modalClose.addEventListener("click", onModalClose);
	}

	render() {
		const lottoRank = countLottoRank(
			this.purchasedLottos,
			this.winningNumberArray
		);
		console.log(lottoRank);
		this.$resultTable.innerHTML = resultLottoTemplate(lottoRank);
		const profitRate = calculateProfitRate(
			lottoRank,
			this.purchasedLottos.length
		);
		this.$resultProfitRate.innerText = profitRateTemplate(profitRate);
	}

	setLottoRank(nextPurchasedLottos, nextWinningNumberArray) {
		this.purchasedLottos = nextPurchasedLottos;
		this.winningNumberArray = nextWinningNumberArray;
		this.render();
	}
}