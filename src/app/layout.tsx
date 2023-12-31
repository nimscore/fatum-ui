import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../../styles/globals.scss'
import ModalLogin from '../components/ui/modals/login/ModalLogin'

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
	title: 'Fatum',
	description: 'Единое решение для Ваших сообществ!'
}

// class FetchClient {
// 	private LANG = process.env.LANG as string
// }
const SITE_LANG = process.env.LANG as string
// console.log(SITE_LANG)

export default function RootLayout({
	children,
	login
}: {
	children: React.ReactNode
	login: React.ReactNode
}) {
	return (
		<>
			<html lang='ru'>
				<body className={montserrat.className}>
					{children}
					{login}
					<ModalLogin />
				</body>
			</html>
		</>
	)
}
