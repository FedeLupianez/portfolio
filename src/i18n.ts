import {
    defaultLocale,
    localeNames,
    locales,
    shared,
    translations,
    type Locale,
    type SiteConfig,
} from "./config";

export { defaultLocale, localeNames, locales };
export type { Locale };

export function isLocale(value: unknown): value is Locale {
    return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/**
 * Combina, por índice, la estructura de `shared` con la traducción.
 * Si un item existe solo en uno de los dos, se conserva igual.
 */
function mergeList<TBase extends object, TText extends object>(
    base: TBase[],
    text: (Partial<TText> & object)[] = []
): (Partial<TBase> & Partial<TText>)[] {
    const length = Math.max(base.length, text.length);

    return Array.from({ length }, (_, index) => {
        const merged: Record<string, unknown> = {
            ...(base[index] ?? {}),
            ...(text[index] ?? {}),
        };

        for (const key of Object.keys(merged)) {
            if (merged[key] === undefined) delete merged[key];
        }

        return merged as Partial<TBase> & Partial<TText>;
    });
}

/**
 * Devuelve la configuración del sitio para un idioma, combinando los datos
 * compartidos con las traducciones de ese idioma.
 */
export function getSiteConfig(lang: Locale = defaultLocale): SiteConfig {
    const t = translations[lang] ?? translations[defaultLocale];

    return {
        name: shared.name,
        accentColor: shared.accentColor,
        darkAccentColor: shared.darkAccentColor,
        profileImage: shared.profileImage,
        social: shared.social,
        skills: shared.skills,
        title: t.title,
        description: t.description,
        aboutMe: t.aboutMe,
        projects: mergeList(shared.projects, t.projects),
        experience: mergeList(shared.experience, t.experience),
        education: mergeList(shared.education, t.education),
        ui: t.ui,
    };
}

/** Reemplaza placeholders tipo {name} en los textos de la interfaz. */
export function formatText(text: string, vars: Record<string, string> = {}): string {
    return text.replace(/\{(\w+)\}/g, (match, key: string) => vars[key] ?? match);
}

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** URL de un idioma. El idioma por defecto vive en la raíz. */
export function localePath(lang: Locale): string {
    return lang === defaultLocale ? `${base || ""}/` : `${base}/${lang}/`;
}
