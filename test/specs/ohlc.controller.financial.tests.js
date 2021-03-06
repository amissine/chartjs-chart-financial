describe('Financial controller tests', function() {
	it('Should create OHLC, Bought/Sold, Ema1, and Ema2 elements', function () {
		var dataOhlc = [
						{t: '2017-04-01 15:50', o: 1070.87, h: 1080.13, l: 1040.94, c: 1050.24},
						{t: '2017-04-01 15:51', o: 1070.87, h: 1080.13, l: 1040.94, c: 1050.24},
						{t: '2017-04-01 15:52', o: 1060.23, h: 1180.23, l: 1050.29, c: 1090.20},
						{t: '2017-04-01 15:53', o: 1040.00, h: 1050.42, l: 1020.31, c: 1030.20},
						{t: '2017-04-01 15:54', o: 1060.90, h: 1080.34, l: 1040.14, c: 1060.29},
						{t: '2017-04-01 15:55', o: 1060.94, h: 1100.09, l: 1050.78, c: 1090.04},
						{t: '2017-04-01 15:56', o: 1030.49, h: 1050.20, l: 1020.09, c: 1040.20},
						{t: '2017-04-01 15:57', o: 1050.04, h: 1080.93, l: 1040.94, c: 1070.24},
						{t: '2017-04-01 15:58', o: 1060.29, h: 1100.49, l: 1050.49, c: 1090.24},
						{t: '2017-04-01 15:59', o: 1040.04, h: 1050.23, l: 1020.23, c: 1030.49},
						{t: '2017-04-01 16:00', o: 1030.23, h: 1050.09, l: 1020.87, c: 1040.49} ],
     dataBought = [
						{t: '2017-04-01 15:50', y: 15},
						{t: '2017-04-01 15:51', y: 80},
						{t: '2017-04-01 15:52', y: 21},
						{t: '2017-04-01 15:53', y: 33},
						{t: '2017-04-01 15:54', y: 8},
						{t: '2017-04-01 15:55', y: 44},
						{t: '2017-04-01 15:56', y: 55},
						{t: '2017-04-01 15:57', y: 22},
						{t: '2017-04-01 15:58', y: 11},
						{t: '2017-04-01 15:59', y: 32},
						{t: '2017-04-01 16:00', y: 15} ],
     dataSold = [
						{t: '2017-04-01 15:50', y: -15},
						{t: '2017-04-01 15:51', y: -80},
						{t: '2017-04-01 15:52', y: -21},
						{t: '2017-04-01 15:53', y: -33},
						{t: '2017-04-01 15:54', y: -8},
						{t: '2017-04-01 15:55', y: -44},
						{t: '2017-04-01 15:56', y: -55},
						{t: '2017-04-01 15:57', y: -22},
						{t: '2017-04-01 15:58', y: -11},
						{t: '2017-04-01 15:59', y: -32},
						{t: '2017-04-01 16:00', y: -15} ],
      dataEma1 = [
						{t: '2017-04-01 15:50', y: 1050},
						{t: '2017-04-01 15:51', y: 1120},
						{t: '2017-04-01 15:52', y: 1040},
						{t: '2017-04-01 15:53', y: 1060},
						{t: '2017-04-01 15:54', y: 1080},
						{t: '2017-04-01 15:55', y: 1030},
						{t: '2017-04-01 15:56', y: 1070},
						{t: '2017-04-01 15:57', y: 1090},
						{t: '2017-04-01 15:58', y: 1060},
						{t: '2017-04-01 15:59', y: 1040},
						{t: '2017-04-01 16:00', y: 1040} ],
      dataEma2 = [
						{t: '2017-04-01 15:50', y: 1100},
						{t: '2017-04-01 15:51', y: 1090},
						{t: '2017-04-01 15:52', y: 1080},
						{t: '2017-04-01 15:53', y: 1070},
						{t: '2017-04-01 15:54', y: 1060},
						{t: '2017-04-01 15:55', y: 1050},
						{t: '2017-04-01 15:56', y: 1040},
						{t: '2017-04-01 15:57', y: 1030},
						{t: '2017-04-01 15:58', y: 1020},
						{t: '2017-04-01 15:59', y: 1010},
						{t: '2017-04-01 16:00', y: 1030} ],
      scalesPriceVolume = [
        { id: 'yAxisPrice', position: 'left', gridLines: { drawOnChartArea: false } },
        { id: 'yAxisVolume', position: 'right', stacked: true, gridLines: { drawOnChartArea: true } }],
      scaleX = [{ stacked: true, gridLines: { offsetGridLines: true } }],
      chart = window.acquireChart({ type: 'ohlc',
			  data: {
				  datasets: [
            { label: 'Bought', data: dataBought, yAxisID: 'yAxisVolume', type: 'bar', backgroundColor: 'rgba(5, 192, 19, 0.4)' },
            { label: 'Sold', data: dataSold, yAxisID: 'yAxisVolume', type: 'bar', backgroundColor: 'rgba(192, 5, 19, 0.4)' },
            { label: 'OHLC', data:	dataOhlc, yAxisID: 'yAxisPrice' },
            { label: 'Ema1', data: dataEma1, yAxisID: 'yAxisPrice', type: 'line', backgroundColor: 'rgba(35, 92, 92, 0.2)' },
            { label: 'Ema2', data: dataEma2, yAxisID: 'yAxisPrice', type: 'line', backgroundColor: 'rgba(150, 98, 98, 0.4)' },
          ],
			  },
        options: {
          title: { display: true, text: 'Price and Volume Data' },
          scales: { yAxes: scalesPriceVolume, xAxes: scaleX }
        }
		  }, { persistent: true });

		new Chart.controllers.ohlc(chart, 0);
		var meta = chart.getDatasetMeta(2);
		expect(meta.data.length).toBe(11);
		for (var i = 0; i < meta.data.length; i++) {
			expect(meta.data[i] instanceof Chart.elements.Ohlc).toBe(true);
		}
	});

});
