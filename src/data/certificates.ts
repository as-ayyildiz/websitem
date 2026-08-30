export interface Certificate {
	title: string;
	issuer: string;
	date: string;
	credentialId?: string;
	url?: string;
}

export const certificates: Certificate[] = [
	{
		title: 'Certified Associate Penetration Tester (CAPT)',
		issuer: 'Hackviser',
		date: 'Ağustos 2026',
	},
	{
		title: 'Certified Cybersecurity Foundations (CORE)',
		issuer: 'Hackviser',
		date: 'Ağustos 2026',
		credentialId: 'HV-CORE-N9CPC208',
	},
	{
		title: 'Blue Team Workshop',
		issuer: 'PURE7',
		date: 'Temmuz 2026',
	},
	{
		title: 'Siber Vatan Programı 2026',
		issuer: 'Siber Vatan',
		date: 'Ocak – Haziran 2026',
		credentialId: '58933899002831',
	},
	{
		title: 'Ağ Temelleri',
		issuer: 'BTK Akademi',
		date: 'Haziran 2026',
	},
	{
		title: 'Siber Güvenlikte Linux İşletim Sistemleri',
		issuer: 'BTK Akademi',
		date: 'Haziran 2026',
	},
	{
		title: 'Temel Linux',
		issuer: 'Turkcell Geleceği Yazanlar',
		date: 'Haziran 2026',
	},
	{
		title: 'Temel Network',
		issuer: 'Turkcell Geleceği Yazanlar',
		date: 'Haziran 2026',
	},
	{
		title: 'Siber Güvenlik 101',
		issuer: 'Akbank',
		date: 'Kasım 2025',
	},
];
