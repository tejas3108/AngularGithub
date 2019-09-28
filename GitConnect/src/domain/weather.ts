import { Coordinates } from './coordinates';
import { WeatherData } from './weatherData';
import { Temperature } from './temperature';

export class Weather {
    name: string;
    visibility: number;
    coord: Coordinates;
    weather: WeatherData[];
    main: Temperature;

    constructor(name: string, visibility: number){
        this.name = name;
        this.visibility = visibility;
    }

    public getSkies():string{
        return this.weather[0].main;
    }
}
