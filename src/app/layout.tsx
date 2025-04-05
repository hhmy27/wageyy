import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Wageyy - 工资计算器',
    description: '实时计算你的工资和下班倒计时'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="zh">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
