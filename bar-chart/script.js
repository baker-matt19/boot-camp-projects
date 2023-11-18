$(document).ready(() => {
	// creating a function to render the data from the json that i retrieved with the fetch method
	const render = (data) => {
		// setting a variable to represent my array of data
		let dataSet = data.data;

		//    setting variables  for the height width and padding
		let h = 500;
		let w = 800;
		let ph = 25;
		let pw = 40;

		//    creating a scale for my x attr based on the year and a scale for my y based on the gdp data
		const xScale = d3
			.scaleLinear()
			.domain([1947, 2015])
			.range([pw, w - pw]);

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(dataSet, (d) => d[1])])
			.range([h - ph, ph]);

		// creating my h1 element
		d3.select("body")
			.append("h1")
			.text("United States GDP")
			.style("margin", "auto")
			.style("padding", "auto")
			.style("width", "100%")
			.style("height", "100%")
			.style("text-align", "center")
			.attr("id", "title");

		// creating the svg element
		const svg = d3
			.select("body")
			.append("svg")
			.style("margin", "5%")
			.attr("width", w)
			.attr("height", h);

		// creating the bars to represent the gdp data
		svg
			.selectAll("rect")
			.data(dataSet)
			.enter()
			.append("rect")
			.attr("class", "x-axis")
			.attr("x", (d, i) => pw + i * 2.62)
			.attr("y", (d) => yScale(d[1]))
			.attr("width", 2)
			.attr("height", (d, i) => d[1] / 40)
			.attr("fill", "blue")
			.attr("class", "bar")
			.attr("data-date", (d) => d[0])
			.attr("data-gdp", (d) => d[1])
			.append("title")
			.text((d) => "data-date " + d[0] + ", data-gdp " + d[1])
			.attr("id", "tooltip");

		// creating the x-axis for the date data as well as a label of year
		const xAxis = d3.axisBottom(xScale).tickFormat((d, i) => d);

		svg
			.append("g")
			.call(xAxis)
			.attr("id", "x-axis")
			.attr("transform", "translate(0, " + (h - ph) + ")");

		d3.select("svg").append("text").text("Year").attr("x", 350).attr("y", 500);

		// creating the y-axis for the gdp data as well as a label of gross domestic product
		const yAxis = d3.axisLeft(yScale);

		svg
			.append("g")
			.call(yAxis)
			.attr("transform", "translate(" + pw + ", 0)")
			.attr("id", "y-axis");

		d3.select("svg").append("text").text("Gross").attr("x", 45).attr("y", 100);

		d3.select("svg")
			.append("text")
			.text("Domestic")
			.attr("x", 45)
			.attr("y", 120);

		d3.select("svg")
			.append("text")
			.text("Product")
			.attr("x", 45)
			.attr("y", 140);
	};

	// using the fetch method to get the data from my json file
	fetch("assets/json-gdp-data.json")
		.then((response) => response.json())
		.then((data) => render(data));
});
