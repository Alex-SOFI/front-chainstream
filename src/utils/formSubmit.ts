// Utilitaire pour soumettre les formulaires via Web3Forms
// Obtenez votre clé d'accès gratuite sur https://web3forms.com

export const ACCESS_KEY = "ff843899-9ef7-4a5b-9b48-b0a0843f6f8e";

export interface SubmitFormParams {
    email: string;
    subject?: string;
    fromName?: string;
}

export const submitWaitlistForm = async ({
    email,
    subject = "Nouvelle inscription à la waitlist",
    fromName = "Waitlist",
}: SubmitFormParams): Promise<{ success: boolean; error?: string }> => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: ACCESS_KEY,
                subject,
                email,
                from_name: fromName,
                message: `Nouvelle inscription à la waitlist: ${email}`,
            }),
        });

        const result = await response.json();

        if (result.success) {
            return { success: true };
        } else {
            return { success: false, error: result.message || "Erreur inconnue" };
        }
    } catch (error) {
        console.error("Erreur lors de l'envoi:", error);
        return { success: false, error: "Erreur de connexion" };
    }
};
