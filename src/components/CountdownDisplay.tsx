'use client'

import {useEffect, useState} from 'react'
import {Card, CardContent, CardHeader, CardTitle} from './ui/card'

interface CountdownDisplayProps {
    endTime: string
    startTime: string
}

export default function CountdownDisplay({endTime, startTime}: CountdownDisplayProps) {
    const [timeLeft, setTimeLeft] = useState<string>('')
    const [isWorkTime, setIsWorkTime] = useState<boolean>(true)

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date()
            const [endHours, endMinutes] = endTime.split(':')
            const [startHours, startMinutes] = startTime.split(':')

            const end = new Date()
            end.setHours(parseInt(endHours, 10))
            end.setMinutes(parseInt(endMinutes, 10))
            end.setSeconds(0)

            const start = new Date()
            start.setHours(parseInt(startHours, 10))
            start.setMinutes(parseInt(startMinutes, 10))
            start.setSeconds(0)

            // 如果当前时间超过了下班时间，计算到明天上班的时间
            if (now > end) {
                start.setDate(start.getDate() + 1)
                setIsWorkTime(false)
            } else if (now < start) {
                setIsWorkTime(false)
            } else {
                setIsWorkTime(true)
            }

            const targetTime = isWorkTime ? end : start
            const diff = targetTime.getTime() - now.getTime()

            const hoursLeft = Math.floor(diff / (1000 * 60 * 60))
            const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000)

            setTimeLeft(`${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`)
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [endTime, startTime, isWorkTime])

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-center">{isWorkTime ? 'Time Until End of Work 🕒' : 'Time Until Start of Work 🌅'}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold text-center text-gray-900">{timeLeft}</div>
            </CardContent>
        </Card>
    )
}
