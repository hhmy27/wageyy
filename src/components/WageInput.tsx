'use client'

import {ChangeEvent} from 'react'
import {Label} from './ui/label'
import {Input} from './ui/input'

interface WageInputProps {
    dailyWage: string
    onWageChange: (wage: string) => void
}

export default function WageInput({dailyWage, onWageChange}: WageInputProps) {
    const handleWageChange = (e: ChangeEvent<HTMLInputElement>) => {
        onWageChange(e.target.value)
    }

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="dailyWage">Daily Rate (USD/day)</Label>
            <Input type="number" id="dailyWage" value={dailyWage} onChange={handleWageChange} min="0" step="0.01" placeholder="Enter your daily rate" />
        </div>
    )
}
