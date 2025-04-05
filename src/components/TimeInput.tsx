'use client'

import {ChangeEvent} from 'react'

interface TimeInputProps {
    startTime: string
    endTime: string
    onStartTimeChange: (time: string) => void
    onEndTimeChange: (time: string) => void
}

export default function TimeInput({startTime, endTime, onStartTimeChange, onEndTimeChange}: TimeInputProps) {
    const handleStartTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        onStartTimeChange(e.target.value)
    }

    const handleEndTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        onEndTimeChange(e.target.value)
    }

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
                <label htmlFor="startTime" className="text-sm font-medium text-gray-700">
                    开始时间
                </label>
                <input
                    type="time"
                    id="startTime"
                    value={startTime}
                    onChange={handleStartTimeChange}
                    className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="endTime" className="text-sm font-medium text-gray-700">
                    结束时间
                </label>
                <input
                    type="time"
                    id="endTime"
                    value={endTime}
                    onChange={handleEndTimeChange}
                    className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
        </div>
    )
}
