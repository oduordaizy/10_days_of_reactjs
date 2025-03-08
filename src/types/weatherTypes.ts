export interface weatherData {
    name: string,
    main: {
        temp: number,
        humidity: number,
        pressure: number
    }
    weather: Array<{
        main: string,
        description: string,
        icon: string
    }>
    wind: {
        speed: number;
    }
}

export interface weatherError{
    message: string
}