'use client'

import {ChangeEvent} from 'react'
import {Label} from '@/components/ui/label'
import {Input} from '@/components/ui/input'

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
        <div className="grid gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="startTime">Start Time</Label>
                <Input type="time" id="startTime" value={startTime} onChange={handleStartTimeChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="endTime">End Time</Label>
                <Input type="time" id="endTime" value={endTime} onChange={handleEndTimeChange} />
            </div>
        </div>
    )
}
