'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function TestResults() {
    const [testResults, setTestResults] = useState(null);
    const [specs, setSpecs] = useState(null);
    const [runningTime, setRunningTime] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        let timer;
        let startTime;

        const updateRunningTime = () => {
            if (startTime) {
                setRunningTime(((Date.now() - startTime) / 1000).toFixed(1));
            }
        };

        const runTest = async () => {
            startTime = Date.now();
            timer = setInterval(updateRunningTime, 200);

            try {
                const response = await fetch(`/api/runTest`);
                const result = await response.json();
                setTestResults(result);
            } catch (error) {
                setError(error.toString());
            } finally {
                clearInterval(timer);
            }
        };

        const getSpecs = async () => {
            try {
                const response = await fetch('/api/getSpecs');
                const result = await response.json();
                setSpecs(result);
            } catch (error) {
                setError(error.toString());
            }
        };

        runTest();
        getSpecs();

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Next.js / SQLite Test</h2>
                <small>(5 minutes cache)</small>
                <div id="results-box">
                    {testResults ? (
                        <ul>
                            <li>Duration: {testResults.duration ? testResults.duration.toLocaleString() : 'N/A'} seconds</li>
                            <li>DB size: {testResults.dbSizeInMb ? (testResults.dbSizeInMb >= 1024 ? `${(testResults.dbSizeInMb / 1024).toLocaleString(undefined, { maximumFractionDigits: 1 })}GB` : `${testResults.dbSizeInMb.toLocaleString()}MB`) : 'N/A'}</li>
                            <li>Records processed: {testResults.total ? testResults.total.toLocaleString() : 'N/A'}</li>
                            <li>Reads/sec: {testResults.readsPerSecond ? testResults.readsPerSecond.toLocaleString() : 'N/A'}</li>
                            <li>Writes/sec: {testResults.writesPerSecond ? testResults.writesPerSecond.toLocaleString() : 'N/A'}</li>
                        </ul>
                    ) : (
                        <div className={styles.flexRow}>
                            <div className={styles.spinner}></div>
                            <span>Running test ({runningTime}s)...</span>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.card}>
                <h2>VPS Specs</h2>
                <small>(<a href="https://www.vultr.com/pricing/" target="_blank">Vultr High Performance Intel $12/mo</a> with <a href="https://www.cloudpanel.io/" target="_blank">CloudPanel</a>)</small>
                <div id="specs-box">
                    {specs ? (
                        <ul>
                            {Object.entries(specs).map(([key, value]) => (
                                <li key={key}>{key}: {value}</li>
                            ))}
                        </ul>
                    ) : (
                        <div className={styles.flexRow}>
                            <div className={styles.spinner}></div>
                            <span>Loading specs data...</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}