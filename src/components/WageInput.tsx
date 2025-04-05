'use client'

import {ChangeEvent} from 'react'

interface WageInputProps {
    dailyWage: string
    onWageChange: (wage: string) => void
}

export default function WageInput({dailyWage, onWageChange}: WageInputProps) {
    const handleWageChange = (e: ChangeEvent<HTMLInputElement>) => {
        onWageChange(e.target.value)
    }

    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="dailyWage" className="text-sm font-medium text-gray-700">
                Daily Rate (USD/day)
            </label>
            <input
                type="number"
                id="dailyWage"
                value={dailyWage}
                onChange={handleWageChange}
                min="0"
                step="0.01"
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
        </div>
    )
}
