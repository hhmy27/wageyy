'use client'

import {useState} from 'react'
import TimeInput from '@/components/TimeInput'
import WageInput from '@/components/WageInput'
import CountdownDisplay from '@/components/CountdownDisplay'
import EarningsDisplay from '@/components/EarningsDisplay'

export default function Home() {
    const [startTime, setStartTime] = useState('09:00')
    const [endTime, setEndTime] = useState('17:00')
    const [dailyWage, setDailyWage] = useState('')

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Wageyy - Salary Calculator</h1>

                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TimeInput startTime={startTime} endTime={endTime} onStartTimeChange={setStartTime} onEndTimeChange={setEndTime} />
                            <WageInput dailyWage={dailyWage} onWageChange={setDailyWage} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CountdownDisplay endTime={endTime} />
                            <EarningsDisplay startTime={startTime} endTime={endTime} dailyWage={dailyWage} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
