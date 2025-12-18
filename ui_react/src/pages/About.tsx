import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { fetchWeather } from '../store/slices/testSlice';

export const About = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { weather, loading, error } = useSelector((state: RootState) => state.test);

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>About Page</h2>
            <p>This is the about page.</p>

            <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                <h3>Weather Forecast Data</h3>
                <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>
                    Note: This is just test data to verify API integration.
                </p>

                {loading && <p>Loading weather data...</p>}

                {error && <p style={{ color: 'red' }}>Error: {error}</p>}

                {!loading && !error && weather.length > 0 && (
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f0f0f0' }}>
                                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Date</th>
                                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Temp (C)</th>
                                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Temp (F)</th>
                                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Summary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {weather.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.date}</td>
                                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.temperatureC}</td>
                                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.temperatureF}</td>
                                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.summary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {!loading && !error && weather.length === 0 && (
                    <p>No weather data available.</p>
                )}
            </div>
        </div>
    );
};
