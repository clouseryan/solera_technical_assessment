import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { env } from '../../config/env';
import type { WeatherForecast } from '@/models/weather-forecast.model';

interface TestState {
    weather: WeatherForecast[];
    loading: boolean;
    error: string | null;
}

const initialState: TestState = {
    weather: [],
    loading: false,
    error: null,
};

export const fetchWeather = createAsyncThunk(
    'test/fetchWeather',
    async () => {
        // Construct the full URL using the base API URL from config
        // Assuming env.API_URL does not have a trailing slash, verify if needed, but standardizing on non-trailing slash is good practice.
        // If env.API_URL is "localhost:5024", we need http protocol if not present? 
        // Let's assume env.API_URL is "http://localhost:5024" or similar.
        // user previously set APP_API_URL to localhost:5024. fetch needs protocol. 
        // However, I should probably check how env.API_URL is defined. 
        // looking at previous view_file of env.ts: export const env = { API_URL: import.meta.env.VITE_APP_API_URL };
        // If the user just put "localhost:5024", fetch might fail without http://.
        // Use a safe approach.

        let baseUrl = env.API_URL;
        if (!baseUrl) {
            throw new Error("API URL not configured");
        }
        if (!baseUrl.startsWith('http')) {
            baseUrl = `http://${baseUrl}`;
        }

        const response = await fetch(`${baseUrl}/weatherforecast`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        return (await response.json()) as WeatherForecast[];
    }
);

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred';
            });
    },
});

export default testSlice.reducer;
