'use client'

import {useState} from 'react'
import TimeInput from '../components/TimeInput'
import WageInput from '../components/WageInput'
import CountdownDisplay from '../components/CountdownDisplay'
import EarningsDisplay from '../components/EarningsDisplay'
import {Card, CardContent, CardHeader, CardTitle} from '../components/ui/card'
import {Separator} from '../components/ui/separator'

export default function Home() {
    const [startTime, setStartTime] = useState('09:00')
    const [endTime, setEndTime] = useState('17:00')
    const [dailyWage, setDailyWage] = useState('')

    return (
        <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
            <div className="mx-auto max-w-3xl space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Wageyy</h1>
                    <p className="mt-2 text-lg text-muted-foreground">Track your daily earnings in real-time</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Work Schedule & Rate</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <TimeInput startTime={startTime} endTime={endTime} onStartTimeChange={setStartTime} onEndTimeChange={setEndTime} />
                        <Separator />
                        <WageInput dailyWage={dailyWage} onWageChange={setDailyWage} />
                    </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                    <CountdownDisplay startTime={startTime} endTime={endTime} />
                    <EarningsDisplay startTime={startTime} endTime={endTime} dailyWage={dailyWage} />
                </div>
            </div>
        </main>
    )
}
