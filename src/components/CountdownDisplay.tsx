'use client'

import {useEffect, useState} from 'react'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'

interface CountdownDisplayProps {
    endTime: string
}

export default function CountdownDisplay({endTime}: CountdownDisplayProps) {
    const [timeLeft, setTimeLeft] = useState<string>('')

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date()
            const [hours, minutes] = endTime.split(':')
            const end = new Date()
            end.setHours(parseInt(hours, 10))
            end.setMinutes(parseInt(minutes, 10))
            end.setSeconds(0)

            // If end time is earlier than current time, it means it's the next day
            if (end < now) {
                end.setDate(end.getDate() + 1)
            }

            const diff = end.getTime() - now.getTime()
            const hoursLeft = Math.floor(diff / (1000 * 60 * 60))
            const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000)

            setTimeLeft(`${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`)
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [endTime])

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-center">Time Until End of Work</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold text-center text-blue-600">{timeLeft}</div>
            </CardContent>
        </Card>
    )
}
