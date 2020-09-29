import { Component, OnInit, Input } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Vector from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'app-open-layer-map',
  templateUrl: './open-layer-map.component.html',
  styleUrls: ['./open-layer-map.component.sass']
})
export class OpenLayerMapComponent implements OnInit {

  map: Map;
  @Input() zoom: number;
  @Input() lon: number = 0;
  @Input() lat: number = 0;
  constructor() { }

  ngOnInit(): void {
    if(!this.zoom) {
      this.zoom = 5
    }

    this.map = new Map({
      interactions: [],
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([this.lon, this.lat]),
        zoom: this.zoom
      })
    })

    let marker = new Feature({
      type: 'icon',
      geometry: new Point(olProj.fromLonLat([this.lon, this.lat]))
    });

    var layer = new VectorLayer({
      source: new VectorSource({
          features: [
              marker
          ]
      }),
      style: new Style({
          image: new Icon({
            anchor: [0.5, 1],
            scale: 0.07,
            src: 'assets/img/pointer.png',
          })
      })
  });
  this.map.addLayer(layer);
  }
}
