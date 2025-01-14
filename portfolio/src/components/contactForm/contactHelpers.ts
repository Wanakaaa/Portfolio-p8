export interface FormValues {
    name: string | null
    email: string | null
    message: string | null
}

export interface SubmitFormResponse {
    success: boolean;
    errorType?: string;
    message: string;
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validateFormValues(formValues: FormValues) {
    const { name, email, message } = formValues;
  
    if (!name || !email || !message) {
      return "Tous les champs sont obligatoires.";
    }
  
    // Ajout de la validation de l'email
    if (!isValidEmail(email)) {
      return "Veuillez fournir une adresse email valide.";
    }
  
    return null;
}

export async function submitForm(formValues: FormValues): Promise<SubmitFormResponse> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues),
        });

        if (!response.ok) {
            const errorData = await response.json();
            let errorMessage = "Erreur lors de l'envoi du message";

            // Gestion des erreurs spécifiques selon le `errorType`
            switch (errorData.errorType) {
                case 'honp':
                    errorMessage = "Il semble que vous soyez un bot. Le message n'a pas été envoyé.";
                    break;
                case 'missing_fields':
                    errorMessage = "Tous les champs sont obligatoires.";
                    break;
                case 'invalid_email':
                    errorMessage = "Veuillez fournir une adresse email valide.";
                    break;
                default:
                    errorMessage = errorData.error || "Une erreur est survenue.";
                    break;
            }

            return {
                success: false,
                errorType: errorData.errorType,
                message: errorMessage,
            };
        }

        return { success: true, message: "Merci de m'avoir contacté, je reviens rapidement vers vous."}
    } catch (err) {
        console.error("Erreur lors de la soumission du formulaire :", err)
        return { success: false, message: "Une erreur est survenue lors de la soumission du formulaire."}
    }
}