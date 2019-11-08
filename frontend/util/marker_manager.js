export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    benches.forEach(bench => {
      if (!(bench.id in this.markers)) {
        this.createMarkerFromBench(bench);
      }
    });
  }

  createMarkerFromBench(bench) {
    const { lat, lng, description } = bench;

    let marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      title: description
    });
    this.markers[bench.id] = marker;
    marker.setMap(this.map);
  }
}
