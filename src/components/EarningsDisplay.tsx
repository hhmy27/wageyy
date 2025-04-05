'use client'

import {useEffect, useState} from 'react'

interface EarningsDisplayProps {
    startTime: string
    endTime: string
    hourlyWage: string
}

export default function EarningsDisplay({startTime, endTime, hourlyWage}: EarningsDisplayProps) {
    const [earnings, setEarnings] = useState<number>(0)

    useEffect(() => {
        const calculateEarnings = () => {
            const now = new Date()
            const [startHours, startMinutes] = startTime.split(':')
            const [endHours, endMinutes] = endTime.split(':')
            const wage = parseFloat(hourlyWage) || 0

            const start = new Date()
            start.setHours(parseInt(startHours, 10))
            start.setMinutes(parseInt(startMinutes, 10))
            start.setSeconds(0)

            const end = new Date()
            end.setHours(parseInt(endHours, 10))
            end.setMinutes(parseInt(endMinutes, 10))
            end.setSeconds(0)

            // 如果结束时间小于开始时间，说明是第二天
            if (end < start) {
                end.setDate(end.getDate() + 1)
            }

            // 如果当前时间小于开始时间，说明还没开始工作
            if (now < start) {
                setEarnings(0)
                return
            }

            // 如果当前时间大于结束时间，说明已经下班
            if (now > end) {
                const totalHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60)
                setEarnings(totalHours * wage)
                return
            }

            // 计算当前已工作的时间
            const workedHours = (now.getTime() - start.getTime()) / (1000 * 60 * 60)
            setEarnings(workedHours * wage)
        }

        calculateEarnings()
        const timer = setInterval(calculateEarnings, 1000)

        return () => clearInterval(timer)
    }, [startTime, endTime, hourlyWage])

    return (
        <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-700">今日已赚</h2>
            <div className="mt-2 text-4xl font-bold text-green-600">¥{earnings.toFixed(2)}</div>
        </div>
    )
}
