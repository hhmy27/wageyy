'use client'

import {useEffect, useState} from 'react'

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

            // 如果结束时间小于当前时间，说明是第二天
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
        <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-700">距离下班还有</h2>
            <div className="mt-2 text-4xl font-bold text-blue-600">{timeLeft}</div>
        </div>
    )
}
