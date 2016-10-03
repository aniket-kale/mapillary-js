/// <reference path="../../typings/index.d.ts" />

import * as geohash from "latlon-geohash";

import {GeoCoords, ILatLon} from "../Geo";

class GeoHashDirections {
    public static n: string = "n";
    public static nw: string = "nw";
    public static w: string = "w";
    public static sw: string = "sw";
    public static s: string = "s";
    public static se: string = "se";
    public static e: string = "e";
    public static ne: string = "ne";
}

export class GraphCalculator {
    private _geoCoords: GeoCoords;

    constructor(geoCoords?: GeoCoords) {
        this._geoCoords = geoCoords != null ? geoCoords : new GeoCoords();
    }

    public encodeH(latLon: ILatLon, precision: number = 7): string {
        return geohash.encode(latLon.lat, latLon.lon, precision);
    }

    public encodeHs(latLon: ILatLon, precision: number = 7, threshold: number = 20): string[] {
        let h: string = geohash.encode(latLon.lat, latLon.lon, precision);
        let bounds: geohash.IBounds = geohash.bounds(h);
        let ne: geohash.ILatLon = bounds.ne;
        let sw: geohash.ILatLon = bounds.sw;
        let neighbours: { [key: string]: string } = geohash.neighbours(h);

        let bl: number[] = [0, 0, 0];
        let tr: number[] =
            this._geoCoords.geodeticToEnu(
                ne.lat,
                ne.lon,
                0,
                sw.lat,
                sw.lon,
                0);

        let position: number[] =
            this._geoCoords.geodeticToEnu(
                latLon.lat,
                latLon.lon,
                0,
                sw.lat,
                sw.lon,
                0);

        let left: number = position[0] - bl[0];
        let right: number = tr[0] - position[0];
        let bottom: number = position[1] - bl[1];
        let top: number = tr[1] - position[1];

        let l: boolean = left < threshold;
        let r: boolean = right < threshold;
        let b: boolean = bottom < threshold;
        let t: boolean = top < threshold;

        let hs: string[] = [h];

        if (t) {
            hs.push(neighbours[GeoHashDirections.n]);
        }

        if (t && l) {
            hs.push(neighbours[GeoHashDirections.nw]);
        }

        if (l) {
            hs.push(neighbours[GeoHashDirections.w]);
        }

        if (l && b) {
            hs.push(neighbours[GeoHashDirections.sw]);
        }

        if (b) {
            hs.push(neighbours[GeoHashDirections.s]);
        }

        if (b && r) {
            hs.push(neighbours[GeoHashDirections.se]);
        }

        if (r) {
            hs.push(neighbours[GeoHashDirections.e]);
        }

        if (r && t) {
            hs.push(neighbours[GeoHashDirections.ne]);
        }

        return hs;
    }
}

export default GraphCalculator;
