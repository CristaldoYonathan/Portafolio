'use client'

import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {ChevronRight, Download, Mail, Moon, Phone, Sun} from 'lucide-react'
import {GitHubLogoIcon} from '@radix-ui/react-icons'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Switch} from "@/components/ui/switch"
import Link from "next/link";

interface BubbleBackgroundProps {
    darkMode: boolean;
}

const BubbleBackground: React.FC<BubbleBackgroundProps> = ({darkMode}) => {
    const bubbles = Array.from({length: 20}, (_, i) => i)

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 backdrop-filter backdrop-blur-xl"></div>
            {bubbles.map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} opacity-20`}
                    style={{
                        width: Math.random() * 100 + 50,
                        height: Math.random() * 100 + 50,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, Math.random() * 30 - 15, 0],
                        y: [0, Math.random() * 30 - 15, 0],
                        borderRadius: ['50%', '40%', '50%'],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}

type SectionKey = 'profile' | 'experience' | 'education' | 'skills';

interface Job {
    title: string;
    period: string;
    details: string[];
}

interface Education {
    degree: string;
    institution: string;
    period: string;
}

interface Skills {
    technical: string[];
    soft: string[];
}

interface Sections {
    profile: {
        title: string;
        content: string;
    };
    experience: {
        title: string;
        content: Job[];
    };
    education: {
        title: string;
        content: Education[];
    };
    skills: {
        title: string;
        content: Skills;
    };
}

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'YonathanCristaldo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState<SectionKey>('profile')
    const [darkMode, setDarkMode] = useState(false)

    const sections: Sections = {
        profile: {
            title: 'Perfil Profesional',
            content: 'Analista en Sistemas con experiencia en desarrollo de software y liderazgo de proyectos. Especializado en metodologías ágiles y con un fuerte enfoque en la mejora continua de procesos de desarrollo. Buscando aplicar mis habilidades técnicas y de liderazgo en proyectos desafiantes.'
        },
        experience: {
            title: 'Experiencia Laboral',
            content: [
                {
                    title: 'Desarrollo de Software - EasyRent (Proyecto Institucional)',
                    period: '2022-2023',
                    details: [
                        'Participé activamente en un equipo de desarrollo, aplicando metodologías ágiles.',
                        'Contribuí a la implementación de prácticas de integración y despliegue continuo (CI/CD).',
                        'Colaboré en la automatización de procesos de desarrollo y pruebas.'
                    ]
                },
                {
                    title: 'Proyecto de Investigación - Universidad Nacional de Misiones',
                    period: '2024-Actualidad',
                    details: [
                        'Investigación sobre "Aprendizaje de los sistemas axiomáticos formales mediado con herramientas tecnológicas digitales".',
                        'Aplicación de tecnologías innovadoras en entornos educativos, fomentando una cultura de mejora continua.'
                    ]
                },
                {
                    title: 'Ayudantía ad honorem - Universidad Nacional de Misiones',
                    period: '2021-2022',
                    details: [
                        'Asistente en las cátedras de Estadística I.',
                        'Desarrollé habilidades de liderazgo y comunicación efectiva al orientar a estudiantes.'
                    ]
                }
            ]
        },
        education: {
            title: 'Educación',
            content: [
                {degree: 'Analista en Sistemas', institution: 'Universidad Nacional de Misiones', period: '2018-2023'},
                {
                    degree: 'Licenciatura en Sistemas de Información (En curso)',
                    institution: 'Universidad Nacional de Misiones',
                    period: '2019-Actualidad'
                },
                {degree: 'Técnico Electromecánico', institution: 'EPET N°30', period: '2012-2017'}
            ]
        },
        skills: {
            title: 'Habilidades',
            content: {
                technical: ['Metodologías ágiles (SCRUM, Kanban)', 'Desarrollo de software', 'Conocimientos en integración y despliegue continuo (CI/CD)', 'Familiaridad con contenedores y orquestación', 'Experiencia en trabajo con bases de datos SQL'],
                soft: ['Liderazgo de equipos', 'Comunicación asertiva', 'Resolución de problemas', 'Gestión de proyectos', 'Trabajo en equipo', 'Adaptabilidad y aprendizaje continuo']
            }
        }
    }

    return (
        <div
            className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-900'} transition-colors duration-300 p-4 sm:p-6 md:p-8 overflow-hidden relative`}>
            <BubbleBackground darkMode={darkMode}/>
            <Card
                className={`w-full max-w-[95%] sm:max-w-[90%] md:max-w-5xl mx-auto ${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80'} shadow-2xl overflow-hidden relative z-10 backdrop-filter backdrop-blur-sm`}>
                <CardHeader className="text-center relative overflow-hidden pb-8">
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <CardTitle className={`text-4xl sm:text-5xl md:text-6xl font-bold relative z-10 mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                            Yonathan Ariel Cristaldo
                        </CardTitle>
                        <CardDescription className={`text-2xl sm:text-3xl relative z-10 mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                            Analista en Sistemas de Computación
                        </CardDescription>
                    </motion.div>
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mt-6 relative z-10"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >   <Link href="https://wa.me/543758487019" target={"_blank"}>
                            <Button variant="outline" size="lg"
                                    className={`text-sm sm:text-base ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/80 text-gray-300 border-gray-600' : 'bg-gray-100/80 hover:bg-gray-200/80 text-gray-800 border-gray-300'}`}>
                                <Phone className="mr-2 h-5 w-5"/> 3758-487019
                            </Button>
                        </Link>
                        <Link href="mailto:ariel.cristaldo@fceqyn.unam.edu.ar" target={"_blank"}>
                            <Button variant="outline" size="lg"
                                    className={`text-sm sm:text-base ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/80 text-gray-300 border-gray-600' : 'bg-gray-100/80 hover:bg-gray-200/80 text-gray-800 border-gray-300'}`}>
                                <Mail className="mr-2 h-5 w-5"/> ariel.cristaldo@fceqyn.unam.edu.ar
                            </Button>
                        </Link>
                        <Link href={"https://github.com/CristaldoYonathan"} target={"_blank"}>
                            <Button variant="outline" size="lg"
                                    className={`text-sm sm:text-base ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/80 text-gray-300 border-gray-600' : 'bg-gray-100/80 hover:bg-gray-200/80 text-gray-800 border-gray-300'}`}>
                                <GitHubLogoIcon className="mr-2 h-5 w-5"/> github.com/CristaldoYonathan
                            </Button>
                        </Link>
                    </motion.div>
                </CardHeader>
                <CardContent className="relative">
                    <nav
                        className={`flex flex-wrap justify-center gap-4 mb-8 sticky top-0 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} py-4 z-20 backdrop-filter backdrop-blur-sm`}>
                        {(Object.keys(sections) as SectionKey[]).map((section) => (
                            <Button
                                key={section}
                                variant={activeSection === section ? "default" : "outline"}
                                onClick={() => setActiveSection(section)}
                                className={`text-sm sm:text-base ${activeSection === section ? (darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white') : (darkMode ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80' : 'bg-gray-100/80 text-gray-800 hover:bg-gray-200/80')}`}
                            >
                                {sections[section].title}
                            </Button>
                        ))}
                    </nav>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSection}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.3}}
                            className="overflow-y-auto max-h-[calc(100vh-400px)] pr-2"
                        >
                            {activeSection === 'profile' && (
                                <p className="text-lg sm:text-xl leading-relaxed">{sections.profile.content}</p>
                            )}
                            {activeSection === 'experience' && (
                                <div className="space-y-6">
                                    {sections.experience.content.map((job, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, x: -20}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.3, delay: index * 0.1}}
                                        >
                                            <Card
                                                className={darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-gray-100/80 border-gray-200'}>
                                                <CardHeader>
                                                    <CardTitle className="text-xl sm:text-2xl">{job.title}</CardTitle>
                                                    <CardDescription
                                                        className="text-base sm:text-lg">{job.period}</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                                        {job.details.map((detail, idx) => (
                                                            <li key={idx}>{detail}</li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                            {activeSection === 'education' && (
                                <div className="space-y-6">
                                    {sections.education.content.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, x: -20}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.3, delay: index * 0.1}}
                                        >
                                            <Card
                                                className={darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-gray-100/80 border-gray-200'}>
                                                <CardHeader>
                                                    <CardTitle className="text-xl sm:text-2xl">{edu.degree}</CardTitle>
                                                    <CardDescription
                                                        className="text-base sm:text-lg">{edu.institution}</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-base sm:text-lg">{edu.period}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                            {activeSection === 'skills' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.3}}
                                    >
                                        <Card
                                            className={darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-gray-100/80 border-gray-200'}>
                                            <CardHeader>
                                                <CardTitle className="text-xl sm:text-2xl">Habilidades
                                                    Técnicas</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">

                                                    {sections.skills.content.technical.map((skill, index) => (
                                                        <li key={index}>{skill}</li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0, x: 20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.3, delay: 0.1}}
                                    >
                                        <Card
                                            className={darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-gray-100/80 border-gray-200'}>
                                            <CardHeader>
                                                <CardTitle className="text-xl sm:text-2xl">Habilidades
                                                    Blandas</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                                    {sections.skills.content.soft.map((skill, index) => (
                                                        <li key={index}>{skill}</li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </CardContent>
            </Card>
            <div className="fixed bottom-6 right-6 z-30 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <Sun className="h-5  w-5"/>
                    <Switch
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                        className={`${darkMode ? 'bg-gray-600' : 'bg-gray-400'}`}
                    />
                    <Moon className="h-5 w-5"/>
                </div>
                <motion.div
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    <Button
                        size="lg"
                        className={`${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-800 text-white hover:bg-gray-700'} font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out`}
                        onClick={handleDownload}
                    >
                        <Download className="mr-2 h-5 w-5"/>
                        Descargar CV
                        <ChevronRight className="ml-2 h-5 w-5"/>
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}