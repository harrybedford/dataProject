import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'canvas-component',
  templateUrl: './canvas.html',
  styleUrls: ['./canvas.styl']
})

export class Canvas {

	private width = 900;

  	private height = 600;

  	svg = d3.select('canvas-component')
  			.append('svg')
  			.attr('width', this.width)
  			.attr('height', this.height);

	nodes = [{location: 1}, {location: 2}, {location: 3}];

	node = this.svg.selectAll('.node')
				.data(this.nodes)
				.enter().append('circle')
				.attr('class', 'node')
				.attr('cx', (d, i) => {return this.width * (d.location / 4);})
				.attr('cy', (d, i) => {return this.height / i;})
				.attr('r', (d, i) => {return d.location * 10;});

	force = d3.forceSimulation().force()
				.size([this.width, this.height])
				.nodes(this.nodes)
				.start();

}