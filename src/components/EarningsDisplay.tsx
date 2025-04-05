'use client'

import {useEffect, useState} from 'react'
import {Card, CardContent, CardHeader, CardTitle} from './ui/card'

interface EarningsDisplayProps {
    startTime: string
    endTime: string
    dailyWage: string
}

export default function EarningsDisplay({startTime, endTime, dailyWage}: EarningsDisplayProps) {
    const [earnings, setEarnings] = useState<number>(0)

    useEffect(() => {
        const calculateEarnings = () => {
            const now = new Date()
            const [startHours, startMinutes] = startTime.split(':')
            const [endHours, endMinutes] = endTime.split(':')
            const wage = parseFloat(dailyWage) || 0

            const start = new Date()
            start.setHours(parseInt(startHours, 10))
            start.setMinutes(parseInt(startMinutes, 10))
            start.setSeconds(0)

            const end = new Date()
            end.setHours(parseInt(endHours, 10))
            end.setMinutes(parseInt(endMinutes, 10))
            end.setSeconds(0)

            // If end time is earlier than start time, it means it's the next day
            if (end < start) {
                end.setDate(end.getDate() + 1)
            }

            // If current time is earlier than start time, work hasn't started yet
            if (now < start) {
                setEarnings(0)
                return
            }

            // If current time is later than end time, work is finished
            if (now > end) {
                setEarnings(wage)
                return
            }

            // Calculate current earnings based on worked hours
            const totalWorkHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60)
            const workedHours = (now.getTime() - start.getTime()) / (1000 * 60 * 60)
            const progress = workedHours / totalWorkHours
            setEarnings(wage * progress)
        }

        calculateEarnings()
        const timer = setInterval(calculateEarnings, 1000)

        return () => clearInterval(timer)
    }, [startTime, endTime, dailyWage])

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-center">Today&apos;s Earnings 💵</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold text-center text-[#85bb65]">${earnings.toFixed(2)}</div>
            </CardContent>
        </Card>
    )
}
