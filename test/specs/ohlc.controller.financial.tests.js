describe('Financial controller tests', function() {
	it('Should create OHLC elements for each data item during initialization', function () {
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
      dataVolume = [
						{t: '2017-04-01 15:50', y: -15},
						{t: '2017-04-01 15:51', y: 80},
						{t: '2017-04-01 15:52', y: -21},
						{t: '2017-04-01 15:53', y: 33},
						{t: '2017-04-01 15:54', y: -8},
						{t: '2017-04-01 15:55', y: 44},
						{t: '2017-04-01 15:56', y: 55},
						{t: '2017-04-01 15:57', y: -22},
						{t: '2017-04-01 15:58', y: -11},
						{t: '2017-04-01 15:59', y: 32},
						{t: '2017-04-01 16:00', y: 15} ],
      scalesPriceVolume = [
        { id: 'yAxisPrice', position: 'left', gridLines: { drawOnChartArea: false } },
        { id: 'yAxisVolume', position: 'right', gridLines: { drawOnChartArea: true } } 
      ],
      chart = window.acquireChart({ type: 'ohlc',
			  data: {
				  datasets: [
            { label: 'OHLC', data:	dataOhlc, yAxisID: 'yAxisPrice' },
            { label: 'Volume', data: dataVolume, yAxisID: 'yAxisVolume', type: 'bar', backgroundColor: 'rgba(75, 192, 192, 0.4)' }
          ],
			  },
        options: {
          title: { display: true, text: 'Price and Volume Axes' },
          scales: { yAxes: scalesPriceVolume }
        }
		  }, { persistent: true });

		new Chart.controllers.ohlc(chart, 0);
		var meta = chart.getDatasetMeta(0);
		expect(meta.data.length).toBe(11);
		for (var i = 0; i < meta.data.length; i++) {
			expect(meta.data[i] instanceof Chart.elements.Ohlc).toBe(true);
		}
	});

});
