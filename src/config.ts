/* -------------------------------------------------------------------------- */
/*                                 Idiomas                                    */
/* -------------------------------------------------------------------------- */

export const defaultLocale = "en" as const;

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
    en: "English",
    es: "Español",
};

/* -------------------------------------------------------------------------- */
/*                          Datos compartidos entre idiomas                  */
/* -------------------------------------------------------------------------- */

export const shared = {
    name: "Fede Lupiañez",
    accentColor: "#2E3033",
    darkAccentColor: "#A1A1AA",
    profileImage: "/profile_image.jpeg",
    social: {
        email: "lupianezfederico@gmail.com",
        linkedin: "https://linkedin.com/in/yourprofile",
        twitter: "https://x.com/Fedee_ilup",
        github: "https://github.com/FedeLupianez",
    },
    skills: ["Nestjs", "Python", "Svelte", "Docker", "C"],

    projects: [
        {
            link: "https://cecit-frontend.onrender.com",
            skills: ["Svelte", "NestJS", "Vercel"],
        },
        {
            link: "https://github.com/FedeLupianez/rouchDB",
            skills: ["C"],
        },
    ],

    experience: [
        {
            company: "CeCIT",
        },
    ],

    education: [
        {
            school: "Instituto Manuel de Falla",
            dateRange: "2022 - 2026",
        },
    ],
};

/* -------------------------------------------------------------------------- */
/*                               Traducciones                                 */
/* -------------------------------------------------------------------------- */

export const translations = {
    en: {
        title: "Backend Software Developer",
        description: "This is my portfolio",
        aboutMe:
            "I am a Computer Science student, a Programming Technician, and a passionate Full Stack Developer with a strong interest in software development, particularly Backend development. I primarily work with technologies such as NestJS, TypeORM, C, and Python. I am especially interested in projects that require high performance and availability, as well as low-level projects and specialized solutions tailored to a client's needs. I am currently looking to further develop professionally in the IT industry, gaining experience in server administration and web platform development while exploring how to integrate AI to optimize my workflow.",

        projects: [
            {
                name: "Alta Gracia CeCIT Benefits page",
                description:
                    "Exclusive benefits platform for members of the Alta Gracia Chamber of Commerce, invited to present the platform at FEDECOM.",
            },
            {
                name: "InnoDB like DB Engine",
                description:
                    "C-based Database Engine inspired by InnoDB's architecture, with a strong focus on performance.",
            },
        ],

        experience: [
            {
                title: "Full Stack Developer and Project Manager",
                bullets: [
                    "Create Backend and Frontend architecture",
                    "Improve system performance and his operations",
                    "Mentored team of 4 junior developers",
                ],
            },
        ],

        education: [
            {
                degree: "Programming Technician",
                achievements: [
                    "Best annual averages",
                    "SMB school Server creator and maintainer"
                ],
            },
            {
                degree: "Computer Science Student",
                achievements: [
                    "FAMAF student",
                ],
            },
        ],

        /* Textos de la interfaz (no estaban en config.ts) */
        ui: {
            nav: {
                about: "About",
                projects: "Projects",
                experience: "Experience",
                education: "Education",
            },
            sections: {
                aboutMe: "About Me",
                projects: "Projects",
                experience: "Experience",
                education: "Education",
            },
            hero: {
                hello: "Hello!",
                im: "I'm",
            },
            footer: {
                allRightsReserved: "All rights reserved.",
            },
            a11y: {
                profileAlt: "Profile picture of {name}",
                toggleTheme: "Toggle color theme",
                language: "Language",
                email: "Email",
                linkedin: "LinkedIn",
                twitter: "Twitter",
                github: "GitHub",
            },
        },
    },

    es: {
        title: "Desarrollador FullStack",
        description: "Este es mi portfolio",
        aboutMe:
            "Soy estudiante de Licenciatura en Ciencias de la Computación, Técnico en Programación y desarrollador Full Stack apasionado por el desarrollo de software, con especial interés en Backend. Trabajo principalmente con tecnologías como NestJS, TypeORM, C y Python. Me interesan especialmente los proyectos que requieren un alto rendimiento y disponibilidad, así como aquellos de bajo nivel o soluciones especializadas para las necesidades de un cliente. Actualmente busco seguir desarrollándome profesionalmente en el ámbito IT, adquiriendo experiencia en administración de servidores y desarrollo de plataformas web, mientras exploro cómo integrar la IA para optimizar mi trabajo.",

        projects: [
            {
                name: "CeCIT Plataforma de Beneficios",
                description:
                    "Página de Beneficios exclusiva para socios del Centro de Comercio de Alta Gracia, siendo invitado a presentar la plataforma en FEDECOM.",
            },
            {
                name: "Motor de Base de Datos",
                description:
                    "Motor de Base de Datos en C inspirado en el funcionamiento de InnoDB, priorizando la performance.",
            },
        ],

        experience: [
            {
                title: "Desarrollador Full Stack y Líder de Proyecto",
                bullets: [
                    "Diseño de la arquitectura del Backend y Frontend",
                    "Optimización del rendimiento y las operaciones del sistema",
                    "Mentoría y acompañamiento de un equipo de 4 desarrolladores junior",
                ],
            },
        ],

        education: [
            {
                degree: "Técnico en Programación",
                achievements: [
                    "Mejores promedios anuales",
                    "Creador y administrador del servidor de la institución",
                ],
            },
            {
                degree: "Estudiante de Ciencias de la Computación",
                achievements: [
                    "Estudiante de FAMAF",
                ],
            },
        ],

        ui: {
            nav: {
                about: "Sobre mí",
                projects: "Proyectos",
                experience: "Experiencia",
                education: "Educación",
            },
            sections: {
                aboutMe: "Sobre mí",
                projects: "Proyectos",
                experience: "Experiencia",
                education: "Educación",
            },
            hero: {
                hello: "¡Hola!",
                im: "Soy",
            },
            footer: {
                allRightsReserved: "Todos los derechos reservados.",
            },
            a11y: {
                profileAlt: "Foto de perfil de {name}",
                toggleTheme: "Cambiar tema de color",
                language: "Idioma",
                email: "Correo",
                linkedin: "LinkedIn",
                twitter: "Twitter",
                github: "GitHub",
            },
        },
    },
} satisfies Record<Locale, Translations>;

