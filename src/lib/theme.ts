export type ThemeColors = {
    accent: string;
    darkAccent: string;
};

const STORAGE_KEY = "theme";

/**
 * El tema oscuro es el principal: solo se usa el claro si el visitante
 * lo eligió explícitamente antes.
 */
export function resolveIsDark(): boolean {
    try {
        return localStorage.getItem(STORAGE_KEY) !== "light";
    } catch (e) {
        return true;
    }
}

export function isDark(): boolean {
    return document.documentElement.classList.contains("dark");
}

export function applyTheme(colors: ThemeColors, dark = isDark()): void {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.style.setProperty("--accent-color", dark ? colors.darkAccent : colors.accent);
}

export function toggleTheme(colors: ThemeColors): boolean {
    const dark = !isDark();
    applyTheme(colors, dark);
    try {
        localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch (e) {}
    return dark;
}

export function themeColorsFromButton(button: HTMLElement): ThemeColors {
    return {
        accent: button.dataset.accentColor ?? "#2E3033",
        darkAccent: button.dataset.darkAccentColor ?? "#A1A1AA",
    };
}

export function initThemeToggle(): void {
    const button = document.getElementById("theme-toggle");
    if (!(button instanceof HTMLButtonElement)) return;

    const colors = themeColorsFromButton(button);
    const sync = () => button.setAttribute("aria-pressed", String(isDark()));
    sync();

    button.addEventListener("click", () => {
        toggleTheme(colors);
        sync();
    });
}
