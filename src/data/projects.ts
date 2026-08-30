import type { ImageMetadata } from 'astro';
import transkriptDashboard from '../assets/images/transkript/dashboard.png';
import bitkicepteLogo from '../assets/images/sera/bitkicepte-logo.png';
import takimFotografi from '../assets/images/sera/takim-fotografi.png';
import seraModel from '../assets/images/sera/sera-model.png';
import gelistirmeSureci from '../assets/images/sera/gelistirme-sureci.png';
import masaustuArayuz from '../assets/images/sera/masaustu-arayuz.png';
import mobilUygulama from '../assets/images/sera/mobil-uygulama.png';

export interface Project {
	title: string;
	badge?: string;
	description: string;
	highlights?: string[];
	links?: { label: string; href: string }[];
	images?: { src: ImageMetadata; alt: string }[];
	logo?: ImageMetadata;
}

export const projects: Project[] = [
	{
		title: 'Sanal Transkript Hesaplama Uygulaması',
		description:
			'Düzce Üniversitesi Bilgisayar Mühendisliği öğrencileri için geliştirdiğim, OBS\'deki sanal transkript hesaplama aracının eksik gördüğüm yönlerini tamamlayan bir uygulama. Öğrencinin alttan aldığı veya o dönem aldığı dersleri de hesaba katabiliyor; "Ders Ekle" butonuyla istenen herhangi bir ders hesaplamaya dahil edilebiliyor.',
		links: [
			{ label: 'Uygulamayı dene', href: 'https://transkript-hesaplama.vercel.app/' },
			{ label: 'GitHub', href: 'https://github.com/as-ayyildiz/transkript-hesaplama' },
		],
		images: [{ src: transkriptDashboard, alt: 'Sanal Transkript Hesaplama Uygulaması arayüzü' }],
	},
	{
		title: 'Akıllı Sera Otomasyon Sistemi',
		badge: 'düHackathon 2026 — 30 takım arasından 1.lik',
		description:
			'Sürdürülebilirlik odaklı teknolojiler geliştirmek amacıyla hayata geçirdiğimiz proje; tarımda verimliliği artırmak ve kaynak tüketimini optimize etmek için donanım ve yazılımı entegre eden kapsamlı bir sera otomasyon sistemi. Arduino ve ESP32 üzerine kurulu üç farklı kontrol mekanizması sunuyor:',
		highlights: [
			'BitkiCepte mobil uygulaması — ESP32 Wi-Fi entegrasyonuyla ışık, fan ve sulama sistemlerinin uzaktan yönetimi',
			'Masaüstü kontrol arayüzü — USB üzerinden doğrudan makete bağlanarak stabil ve detaylı sistem kontrolü',
			'Tam otomatik mod — sensör verileriyle manuel müdahale gerekmeden ideal sera koşullarının korunması',
		],
		logo: bitkicepteLogo,
		images: [
			{ src: takimFotografi, alt: 'düHackathon 2026 birincilik — ekip ve sera modeli' },
			{ src: seraModel, alt: 'Bitmiş sera modeli, gece aydınlatmasıyla' },
			{ src: gelistirmeSureci, alt: 'Geliştirme süreci — devre, montaj ve ekip çalışması' },
			{ src: masaustuArayuz, alt: 'BitkiCepte masaüstü kontrol arayüzü' },
			{ src: mobilUygulama, alt: 'BitkiCepte mobil uygulama ekranları' },
		],
	},
];