/* -------------------------------------------------------------------------- */
/*                                   Tipos                                     */
/* -------------------------------------------------------------------------- */

export type ProjectText = {
    name?: string;
    description?: string;
    skills?: string[];
};

export type ExperienceText = {
    company?: string;
    title?: string;
    dateRange?: string;
    bullets?: string[];
};

export type EducationText = {
    school?: string;
    degree?: string;
    dateRange?: string;
    achievements?: string[];
};

export type UiStrings = {
    nav: { about: string; projects: string; experience: string; education: string };
    sections: { aboutMe: string; projects: string; experience: string; education: string };
    hero: { hello: string; im: string };
    footer: { allRightsReserved: string };
    a11y: {
        profileAlt: string;
        toggleTheme: string;
        language: string;
        email: string;
        linkedin: string;
        twitter: string;
        github: string;
    };
};

export type Translations = {
    title: string;
    description: string;
    aboutMe: string;
    projects: ProjectText[];
    experience: ExperienceText[];
    education: EducationText[];
    ui: UiStrings;
};

/* Configuración final que reciben los componentes: shared + traducciones
   resueltas (todos los campos obligatorios y ya combinados). */
export type SiteConfig = {
    name: string;
    accentColor: string;
    darkAccentColor: string;
    profileImage: string;
    social: typeof shared.social;
    skills: string[];
    title: string;
    description: string;
    aboutMe: string;
    projects: { name: string; description: string; link: string; skills: string[] }[];
    experience: {
        company: string;
        title: string;
        dateRange: string;
        bullets: string[];
    }[];
    education: {
        school: string;
        degree: string;
        dateRange: string;
        achievements: string[];
    }[];
    ui: UiStrings;
};
